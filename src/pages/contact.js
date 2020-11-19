import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import ContactForm from "../components/Sections/ContactForm"

const AboutPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <ContactForm businessNumber="216-XXX-XXXX" />
  </Layout>
)

export default AboutPage
