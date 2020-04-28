import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'twin.macro'
import Img from 'gatsby-image'

const Card = styled.div([tw`max-w-sm h-40 m-2 p-4 rounded overflow-hidden shadow-sm rounded-lg 
border hover:shadow-lg hover:bg-gray-100`])

const CardContainer = styled.div([tw`px-6 py-4 overflow-hidden flex flex-col items-center`])

const CardTitle = styled.div([tw`font-bold text-xl my-2`])


export default (props) => (
  <Link to={`/tool/${props.tool.page.slug}`}>
    <Card>
      <CardContainer>
        {props.tool.icon && <Img fixed={props.tool.icon.childImageSharp.fixed} alt="Notion.so logo" />}
        <CardTitle>{props.tool.name}</CardTitle>
      </CardContainer>
    </Card>
  </Link>
)