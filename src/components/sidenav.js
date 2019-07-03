import React, { useContext } from "react"
import styled from "styled-components"

import { PageDataContext } from "../context/pageDataContext"
import { COLOR } from "../utils/theme"
import Icon from "./icon"

const Up = () => (
  <Icon>
    <svg
      viewBox="0 0 512 512"
      height="16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M455,113a15,15 0 01 19,0l29,29a15,15 0 01 0,19l-235,236a16,16 0 01-24,0l-235-236a15,15 0 01 0-19l29-29a15,15 0 01 19,0l199,199z" />
    </svg>
  </Icon>
)
const Down = () => (
  <Icon>
    <svg
      viewBox="0 0 512 512"
      height="16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M256,200l-199,199a15,15 0 01-19,0l-29-29a15,15 0 01 0-19l235-236a16,16 0 01 24,0l235,236a15,15 0 01 0,19l-29,29a15,15 0 01-19,0z" />
    </svg>
  </Icon>
)

const SideNavContainer = styled.div`
  background: ${COLOR.softWhite};
  box-shadow: 6px 0 6px -4px rgba(63, 27, 81, 0.5);
  color: ${COLOR.gray};
  grid-row: 2 / span 1;
  grid-column: 1 / span 1;
  position: fixed;
  top: 76px;
  left: 0;
  height: calc(100% - 76px);
`

const SideNavContent = styled.div``

const SideNavHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  font-size: 24px;
  color: ${COLOR.black};
  &:hover {
    background: ${COLOR.primary};
    color: ${COLOR.softWhite};
    > ${Icon} svg {
      fill: ${COLOR.softWhite};
    }
  }
`

const SideNavLi = styled.li`
  padding: 8px 24px;
  position: relative;
  transition: all 0.15s ease-out;

  background: ${props => (props.selected ? COLOR.accent : COLOR.softWhite)};
  color: ${props => (props.selected ? COLOR.primary : COLOR.gray)};
  cursor: pointer;

  &:hover {
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

const SideNavUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
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

const SideNav = () => {
  const [state, setState] = useContext(PageDataContext)
  const updatePage = newPage =>
    setState(state => ({ ...state, displayPage: newPage }))

  const toggleThings = () =>
    setState(state => ({ ...state, thingsIsOpen: !state.thingsIsOpen }))

  return (
    <SideNavContainer>
      <SideNavHeader
        role="button"
        onClick={() => {
          updatePage(state.pages.find(p => p.title === "Home"))
        }}
      >
        Home
      </SideNavHeader>
      <SideNavHeader
        role="button"
        onClick={() => {
          toggleThings()
        }}
      >
        Things
        {state.thingsIsOpen ? <Down /> : <Up />}
      </SideNavHeader>
      <SideNavContent>
        {state.thingsIsOpen && (
          <SideNavUl role="menu">
            {state.pages.map(p => (
              <SideNavLi
                selected={p.title === state.displayPage.title}
                role="button"
                onClick={() => {
                  updatePage(p)
                }}
              >
                {p.title}
              </SideNavLi>
            ))}
          </SideNavUl>
        )}
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
}

export default SideNav
