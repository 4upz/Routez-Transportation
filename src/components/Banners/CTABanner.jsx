import React from "react"
import { Box, VStack, Heading, Button } from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"

const CTABanner = ({ heading, linkText, linkTo }) => (
  <Box as="section" p={8} my={6}>
    <VStack spacing="30px">
      <Heading as="h2">{heading}</Heading>
      <Button
        as={GatsbyLink}
        colorScheme="brand"
        color="black"
        className="primary-button"
        size="lg"
        to={linkTo}
      >
        {linkText}
      </Button>
    </VStack>
  </Box>
)

export default CTABanner
