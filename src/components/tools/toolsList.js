import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import ToolCard from './toolCard'



export default () => {

  const data = useStaticQuery(
    graphql`
       query {
    allStrapiTool {
      nodes {
        name
        id
      }
    }
  }`
  )

  const tools = data.allStrapiTool.nodes

  console.log('TOOLS :', tools)

  return (
    <div>{tools.map(tool => <ToolCard tool={tool} key={tool.id} />)}</div>
  )
}


