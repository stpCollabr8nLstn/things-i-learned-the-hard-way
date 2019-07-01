import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { COLOR } from "../utils/theme"

const HeaderContainer = styled.header`
  background: ${COLOR.primary};
  grid-row: 1 / span 1;
  grid-column: 1 / span 2;
  display: grid;
  grid-template-columns: 1fr 5fr;
`

const HeaderContent = styled.div`
  grid-column: 2 / span 1;
  font-size: 32px;
  margin: auto 0;
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderContent>
      <Link
        to="/"
        style={{
          color: COLOR.softWhite,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </HeaderContent>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
