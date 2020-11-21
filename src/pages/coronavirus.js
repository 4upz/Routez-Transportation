import { Box } from "@chakra-ui/react"
import React from "react"
import CoronaStatement from "../components/Sections/CoronaStatement"
import SEO from "../components/Seo"

const ContactPage = () => (
  <Box bg="#f4f7f5">
    <SEO title="Coronavirus" />
    <CoronaStatement />
  </Box>
)

export default ContactPage
