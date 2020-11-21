import React from "react"
import {
  Box,
  Image,
  Flex,
  Heading,
  Text,
  VStack,
  Heading,
} from "@chakra-ui/react"

const Service = ({ service, description, image, hasColoredBackground }) => (
  <Box bgColor={hasColoredBackground ? "brand.500" : "white"}>
    <Flex flexDir={{ base: "column", md: "row" }} maxW={1200}>
      <Image src={image} w={{ base: "full", md: "50%" }} />
      <VStack spacing={6} textAlign={{ base: "center", md: "left" }}>
        <Heading as="h2">{service}</Heading>
        <Text fontSize={18} color="gray">
          {description}
        </Text>
      </VStack>
    </Flex>
  </Box>
)

export default Service
