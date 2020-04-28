import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import ToolsContainer from './ToolsContainer'

const MainContainer = styled.div([tw`m-auto p-8 px-8`])

export default ({ location }) => (
  <MainContainer>
    <ToolsContainer location={location} />
  </MainContainer>
)