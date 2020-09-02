import styled from 'styled-components'

export default styled.div`
  display: grid;
  grid-template-columns: 75% auto;
  grid-template-areas: 'main sidebar';
  grid-gap: 20px;
  @media only screen and (max-width: 902px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'main' 'sidebar';
  }
`
