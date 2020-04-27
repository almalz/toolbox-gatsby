exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    ` query {
        allStrapiTool {
          edges {
            node {
              id
              name
              strapiId
              page {
                slug
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
      component: require.resolve("./src/templates/toolPage.js"),
      context: { id: tool.node.strapiId }
    })
  })
}