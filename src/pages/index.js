import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainContainer from "../components/containers/MainContainer"

export default ({ location }) => (
  <Layout>
    <SEO title="My Toolbox" />
    <MainContainer location={location} />
  </Layout>
)

