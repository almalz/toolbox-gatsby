import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import ToolCard from './ToolCard'

const ToolsList = styled.div([tw`py-4 flex flex-wrap overflow-hidden`])

export default (props) => {

  return (
    <ToolsList>{props.tools.map(tool => <ToolCard tool={tool.node} key={tool.node.id} icon={tool.node.icon} />)}</ToolsList>
  )
}
