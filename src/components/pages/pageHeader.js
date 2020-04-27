import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Img from 'gatsby-image'


const PageHeaderContainer = styled('div')`
  ${tw`mx-2 mb-8 mt-4 p-4 border shadow-md rounded-lg`}
`

const PageTopContainer = styled('div')`
  ${tw`m-2 p-2 flex justify-between`}
`

const PageHeaderIconContainer = styled('div')`
  ${tw`p-2 m-2 border shadow-sm rounded-md`}
`

const PageHeaderTitle = styled('div')`
  ${tw`p-2 m-2 text-xl`}
`

const LinkToTheWebsite = styled('a')`
  ${tw`p-2 m-2 text-blue-400 font-light underline inline-block`}
`

const PageCategoryPill = styled('div')`
  ${tw`w-auto inline-block py-2 px-4 mx-4 bg-orange-800 rounded-full text-white text-md hover:shadow-mg`}
`
const PageHeaderDescription = styled('div')`
  ${tw`m-auto p-2 mt-8 m-2 text-md font-light`}
`

export default (props) => {

  const tool = props.tool

  return (
    <PageHeaderContainer>
      <PageTopContainer>
        <PageHeaderIconContainer>
          {tool.icon && <Img fixed={tool.icon.childImageSharp.fixed} alt={`${tool.name} icon`} />}
        </PageHeaderIconContainer>
        <LinkToTheWebsite href={tool.source_url} target="_blank"> Go to the website </LinkToTheWebsite>
      </PageTopContainer>
      <PageHeaderTitle>
        {tool.name}
      </PageHeaderTitle>
      <Link to={`/`} state={{ passedCategory: tool.category }}>
        <PageCategoryPill>
          {tool.category.name}
        </PageCategoryPill>
      </Link>

      <PageHeaderDescription>{tool.description}</PageHeaderDescription>
    </PageHeaderContainer>
  )

}