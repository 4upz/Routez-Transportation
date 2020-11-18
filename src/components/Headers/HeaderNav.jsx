import React from "react"
import { Box, Flex } from "@chakra-ui/react"

const HeaderNav = ({ shouldShow, children }) => (
  <Box
    display={{ base: shouldShow ? "block" : "none", md: "block" }}
    flexBasis={{ base: "100%", md: "auto" }}
  >
    <Flex
      align={["center", "center", "center", "center"]}
      justify={["center", "space-between", "flex-end", "flex-end"]}
      direction={["column", "row", "row", "row"]}
      pt={[4, 4, 0, 0]}
    >
      {children}
    </Flex>
  </Box>
)

export default HeaderNav
