import React, { useState } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import tw from 'twin.macro'

import ToolsList from '../tools/ToolsList'
import CategoryList from './../categories/CategoryList'
import SearchFiled from '../tools/SearchField'

const ToolsContainer = styled.div([tw`flex mx-4`])

const RightContainer = styled.div([tw`w-3/4 p-4`])

export default (props) => {

  const data = useStaticQuery(
    graphql`
      query data {
        allStrapiTool (sort: {fields: name}){
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
              page {
                slug
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
              label
            }
          }
        }
      }
    `
  )

  const allTools = data.allStrapiTool.edges
  const allCategories = data.allStrapiCategory.edges


  const [selectedCategory, setSelectedCategory] = useState(props.location.state ? props.location.state.passedCategory : undefined)
  const [searchInput, setSearchInput] = useState('')

  const handleClickCategory = category => {
    setSelectedCategory(category)
  }

  const handleSeachTyping = event => {
    setSearchInput(event.target.value)
  }

  const filterTools = (tools) => {
    let result = [...tools]

    if (searchInput) {
      result = tools.filter(tool => tool.node.name.toUpperCase().includes(searchInput.toUpperCase()))
    }

    if (selectedCategory) {

      if (selectedCategory.name === 'all') {
        return result
      }

      result = tools.filter(tool => tool.node.category.name === selectedCategory.name)
      return result
    }

    return result
  }

  return (
    <ToolsContainer>
      <CategoryList categories={allCategories} handleClickCategory={handleClickCategory} />
      <RightContainer>
        <SearchFiled handleSeachTyping={handleSeachTyping} />
        <ToolsList tools={filterTools(allTools)} />
      </RightContainer>
    </ToolsContainer>
  )
}