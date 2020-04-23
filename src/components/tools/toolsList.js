import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import ToolCard from './ToolCard'

const ToolsList = styled('div')`
  ${tw`w-3/4p-4 flex flex-row`}
`


export default (props) => {

  return (
    <ToolsList>{props.tools.map(tool => <ToolCard tool={tool.node} key={tool.node.id} icon={tool.node.icon} />)}</ToolsList>
  )
}
