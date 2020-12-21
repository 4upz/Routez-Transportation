import React from "react"
import { Box, Flex, Link, Text } from "@chakra-ui/react"
import SocialLinks from "../Headers/SocialLinks"

const Footer = () => (
  <Box as="footer" px={8} py={6} bgColor="brand.500">
    <Flex
      justify="center"
      align="center"
      flexDir={{ base: "column", md: "row" }}
    >
      <Box
        fontSize="18px"
        mr={{ base: 0, md: 12 }}
        mb={{ base: 6, md: 0 }}
        textAlign={{ base: "center", md: "left" }}
      >
        <Text>Routez Transportation</Text>
        <Text>
          <Link href="tel:2163941302">(216)-394-1302</Link>
        </Text>
        <Link href="mailto:info@routeztransportation.com">
          info@routeztransportation.com
        </Link>
      </Box>
      <SocialLinks />
    </Flex>
    <Text textAlign="center" mt={6}>
      Copyright © {new Date().getFullYear()} Routez Transportation
    </Text>
  </Box>
)

export default Footer
