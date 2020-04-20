import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import CategoryList from './../categories/CategoryList'

const CategoriesContainer = styled('div')`
  ${tw` w-1/4 bg-green-100 mx-4`}
`

export default () => (
  <CategoriesContainer>
    <CategoryList />
  </CategoriesContainer>
)