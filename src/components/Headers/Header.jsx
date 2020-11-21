import { Link as GatsbyLink } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import { Button, Flex, Spacer } from "@chakra-ui/react"
import MobileToggle from "./MobileToggle"
import HeaderNav from "./HeaderNav"
import HeaderNavItem from "./HeaderNavItem"

const Header = ({ siteTitle, logo }) => {
  const [show, setShow] = React.useState(false)
  const toggleMenu = () => setShow(!show)

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      px={6}
      pt={6}
      pb={{ base: 6, md: 0 }}
      maxW={1200}
      mx="auto"
      bg="transparent"
      color="black"
      className="header-nav"
    >
      <Flex align="center">
        <GatsbyLink to="/">
          <Img fixed={logo} alt={siteTitle} />
        </GatsbyLink>
      </Flex>
      <Spacer />
      <MobileToggle onClick={toggleMenu} />
      <HeaderNav shouldShow={show}>
        <HeaderNavItem to="/about">About Us</HeaderNavItem>
        <HeaderNavItem to="/services">Our Services</HeaderNavItem>
        <HeaderNavItem to="/contact" isLast>
          <Button
            className="primary-button"
            size="md"
            color="black"
            bg={["white", "white", "brand.500", "brand.500"]}
            _hover={{
              bg: ["brand.100", "brand.100", "brand.600", "brand.600"],
            }}
            fontSize={18}
          >
            Contact Us
          </Button>
        </HeaderNavItem>
      </HeaderNav>
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
