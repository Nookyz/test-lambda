import styled from 'styled-components'

export default styled.textarea`
  resize: none;
  width: 100%;
  min-height: 250px;
  border-radius: 2px;
  border: 1px solid #eaeaea;
  outline: none;
  padding: 10px;

  ::placeholder {
    color: #adadad;
  }

  &:focus {
    outline: 1px solid #4a90e2;
  }
`
