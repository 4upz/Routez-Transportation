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
import { ChakraProvider, Box, Text } from "@chakra-ui/react"
import Header from "./Headers/Header"
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
          fixed(width: 75) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <ChakraProvider theme={customTheme}>
      {/* TODO: Use ColorModeProvider to incorporate theme switcher */}
      <Header
        siteTitle={data.site.siteMetadata.title}
        logo={data.logo.childImageSharp.fixed}
      />
      <main>{children}</main>
      <Box as="footer" mx="auto" textAlign="center">
        <Text>
          Copyright © {new Date().getFullYear()} Routez Transportation
        </Text>
      </Box>
    </ChakraProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
