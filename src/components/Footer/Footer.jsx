import React from "react"
import { Box, Link, Text } from "@chakra-ui/react"
import SocialLinks from "../Headers/SocialLinks"

const Footer = () => (
  <Box px={8} py={3} bgColor="brand.500">
    <SocialLinks />
    <Box as="footer" mx="auto" textAlign="center" fontSize="21px">
      <Text>Routez Transportation</Text>
      <Text>216-XXX-XXX</Text>
      <Link href="mailto:info@routeztransportation.com">
        info@routeztransportation.com
      </Link>
    </Box>
    <Text textAlign="center" mt={6}>
      Copyright © {new Date().getFullYear()} Routez Transportation
    </Text>
  </Box>
)

export default Footer
