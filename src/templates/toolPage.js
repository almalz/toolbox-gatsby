import React from "react"
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import tw from 'twin.macro'
import MarkdownView from 'react-showdown';


import Layout from '../components/layout'
import PageHeader from '../components/pages/pageHeader'

const PageContainer = styled.div([tw`m-auto py-12 px-40`])


const PageSulbitle = styled.h2([tw`m-auto p-2 m-2 text-lg font-bold`])


const PageBody = styled.p([tw`m-auto p-2 m-2 text-base font-normal`])


const PreviousLink = styled.button([tw`font-light text-lg p-2 m-2 rounded-lg hover:bg-gray-200`])


export default ({ data }) => {
  const tool = data.strapiTool
  console.log('Page: ', tool)
  return (
    <Layout>
      <PageContainer>
        <Link>
          <PreviousLink to={`/`}> {` < Back`}</PreviousLink>
        </Link>
        <PageHeader tool={tool} />
        <PageSulbitle>{`Introduction`}</PageSulbitle>
        <PageBody>
          <MarkdownView markdown={tool.page.introduction} options={{ tables: true, emoji: true }}
          />
        </PageBody>
        <PageSulbitle>{`Personnal uses`}</PageSulbitle>
        <PageBody>
          <MarkdownView markdown={tool.page.personnal_use} options={{ tables: true, emoji: true }}
          />
        </PageBody>
      </PageContainer>
    </Layout>
  )
}

export const query = graphql`
  query($id: Int!) {
    strapiTool(strapiId: {eq: $id}) {
      id
      name
      description
      source_url
      icon {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      page {
        id
        introduction
        personal_use
        slug
      }
      category {
        id
        name
      }
    }
  }
`

