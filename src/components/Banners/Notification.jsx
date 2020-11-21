import React from "react"
import { Box, Link } from "@chakra-ui/react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Notification = ({ text, linkTo }) => (
  <Box bg="red.500" color="white" p="6px" textAlign="center" fontWeight="bold">
    <Link as={AniLink} swipe direction="left" to={linkTo}>
      {text}
    </Link>
  </Box>
)

export default Notification
