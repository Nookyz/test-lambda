import styled from 'styled-components'
import Button from '../UI/Button'

export default styled(Button)`
  display: flex;
  background: #4a90e2;
  color: #fff;
  border-radius: 12px;
  font-weight: 700;
  text-align: center;
  padding: 11px 32px;

  @media only screen and (max-width: 768px) {
    margin-top: 12px;
  }
  @media only screen and (max-width: 568px) {
    padding: 8px 20px;
  }
`
