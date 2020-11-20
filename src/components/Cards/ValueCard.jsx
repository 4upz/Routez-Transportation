import React from "react"
import { Box, Center, Image, Heading } from "@chakra-ui/react"

const ValueCard = ({ icon, value }) => (
  <Center
    className="value-card"
    bg="white"
    borderRadius="lg"
    boxSize={200}
    m={6}
    shadow="3px 3px 6px 0px rgba(0, 0, 0, 0.2)"
  >
    <Box>
      <Image h={95} src={icon} mx="auto" />
      <Heading
        as="h4"
        textAlign="center"
        my={3}
        fontSize={24}
        fontWeight="normal"
      >
        {value}
      </Heading>
    </Box>
  </Center>
)

export default ValueCard
