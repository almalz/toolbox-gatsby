import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import CategoriesContainer from './CategoriesContainer'
import ToolsContainer from './ToolsContainer'

const MainContainer = styled('div')`
  ${tw`flex m-auto p-8 px-8`}
`

export default () => (
  <MainContainer>
    <CategoriesContainer />
    <ToolsContainer />
  </MainContainer>
)