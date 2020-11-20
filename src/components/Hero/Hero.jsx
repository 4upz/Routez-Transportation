import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Flex, Stack, Heading, Button, Link, Box } from "@chakra-ui/react"
import heroImage from "../../images/art/hero-image.svg"

const Hero = ({ businessNumber }) => {
  return (
    <Box className="home-hero">
      <Flex
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "flex-end", md: "center" }}
        wrap="no-wrap"
        px={6}
        mx="auto"
        minH={{ base: "none", md: "90vh" }}
        maxW={1200}
        bg={`url(${heroImage})`}
        bgPos={{ base: "center top", md: "center right" }}
        bgRepeat="no-repeat"
        bgSize={{ base: "300px 300px", md: "initial" }}
      >
        <Stack
          spacing={8}
          mt={{ base: "300px", md: 0 }}
          mb={6}
          w={{ base: "full", lg: "40%" }}
          align={["center", "center", "flex-start", "flex-start"]}
        >
          <Stack>
            <Heading
              as="h2"
              size="md"
              fontWeight="normal"
              textAlign={["center", "center", "left", "left"]}
              color="gray.600"
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
              as={GatsbyLink}
              colorScheme="brand"
              color="black"
              className="primary-button"
              size="lg"
              to="/about"
            >
              Why Us?
            </Button>
            <Button
              as={GatsbyLink}
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
            href={`tel:${businessNumber}`}
            textAlign={["center", "center", "left", "left"]}
          >
            Book a Ride: {businessNumber}
          </Link>
        </Stack>
      </Flex>
    </Box>
  )
}

export default Hero
