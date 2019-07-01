/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { COLOR } from "../utils/theme"
import Header from "./header"
import SideNav from "./sidenav"

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
  grid-template-rows: 1fr 6fr 1fr;
  margin: 0 auto;
  padding: 0px;
  background: ${COLOR.white};
`

const LayoutMain = styled.main`
  grid-row: 2 / span 1;
  grid-column: 2 / span 1;
  padding: 24px;
`

const LayoutFooter = styled.footer`
  background: ${COLOR.gray};
  color: ${COLOR.softWhite};
  grid-column: 1 / span 2;
  grid-row: 3 / span 1;
  a,
  a:visited {
    color: ${COLOR.accent};
  }
  display: grid;
  grid-template-columns: 1fr 5fr;
`

const LayoutFooterContent = styled.div`
  grid-column: 2 / span 1;
  margin: auto 0;
`

const Layout = ({ children }) => {
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
        <LayoutMain>{children}</LayoutMain>
        <LayoutFooter>
          <LayoutFooterContent>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </LayoutFooterContent>
        </LayoutFooter>
      </LayoutContent>
    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
