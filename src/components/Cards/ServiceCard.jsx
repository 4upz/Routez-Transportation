import React from "react"
import { Box, Image, Flex, Heading, Text, VStack } from "@chakra-ui/react"

const ServiceCard = ({
  service,
  description,
  image,
  hasColoredBackground,
  isReversed,
}) => (
  <Box bgColor={hasColoredBackground ? "brand.500" : "#f4f7f5"} py={12}>
    <Flex
      flexDir={{ base: "column", md: isReversed ? "row-reverse" : "row" }}
      maxW={1200}
      mx="auto"
      p={6}
      justify="center"
      align="center"
    >
      <Image src={image} w={{ base: "full", md: "60%" }} mx={6} />
      <VStack spacing={6} textAlign={{ base: "center", md: "left" }} p={6}>
        <Heading as="h2" fontSize={32} w="100%">
          {service}
        </Heading>
        <Text fontSize={18} textAlign="left" color="gray.700" w="100%">
          {description}
        </Text>
      </VStack>
    </Flex>
  </Box>
)

export default ServiceCard
