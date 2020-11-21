import React from "react"
import SEO from "../components/Seo"
import ServiceCard from "../components/Cards/ServiceCard"
import medicalIllustration from "../images/art/medical.svg"
import employmentIllustration from "../images/art/employment.svg"
import centerIllustration from "../images/art/center.svg"
import CTABanner from "../components/Banners/CTABanner"
import { Box, Heading } from "@chakra-ui/react"

const ServicesPage = () => (
  <Box bg="#f4f7f5">
    <SEO title="Services" />
    <Heading as="h1" textAlign="center" mt={6}>
      Services We Offer
    </Heading>
    <ServiceCard
      service="Non-Emergency Medical Transportation"
      description="Routez offers safe transportation to and from medical appointments. (Yes, we're also wheelchair accessible!)"
      image={medicalIllustration}
    />
    <ServiceCard
      service="Employment Transportation"
      description="Routez is happy to set a schedule for riders in need of regular transportation to their places of employment."
      image={employmentIllustration}
      hasColoredBackground
      isReversed
    />
    <ServiceCard
      service="Facility/Care Center Transportation"
      description="Routez offers daily transportation to all riders traveling to activity centers, care centers, and special events."
      image={centerIllustration}
    />
    <CTABanner
      heading="Want to Schedule a Ride?"
      linkText="Get in Touch"
      linkTo="/contact"
    />
  </Box>
)

export default ServicesPage
