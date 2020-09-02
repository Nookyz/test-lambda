import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 60px;
  @media only screen and (max-width: 460px) {
    flex-direction: column;
    height: auto;
  }
`
