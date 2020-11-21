import React from "react"
import { Box, VStack, Heading, Button } from "@chakra-ui/react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const CTABanner = ({ heading, linkText, linkTo }) => (
  <Box as="section" p={8} my={6}>
    <VStack spacing="30px">
      <Heading as="h2" textAlign="center">
        {heading}
      </Heading>
      <Button
        as={AniLink}
        swipe
        direction="left"
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
