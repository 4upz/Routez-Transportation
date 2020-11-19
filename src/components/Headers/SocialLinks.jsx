import React from "react"
import { Box, Flex, Text, Link } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

const SocialLinks = ({ show }) => (
  <Box>
    <Text textAlign={{ base: "center", md: "left" }}>Follow Us</Text>
    <Flex
      display={{ sm: show ? "block" : "none", md: "flex" }}
      justifyContent="center"
      fontSize="1.5rem"
      className="social-links"
    >
      <Link mr={3} href="https://www.instagram.com/">
        <FontAwesomeIcon icon={faInstagram} />
      </Link>
      <Link mx={3} href="https://www.facebook.com/">
        <FontAwesomeIcon icon={faFacebook} />
      </Link>
      <Link mx={3} href="https://www.twitter.com/">
        <FontAwesomeIcon icon={faTwitter} />
      </Link>
    </Flex>
  </Box>
)

export default SocialLinks
