import styled from 'styled-components'
import Button from '../UI/Button'

export default styled(Button)`
  color: #000;
  font-weight: 600;
  font-size: 18px;
  width: 100%;

  padding: 8px 15px;

  @media only screen and (max-width: 900px) {
    font-size: 16px;
  }
  
`
