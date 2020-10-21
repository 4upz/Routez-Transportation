import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { Box, Flex, Link as ExternalLink } from "@chakra-ui/core"

/* *** TODO: Split up component and fix mobile stylings *** */
const MobileToggle = ({ onClick }) => (
  <Box display={{ base: "block", md: "none" }} onClick={onClick}>
    <svg
      fill="white"
      width="20px"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  </Box>
)

const HeaderNav = ({ show, children }) => (
  <Flex
    as="nav"
    display={{ sm: show ? "block" : "none", md: "flex" }}
    justifySelf="center"
    justifyContent="space-between"
    fontSize={18}
    w={{ sm: "full", md: "30%" }}
    alignItems="center"
  >
    {children}
  </Flex>
)

const SocialLinks = ({ show }) => (
  <Flex
    display={{ sm: show ? "block" : "none", md: "flex" }}
    w="10%"
    justifyContent="space-between"
    fontSize="1.5rem"
  >
    <ExternalLink href="https://www.instagram.com/">
      <FontAwesomeIcon icon={faInstagram} />
    </ExternalLink>
    <ExternalLink href="https://www.facebook.com/">
      <FontAwesomeIcon icon={faFacebook} />
    </ExternalLink>
    <ExternalLink href="https://www.twitter.com/">
      <FontAwesomeIcon icon={faTwitter} />
    </ExternalLink>
  </Flex>
)

const Header = ({ siteTitle, logo }) => {
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      padding="1.5rem"
      mx="auto"
      px="3rem"
      maxW="1920px"
      className="header-nav"
    >
      <Box align="center">
        <Link to="/">
          <Img fixed={logo} alt={siteTitle} />
        </Link>
      </Box>

      <MobileToggle onClick={handleToggle} />

      <HeaderNav show={show}>
        <Link to="/">About Us</Link>
        <Link to="/">Our Services</Link>
        <Link to="/">Contact Us</Link>
      </HeaderNav>

      <SocialLinks show={show} />
    </Flex>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  logo: PropTypes.object.isRequired,
}

Header.defaultProps = {
  siteTitle: `Routez Transportation`,
}

export default Header
