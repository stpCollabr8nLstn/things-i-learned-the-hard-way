import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { PageDataContext } from "../context/pageDataContext"
import { COLOR } from "../utils/theme"
import Header from "./header"
import SideNav from "./sidenav"
import SEO from "./seo"

const LayoutContainer = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: ${COLOR.black};
  background: ${COLOR.softWhite};
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;

  img {
    border-radius: 2px;
  }
`

const LayoutContent = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 1fr 10fr;
  margin: 0 auto;
  padding: 0px;
  background: ${COLOR.white};
`

const LayoutMain = styled.main`
  grid-row: 2 / span 1;
  grid-column: 2 / span 1;
  padding: 24px;
`

const Layout = () => {
  // Dynamically generate content based on context
  const [state] = useContext(PageDataContext)
  const Content = state.displayPage.component

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <LayoutContainer>
      <LayoutContent>
        <Header siteTitle={data.site.siteMetadata.title} />
        <SideNav />
        <LayoutMain>
          <SEO title={state.displayPage.title} />
          <Content />
          <Link to="/page-2/">Go to page 2</Link>
        </LayoutMain>
      </LayoutContent>
    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
