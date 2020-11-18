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
        bgImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
      />
      <RideReason
        reason="Safety"
        bgImage="https://images.unsplash.com/photo-1580115465903-0e4a824a4e9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80"
      />
      <RideReason
        reason="Family"
        bgImage="https://images.unsplash.com/photo-1478476868527-002ae3f3e159?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
      />
    </Flex>
  </Box>
)

export default ReasonsToRide
