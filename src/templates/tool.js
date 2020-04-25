import React from "react"
import { graphql } from "gatsby"

export default (props) => {
  const tool = props.pageContext.tool
  console.log(props)
  return (
    <div>
      <h1>{`This is ${tool.name} page`}</h1>
      <h2>{`${tool.name} introduction`}</h2>
      <p>{`${tool.page.introduction}`}</p>
      <h2>{`${tool.name} personnal uses`}</h2>
      <p>{`${tool.page.personnal_use}`}</p>

    </div>
  )
}


// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `