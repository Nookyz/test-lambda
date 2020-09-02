import styled from 'styled-components'
import Link from '../UI/Link'

export default styled(Link)`
  padding: 5px 12px;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  @media only screen and (max-width: 460px) {
    width: auto;
  }

  :hover {
    text-decoration: underline;
  }
`
