import React from "react"
import SEO from "../components/Seo"
import ContactForm from "../components/Sections/ContactForm"
import { Box } from "@chakra-ui/react"

const ContactPage = () => (
  <Box bg="#f4f7f5">
    <SEO title="Contact Us" />
    <ContactForm />
  </Box>
)

export default ContactPage
