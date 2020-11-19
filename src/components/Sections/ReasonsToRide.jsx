import React from "react"
import { Flex, Box, Heading } from "@chakra-ui/react"
import RideReason from "../Cards/RideReason"

const ReasonsToRide = () => (
  <Box as="section" my={6} py={6}>
    <Heading as="h2" my={6} textAlign="center">
      Reasons to Ride
    </Heading>
    <Flex
      mx="auto"
      flexDir={{ base: "column", md: "row" }}
      flexWrap={{ base: "nowrap", md: "wrap" }}
      align="center"
      justify="center"
    >
      <RideReason
        reason="Reliability"
        bgImage="https://source.unsplash.com/n95VMLxqM2I"
      />
      <RideReason
        reason="Safety"
        bgImage="https://source.unsplash.com/L8iPDE99z9c"
      />
      <RideReason
        reason="Family"
        bgImage="https://source.unsplash.com/yfmjALh1S6s"
      />
    </Flex>
  </Box>
)

export default ReasonsToRide
