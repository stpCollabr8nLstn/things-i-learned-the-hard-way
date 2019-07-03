import React from "react"
import styled from "styled-components"

import { COLOR } from "../utils/theme"

const HomeContainer = styled.div``

const HomeHeader = styled.div``

const HomeContent = styled.div`
  background: ${COLOR.white};
  img {
    width: 500px;
    padding: 16px 0;
  }
`

const Home = ({ children }) => (
  <HomeContainer>
    <HomeContent>
      <h2>Howdy!</h2>
      <p>
        I'm <a href="https://twitter.com/StpColabr8nLstn">Adriana</a>{" "}
        <span role="img" aria-label="unicorn emoji">
          🦄
        </span>
        . I like to build things using Javascript (React makes me happiest but I
        can play nicely with others). I've made this collection of things that,
        honestly, sort of scared me a bit as a new and growing developer.
        Sometimes things look easy but when you start building you uncover
        unexpected complexity that makes you do this:
      </p>
      <img
        src="https://i.redd.it/l4fvcjsjot811.jpg"
        alt="Charlie following the red string"
      />
      <p>
        I'll continue to add as I find new things that challenge me and help me
        grow. My intention is to add documentation to each bit explaining where
        I got stuck and why, followed by how I resolved it. If at any time you
        see where I missed these steps I encourage you to{" "}
        <a href="https://github.com/stpCollabr8nLstn/things-i-learned-the-hard-way/issues">
          open an issue
        </a>{" "}
        to let me know.
      </p>
      <img
        src="https://i.chzbgr.com/full/5173597184/hCCC034CF/"
        alt="Code All The Things!"
      />
      <p>Cheers!</p>
    </HomeContent>
  </HomeContainer>
)

export default Home
