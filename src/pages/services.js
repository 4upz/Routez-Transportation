import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Services" />
    <h1>Hi from the service page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
