import React from "react"
import SEO from "../components/Seo"
import AboutUs from "../components/Sections/AboutUs"
import Values from "../components/Sections/Values"
import AboutCTA from "../components/Banners/AboutCTA"
import { Box } from "@chakra-ui/react"

const AboutPage = () => (
  <Box bg="#f4f7f5">
    <SEO title="About Us" />
    <AboutUs aboutText="Routez Transportation is a non-emergency medical transport business servicing all of Northeast Ohio. Routez Transportation is a local, family-owned business that strives to provide all riders with safe and timely transportation. Our quality transportation service provides riders safe and friendly transportation from point A to point B. We offer a number of services including transportation using private pay, fixed-route services, and insurer provided care. Whether you require extra support on your journey or would simply like a transport service tailored to your needs, Routez Transportation is the company for you. Possible destinations may include, but are not limited to dialysis, work, doctor’s appointments, school, private outings and airports. Committed to quality service, Routez Transportation is a one stop shop for all your transportation needs. Our competitive rates and skilled staff work tirelessly to guarantee rider satisfaction." />
    <Values valueOne="Reliability" valueTwo="Safety" valueThree="Family" />
    <AboutCTA />
  </Box>
)

export default AboutPage
