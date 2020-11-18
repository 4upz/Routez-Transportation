import React from "react"
import PropTypes from "prop-types"
import { Flex, Stack, Heading, Button, Image, Link } from "@chakra-ui/react"
import heroImage from "../../images/art/hero-image.svg"

const Hero = ({ businessNumber }) => {
  return (
    <Flex
      flexDir={{ base: "column-reverse", md: "row" }}
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      alignContent="center"
      alignItems="center"
      wrap="no-wrap"
      px={16}
      mx="auto"
      minH={["80vh", "90vh"]}
      maxW={1920}
    >
      <Stack
        spacing={8}
        w={{ base: "full", md: "30%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
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
          Book a Ride: {businessNumber}
        </Link>
      </Stack>
      <Image
        w={{ base: "full", md: "60%" }}
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
