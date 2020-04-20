import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import tw from 'tailwind.macro'

import ToolCard from './ToolCard'

const ToolsList = styled('div')`
  ${tw`p-4 flex flex-row`}
`

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
    <ToolsList>{tools.map(tool => <ToolCard tool={tool.node} key={tool.node.id} icon={tool.node.icon} />)}</ToolsList>
  )
}


