import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Box, HStack, Button, Heading, Image } from "@chakra-ui/react"
import illustration from "../../images/art/about.svg"

const AboutCTA = () => (
  <Box maxW={1200} mx="auto" my={12} textAlign="center">
    <Heading>Have We Caught Your Attention?</Heading>
    <Image src={illustration} mx="auto" my={6} w="80%" />
    <HStack my={6} py="30px" justify="center">
      <Button
        as={GatsbyLink}
        colorScheme="brand"
        color="black"
        className="primary-button"
        size="lg"
        to="/services"
      >
        Our Services
      </Button>
      <Button
        as={GatsbyLink}
        backgroundColor="black"
        color="white"
        className="secondary-button"
        size="lg"
        to="/contact"
      >
        Get in Touch
      </Button>
    </HStack>
  </Box>
)

export default AboutCTA
