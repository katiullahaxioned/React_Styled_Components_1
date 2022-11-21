import styled from "styled-components"

const StyledWrapper = styled.div`
  max-width: 1360px;
  width: 90%;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    &.header-wrapper {
      width: 100%;
      box-shadow: 0 1px 5px #333;
    }
  }
`

export default StyledWrapper