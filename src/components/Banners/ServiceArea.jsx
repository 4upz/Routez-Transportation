import React from "react"
import { Box, Heading } from "@chakra-ui/react"
import backgroundImage from "../../images/art/cleveland.svg"

const ServiceArea = () => (
  <Box
    as="section"
    textAlign="center"
    minH={350}
    p={8}
    bgColor="brand.500"
    bgImage={`url(${backgroundImage})`}
    bgPos="bottom center"
    bgRepeat="repeat no-repeat"
  >
    <Heading as="h2" maxW={1200} mx="auto">
      Servicing the Northeast Ohio Area
    </Heading>
  </Box>
)

export default ServiceArea
