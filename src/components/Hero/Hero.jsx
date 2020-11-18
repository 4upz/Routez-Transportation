import React from "react"
import PropTypes from "prop-types"
import {
  Flex,
  Container,
  Stack,
  Heading,
  Button,
  Image,
  Link,
} from "@chakra-ui/react"
import heroImage from "../../images/art/hero-image.svg"

const Hero = ({ businessNumber }) => {
  return (
    <Flex
      flexDir={{ base: "column-reverse", md: "row" }}
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      px={8}
      mx="auto"
      minH="90vh"
      // maxW={1200}
    >
      <Stack spacing={8}>
        <Stack>
          <Heading
            as="h2"
            size="md"
            fontWeight="normal"
            textAlign={["center", "center", "left", "left"]}
          >
            Anytime. Any day.
          </Heading>
          <Heading
            as="h1"
            size="2xl"
            textAlign={["center", "center", "left", "left"]}
          >
            We'll Take You There!
          </Heading>
        </Stack>
        <Stack isInline>
          <Button
            colorScheme="brand"
            color="black"
            className="primary-button"
            size="lg"
          >
            Why Us?
          </Button>
          <Button
            backgroundColor="black"
            color="white"
            className="secondary-button"
            size="lg"
          >
            Get In Touch
          </Button>
        </Stack>
        <Link
          fontSize={21}
          color="gray.500"
          href={`tel:${businessNumber}`}
          textAlign={["center", "center", "left", "left"]}
        >
          To Book a Ride: {businessNumber}
        </Link>
      </Stack>
      <Image
        maxW={{ base: "full", md: "70%" }}
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
