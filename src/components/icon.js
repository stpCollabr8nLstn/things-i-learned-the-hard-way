import styled from "styled-components"
import { COLOR } from "../utils/theme"

const Icon = styled.span`
  height: 16px;
  width: 16px;
  margin-left: 16px;
  display: flex;
  align-items: center;
  svg {
    fill: ${COLOR.black};
  }
`

export default Icon
