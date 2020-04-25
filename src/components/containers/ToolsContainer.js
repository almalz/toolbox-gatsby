import React, { useState } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import tw from 'tailwind.macro'

import ToolsList from '../tools/ToolsList'
import CategoryList from './../categories/CategoryList'

const ToolsContainer = styled('div')`
  ${tw`flex mx-4`}
`

export default () => {

  const data = useStaticQuery(
    graphql`
      query data {
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
                category {
                  id
                  name
                }
            }
          }
        }
        allStrapiCategory {
          edges {
            node {
              id
              name
              strapiId
            }
          }
        }
      }
    `
  )

  const allTools = data.allStrapiTool.edges
  const allCategories = data.allStrapiCategory.edges

  const [selectedCategory, setSelectedCategory] = useState()

  const handleClickCategory = category => {
    setSelectedCategory(category)
  }

  const filterTools = (tools) => {

    if (selectedCategory) {
      const result = tools.filter(tool => tool.node.category.id === selectedCategory.strapiId)
      return result
    }
    return tools
  }


  console.log(allTools)

  return (
    <ToolsContainer>
      <CategoryList categories={allCategories} handleClickCategory={handleClickCategory} />
      <ToolsList tools={filterTools(allTools)} />
    </ToolsContainer>
  )
}