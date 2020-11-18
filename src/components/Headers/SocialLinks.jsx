import React from "react"
import { Flex, Link } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

const SocialLinks = ({ show }) => (
  <Flex
    display={{ sm: show ? "block" : "none", md: "flex" }}
    justifyContent="center"
    fontSize="2rem"
    mx="auto"
    py={3}
    className="social-links"
  >
    <Link mx={6} href="https://www.instagram.com/">
      <FontAwesomeIcon icon={faInstagram} />
    </Link>
    <Link mx={6} href="https://www.facebook.com/">
      <FontAwesomeIcon icon={faFacebook} />
    </Link>
    <Link mx={6} href="https://www.twitter.com/">
      <FontAwesomeIcon icon={faTwitter} />
    </Link>
  </Flex>
)

export default SocialLinks
