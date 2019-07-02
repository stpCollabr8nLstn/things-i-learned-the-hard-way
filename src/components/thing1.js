import React from "react"
import styled from "styled-components"

import { COLOR } from "../utils/theme"

const Thing1Container = styled.div`
  padding: 24px;
`

const Thing1Content = styled.div`
  background: ${COLOR.white};
`

const Thing1 = ({ children }) => (
  <Thing1Container>
    <Thing1Content>Thing1</Thing1Content>
  </Thing1Container>
)

export default Thing1
