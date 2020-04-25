exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    ` query {
        allStrapiTool {
          edges {
            node {
              id
              name
              description
              icon {
                id
              }
              page {
                id
                introduction
                personnal_use
                slug
              }
              category {
                id
                name
              }
              alternative_tools {
                id
                purpose
                tool {
                  category
                  id
                  description
                }
              }
            }
          }
        }
      }
    `
  )


  if (result.errors) {
    throw result.errors
  }

  const tools = result.data.allStrapiTool.edges

  tools.forEach(tool => {
    createPage({
      path: `/tool/${tool.node.page.slug}`,
      component: require.resolve("./src/templates/tool.js"),
      context: {
        tool: tool.node
      },
    })
  })
}