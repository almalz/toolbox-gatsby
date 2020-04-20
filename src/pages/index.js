import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainContainer from "../components/containers/MainContainer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainContainer />
  </Layout>
)

export default IndexPage
