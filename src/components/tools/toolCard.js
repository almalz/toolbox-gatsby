import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Img from 'gatsby-image'

const Card = styled('div')`
 ${tw`max-w-sm rounded overflow-hidden shadow-lg`};
`

const CardContainer = styled('div')`
 ${tw`px-6 py-4`};
`

const CardTitle = styled('div')`
 ${tw`font-bold text-xl mb-2`};
`

const CardDescription = styled('p')`
 ${tw`text-gray-700 text-base`};
`

export default (props) => (
  <Card>
    {props.tool.icon && <Img fixed={props.tool.icon.childImageSharp.fixed} alt="Notion.so logo" />}
    <CardContainer>
      <CardTitle>{props.tool.name}</CardTitle>
      <CardDescription>
        {props.tool.description}
      </CardDescription>
    </CardContainer>
  </Card>
)