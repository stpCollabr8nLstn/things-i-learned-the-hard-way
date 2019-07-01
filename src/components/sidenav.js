import React from "react"
import styled from "styled-components"

import { COLOR } from "../utils/theme"

const SideNavContainer = styled.div`
  background: ${COLOR.softWhite};
  box-shadow: 6px 0 6px -4px rgba(63, 27, 81, 0.5);
  color: ${COLOR.gray};
  grid-row: 2 / span 1;
  grid-column: 1 / span 1;
  position: relative;
`

const SideNavContent = styled.div``

const SideNavHeader = styled.div.attrs(() => ({
  role: "button",
}))`
  padding: 16px 24px;
  font-size: 24px;
  color: ${COLOR.black};
`

const SideNavUl = styled.ul.attrs(() => ({
  role: "nav",
}))`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    padding: 8px 24px;
    position: relative;
    transition: all 0.15s ease-out;
  }

  li:hover {
    background: ${COLOR.accent};
    color: ${COLOR.primary};
    cursor: pointer;
    &:after {
      content: "";
      height: 4px;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      background: ${COLOR.primary};
    }
  }
`

const SideNavFooter = styled.footer`
  width: calc(100% - 24px);
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 8px 0 8px 24px;
  background: ${COLOR.primary};
  color: ${COLOR.softWhite};
  font-size: 12px;
  a,
  a:visited {
    color: ${COLOR.accent};
  }
`

const SideNavFooterContent = styled.div`
  grid-column: 2 / span 1;
  margin: auto 0;
`

const SideNav = () => (
  <SideNavContainer>
    <SideNavHeader>About</SideNavHeader>
    <SideNavHeader>Things</SideNavHeader>
    <SideNavContent>
      <SideNavUl>
        <li>SideNav</li>
        <li>Other thing</li>
      </SideNavUl>
    </SideNavContent>
    <SideNavFooter>
      <SideNavFooterContent>
        © {new Date().getFullYear()}
        {` `}
        <a href="https://twitter.com/StpColabr8nLstn">Adriana Rios</a>
      </SideNavFooterContent>
    </SideNavFooter>
  </SideNavContainer>
)

export default SideNav
