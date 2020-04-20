import React from 'react'
import ToolsList from '../tools/ToolsList'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const ToolsContainer = styled('div')`
  ${tw` w-3/4 bg-gray-100 mx-4`}
`

export default () => (
  <ToolsContainer>
    <ToolsList />
  </ToolsContainer>
)