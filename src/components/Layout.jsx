/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { customTheme } from "../util/theme"
import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  Box,
  Text,
} from "@chakra-ui/core"
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
    <ThemeProvider theme={customTheme}>
      {/* TODO: Use ColorModeProvider to incorporate theme switcher */}
      <ColorModeProvider>
        <CSSReset />
        <Header
          siteTitle={data.site.siteMetadata.title}
          logo={data.logo.childImageSharp.fixed}
        />
        <main>{children}</main>
        <Box as="footer" mx="auto" textAlign="center">
          <Text>
            Copyright © {new Date().getFullYear()} Routez Transportation
          </Text>
          Built with
          {` `}
          <Link href="https://www.gatsbyjs.org">Gatsby</Link>
        </Box>
      </ColorModeProvider>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
