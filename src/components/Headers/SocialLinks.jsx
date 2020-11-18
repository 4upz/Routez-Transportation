import React from "react";
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
      w="10%"
      justifyContent="space-between"
      fontSize="1.5rem"
    >
      <Link href="https://www.instagram.com/">
        <FontAwesomeIcon icon={faInstagram} />
      </Link>
      <Link href="https://www.facebook.com/">
        <FontAwesomeIcon icon={faFacebook} />
      </Link>
      <Link href="https://www.twitter.com/">
        <FontAwesomeIcon icon={faTwitter} />
      </Link>
    </Flex>
  )

export default SocialLinks;