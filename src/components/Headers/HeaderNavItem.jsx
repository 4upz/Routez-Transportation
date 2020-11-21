import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Text } from "@chakra-ui/react"

const HeaderNavItem = ({ children, isLast, to }) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      fontSize={18}
    >
      <AniLink swipe direction="left" to={to}>
        {children}
      </AniLink>
    </Text>
  )
}

export default HeaderNavItem
