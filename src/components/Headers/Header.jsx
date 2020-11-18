import { Link } from "gatsby"
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
      mb={8}
      p={8}
      bg={["brand.500", "brand.500", "transparent", "transparent"]}
      color={["white", "white", "black", "black"]}
      className="header-nav"
    >
      <Flex align="center">
        <Link to="/">
          <Img fixed={logo} alt={siteTitle} />
        </Link>
      </Flex>
      <Spacer />
      <MobileToggle onClick={toggleMenu} />
      <HeaderNav shouldShow={show}>
        <HeaderNavItem to="/">About Us</HeaderNavItem>
        <HeaderNavItem to="/">Our Services</HeaderNavItem>
        <HeaderNavItem to="/" isLast>
          <Button
            size="md"
            color={["black", "black", "white", "white"]}
            bg={["white", "white", "brand.500", "brand.500"]}
            _hover={{
              bg: ["brand.100", "brand.100", "brand.600", "brand.600"],
            }}
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
