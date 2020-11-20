import React from "react"
import ValueCard from "../Cards/ValueCard"
import { Box, Heading, Flex } from "@chakra-ui/react"
import reliability from "../../images/art/reliability.svg"
import safety from "../../images/art/safety.svg"
import family from "../../images/art/family.svg"

const Values = ({ valueOne, valueTwo, valueThree }) => (
  <Box
    borderRadius="lg"
    my={12}
    mx={{ base: 6, md: "auto" }}
    p={6}
    maxW={1200}
    bg="brand.500"
  >
    <Heading as="h2" textAlign="center" fontSize={32} mb={6}>
      Our Values
    </Heading>
    <Flex
      flexDir={{ base: "column", md: "row" }}
      justify="center"
      align="center"
    >
      <ValueCard value={valueOne} icon={reliability} />
      <ValueCard value={valueTwo} icon={safety} />
      <ValueCard value={valueThree} icon={family} />
    </Flex>
  </Box>
)

export default Values
