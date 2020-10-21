import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <h1>Hi from the Contact page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
