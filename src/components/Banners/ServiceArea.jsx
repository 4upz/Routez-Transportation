import React from "react"
import { Box, Heading, Text } from "@chakra-ui/react"
import backgroundImage from "../../images/art/cleveland.svg"
import { Link } from "gatsby"

const ServiceArea = () => (
  <Box
    as="section"
    textAlign="center"
    minH={350}
    py={4}
    bgColor="brand.500"
    bgImage={`url(${backgroundImage})`}
    bgPos="bottom center"
    bgRepeat="repeat no-repeat"
  >
    <Heading as="h2" maxW={1200} mx="auto">
      Servicing the Northeast Ohio Area
    </Heading>
    <Text my={1} fontSize={18}>
      Routez Transportation Inc. strives to be your favorite neighborhood
      partner for all your transportation needs. <br /> To learn more about the
      Routez family, give us a call or explore our website and be sure to fill
      out our "Get in Touch" form found{" "}
      <Link className="inline-link" to="/contact">
        here.
      </Link>
    </Text>
  </Box>
)

export default ServiceArea
