import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import ServiceCard from "../components/Cards/ServiceCard"
import illustration from "../images/art/about.svg"
import { Heading } from "@chakra-ui/react"
import CTABanner from "../components/Banners/CTABanner"

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <Heading as="h1" textAlign="center" mt={6}>
      Services We Offer
    </Heading>
    <ServiceCard
      service="Non-Emergency Medical Transportation"
      description="Routez offers safe transportation to and from medical appointments."
      image={illustration}
    />
    <ServiceCard
      service="Employment Transportation"
      description="Routez is happy to set a schedule for riders in need of regular transportation to their places of employment."
      image={illustration}
      hasColoredBackground
      isReversed
    />
    <ServiceCard
      service="Facility/Care Center Transportation"
      description="Routez offers daily transportation to all riders traveling to activity centers, care centers, and special events."
      image={illustration}
    />
    <CTABanner
      heading="Want to Schedule a Ride?"
      linkText="Get in Touch"
      linkTo="/contact"
    />
  </Layout>
)

export default ServicesPage
