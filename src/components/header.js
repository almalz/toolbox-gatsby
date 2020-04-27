import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Header = styled('div')`
  ${tw`py-2 px-12 h-10 shadow-lg`}
`

export default ({ siteTitle }) => (
  <Header >
    <div>
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </Header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}