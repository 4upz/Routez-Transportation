import React from "react"
import { Link } from "gatsby"
import { Text } from "@chakra-ui/react"

const HeaderNavItem = ({ children, isLast, to }) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      fontSize={18}
    >
      <Link to={to}>{children}</Link>
    </Text>
  )
}

export default HeaderNavItem
