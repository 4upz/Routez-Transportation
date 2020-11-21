import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Box, Link } from "@chakra-ui/react"

const Notification = ({ text, linkTo }) => (
  <Box bg="red.500" color="white" p="6px" textAlign="center" fontWeight="bold">
    <Link as={GatsbyLink} to={linkTo}>
      {text}
    </Link>
  </Box>
)

export default Notification
