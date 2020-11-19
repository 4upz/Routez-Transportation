import React from "react"
import { Box } from "@chakra-ui/react"

const MobileToggle = ({ onClick }) => (
  <Box display={{ base: "block", md: "none" }} onClick={onClick}>
    <svg
      fill="black"
      width="30px"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  </Box>
)

export default MobileToggle
