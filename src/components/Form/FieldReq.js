import styled from 'styled-components'
import Field from './Field'

export default styled(Field)`
  ::before {
    content: '*';
    position: absolute;
    color: red;
    top: -5px;
    left: -12px;
    font-size: 18px;
    font-weight: 700;
  }
`
