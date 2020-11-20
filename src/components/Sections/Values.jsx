import { Box, Heading } from "@chakra-ui/react"
import React from "react"

const Values = ({ valueOne, valueTwo, valueThree }) => (
  <Box borderRadius="lg" my={12} mx="auto" p={6} maxW={1200} bg="brand.500">
    <Heading as="h2" textAlign="center">
      Our Values
    </Heading>
  </Box>
)

export default Values
