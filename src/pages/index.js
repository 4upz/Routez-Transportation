import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero/Hero"
import SEO from "../components/Seo"
import ServiceArea from "../components/Banners/ServiceArea"
import ReasonsToRide from "../components/Sections/ReasonsToRide"
import CTABanner from "../components/Banners/CTABanner"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero businessNumber="216-XXX-XXX" />
    <ServiceArea />
    <ReasonsToRide />
    <CTABanner
      heading="Convinced Yet?"
      linkText="Get in Touch"
      linkTo="/contact"
    />
  </Layout>
)

export default IndexPage
