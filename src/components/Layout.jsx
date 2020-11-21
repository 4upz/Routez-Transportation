/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { customTheme } from "../util/theme"
import { ChakraProvider } from "@chakra-ui/react"
import Header from "./Headers/Header"
import Footer from "./Footer/Footer"
import Notification from "./Banners/Notification"
import "./custom-styles.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      logo: file(relativePath: { eq: "RTlogo.png" }) {
        childImageSharp {
          fixed(width: 93, height: 100, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <ChakraProvider theme={customTheme}>
      {/* TODO: Use ColorModeProvider to incorporate theme switcher */}
      <Notification
        linkTo="/coronavirus"
        text="Click HERE to View Statement to Customers and Partners Regarding COVID-19"
      />
      <Header
        siteTitle={data.site.siteMetadata.title}
        logo={data.logo.childImageSharp.fixed}
      />
      <main>{children}</main>
      <Footer />
    </ChakraProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
