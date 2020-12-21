import React from "react"
import Hero from "../components/Hero/Hero"
import SEO from "../components/Seo"
import ServiceArea from "../components/Banners/ServiceArea"
import ReasonsToRide from "../components/Sections/ReasonsToRide"
import CTABanner from "../components/Banners/CTABanner"
import { Box } from "@chakra-ui/react"

const IndexPage = () => (
  <Box bg="#f4f7f5">
    <SEO title="Home" />
    <Hero />
    <ServiceArea />
    <ReasonsToRide />
    <CTABanner
      heading="Convinced Yet?"
      linkText="Get in Touch"
      linkTo="/contact"
    />
  </Box>
)

export default IndexPage
