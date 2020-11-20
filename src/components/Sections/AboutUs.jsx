import React from "react"
import Img from "gatsby-image"
import { Box, Divider, Heading, Stack, Text } from "@chakra-ui/react"
import { useStaticQuery, graphql } from "gatsby"

const AboutUs = ({ aboutText }) => {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      logo: file(relativePath: { eq: "RTlogo.png" }) {
        childImageSharp {
          fixed(width: 150, height: 161, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Box maxW={1200} mx="auto" my={6}>
      <Stack textAlign="center" spacing={6}>
        <Box mx="auto" my={6}>
          <Img
            fixed={data.logo.childImageSharp.fixed}
            alt="RoutezTransportation"
          />
        </Box>
        <Divider className="divider" borderColor="brand.500" borderWidth={2} />
        <Heading>Why Choose Us?</Heading>
        <Text textAlign="left" px={6}>
          {aboutText}
        </Text>
      </Stack>
    </Box>
  )
}
export default AboutUs
