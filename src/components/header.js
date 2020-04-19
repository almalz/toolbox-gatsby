import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Header = styled.div`
  background : blue;
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