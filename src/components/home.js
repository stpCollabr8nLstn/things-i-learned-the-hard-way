import React from "react"
import styled from "styled-components"

import { COLOR } from "../utils/theme"

const HomeContainer = styled.div`
  padding: 24px;
`

const HomeContent = styled.div`
  background: ${COLOR.white};
`

const Home = ({ children }) => (
  <HomeContainer>
    <HomeContent>Home</HomeContent>
  </HomeContainer>
)

export default Home
