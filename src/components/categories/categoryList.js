import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import tw from 'tailwind.macro'

import CategoryItem from './CategoryItem'

const CategoryList = styled('div')`
  ${tw`p-4`}
`

export default () => {

  const data = useStaticQuery(
    graphql`
      query allStrapiCategory{
        allStrapiCategory {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `
  )

  const categories = data.allStrapiCategory.edges

  console.log('CAT: ', categories)

  return (
    <CategoryList>
      {categories.map(cat => <CategoryItem key={cat.node.id} category={cat.node} />)}
    </CategoryList>
  )
}