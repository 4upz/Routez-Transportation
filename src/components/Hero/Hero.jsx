import React from "react"
import PropTypes from "prop-types"
import {
  Box,
  Flex,
  Stack,
  Heading,
  Button,
  Image,
  Text,
} from "@chakra-ui/react"
import heroImage from "../../images/art/hero-image.svg"

const Hero = ({ businessNumber }) => {
  return (
    <Flex
      flexDir={{ base: "column-reverse", md: "row" }}
      justifyContent="center"
      alignItems="center"
      px={8}
      // my={8}
      mx="auto"
      minH="80vh"
      maxW="1200px"
    >
      <Stack spacing={8}>
        <Stack>
          <Heading as="h2" size="md" fontWeight="normal">
            Anytime. Any day.
          </Heading>
          <Heading as="h1" size="2xl">
            We'll take you there!
          </Heading>
        </Stack>
        <Stack isInline>
          <Button colorScheme="brand">Why Us?</Button>
          <Button>Get In Touch</Button>
        </Stack>
        <Text>To Book a Ride: {businessNumber}</Text>
      </Stack>

      <Image
        maxW={{ base: "full", md: "60%" }}
        src={heroImage}
        alt="Routez Transportation"
      />
    </Flex>
  )
}

Hero.propTypes = {
  image: PropTypes.any,
}

export default Hero
