import styled from 'styled-components'

export default styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 25px;

  @media only screen and (max-width: 1200px) {
    max-width: 960px;
  }
  @media only screen and (max-width: 902px) {
    max-width: 720px;
  }
  @media only screen and (max-width: 768px) {
    max-width: 540px;
  }
  @media only screen and (max-width: 568px) {
    max-width: 100%;
    padding: 0 5px;
  }
`
