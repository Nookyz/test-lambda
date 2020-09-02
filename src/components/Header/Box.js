import styled from 'styled-components'
import Box from '../UI/Box'

export default styled(Box)`
  align-items: center;
  flex-direction: row;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`
