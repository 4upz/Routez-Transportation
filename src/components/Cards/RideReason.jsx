import React from "react"
import { Box, Center, Heading } from "@chakra-ui/react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const RideReason = ({ reason, bgImage }) => (
  <Box
    as={AniLink}
    swipe
    direction="left"
    className="reason-card"
    m={6}
    borderRadius="lg"
    shadow="3px 3px 6px 0px rgba(187, 187, 187, 1)"
    bg={`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`}
    bgSize="cover"
    bgPos="center center"
    boxSize={{ base: "300px", md: "400px" }}
    to="/about"
  >
    <Center className="content" h="100%" w="100%" borderRadius="lg">
      <Heading as="h2" color="white">
        {reason}
      </Heading>
    </Center>
  </Box>
)

export default RideReason
