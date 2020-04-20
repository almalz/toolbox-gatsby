import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import ToolCard from './toolCard'



export default () => {

  const data = useStaticQuery(
    graphql`
      query allStrapiTool{
        allStrapiTool {
          edges {
            node {
              id
              name
              description
              icon {
                  childImageSharp {
                    fixed(width: 52, height: 52) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
            }
          }
        }
      }
    `
  )

  const tools = data.allStrapiTool.edges

  return (
    <div>{tools.map(tool => <ToolCard tool={tool.node} key={tool.node.id} icon={tool.node.icon} />)}</div>
  )
}


