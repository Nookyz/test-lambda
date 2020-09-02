import styled from 'styled-components'
import Button from '../UI/Button'

export default styled(Button)`
  background: #1b5dab;
  color: #fff;
  border-radius: 12px;
  font-weight: 700;
  width: 100%;

  padding: 9px 0;
  @media only screen and (max-width: 902px) {
    display: block;
    margin: 0 auto;
    max-width: 300px;
  }
`
