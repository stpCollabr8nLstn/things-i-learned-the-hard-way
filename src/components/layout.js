import React, { useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { PageDataContext } from "../context/pageDataContext"
import { COLOR } from "../utils/theme"
import Header from "./header"
import SideNav from "./sidenav"
import SEO from "./seo"

const LayoutContainer = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800&display=swap");
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: ${COLOR.black};
  background: ${COLOR.softWhite};
  width: 100vw;
  max-width: 100%;
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

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a {
    padding: 0;
    margin: 0;
    font-weight: 400;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    margin: 8px 0;
  }
  h1 {
    font-size: 40px;
    font-weight: 600;
    padding: 0 24px;
  }
  h2 {
    font-size: 32px;
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
  padding: 16px 24px;
  max-width: 768px;
  position: relative;
  top: 76px;
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
        </LayoutMain>
      </LayoutContent>
    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
