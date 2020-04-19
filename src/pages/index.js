import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ToolsList from "../components/tools/toolsList"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ToolsList />
  </Layout>
)

export default IndexPage
