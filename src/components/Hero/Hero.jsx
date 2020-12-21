import React from "react"
import { Flex, Stack, Heading, Button, Link, Box } from "@chakra-ui/react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import heroImage from "../../images/art/hero-image.svg"

const Hero = () => {
  return (
    <Box className="home-hero">
      <Flex
        justify={{ base: "center", lg: "space-between" }}
        align={{ base: "flex-end", lg: "center" }}
        wrap="no-wrap"
        px={6}
        mx="auto"
        minH={{ base: "none", lg: "90vh" }}
        maxW={1200}
        bg={`url(${heroImage})`}
        bgPos={{ base: "center top", lg: "center right" }}
        bgRepeat="no-repeat"
        bgSize={{ base: "300px 300px", lg: "initial" }}
      >
        <Stack
          spacing={8}
          mt={{ base: "300px", lg: 0 }}
          mb={6}
          w={{ base: "full", lg: "40%" }}
          align={["center", "center", "center", "flex-start"]}
        >
          <Stack>
            <Heading
              as="h2"
              size="md"
              fontWeight="normal"
              textAlign={["center", "center", "center", "left"]}
              color="gray.600"
            >
              Anytime. Any day.
            </Heading>
            <Heading
              as="h1"
              size="2xl"
              textAlign={["center", "center", "center", "left"]}
            >
              We'll Take You There!
            </Heading>
          </Stack>
          <Stack isInline>
            <Button
              as={AniLink}
              swipe
              direction="left"
              colorScheme="brand"
              color="black"
              className="primary-button"
              size="lg"
              to="/about"
            >
              Why Us?
            </Button>
            <Button
              as={AniLink}
              swipe
              direction="left"
              backgroundColor="black"
              color="white"
              className="secondary-button"
              size="lg"
              to="/contact"
            >
              Get In Touch
            </Button>
          </Stack>
          <Link
            fontSize={21}
            color="gray.600"
            href="tel:2163941302"
            textAlign={["center", "center", "center", "left"]}
          >
            Book a Ride: (216)-394-1302
          </Link>
        </Stack>
      </Flex>
    </Box>
  )
}

export default Hero
