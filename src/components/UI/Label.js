import styled from 'styled-components'

export default styled.label`
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;
  display: inline-block;
  vertical-align: bottom;

  color: #333;
  padding-left: 30px;
  cursor: pointer;
  position: relative;
  padding-bottom: 12px;

  input[type='radio'] {
    display: none;
  }

  input[type='radio']:checked ~ span:after {
    transform: translate(-50%, -50%) scale(1);
  }
  input[type='radio']:checked ~ span {
    border: 2px solid #4a90e2;
    background: #4a90e2;
  }

  span {
    height: 12px;
    width: 12px;
    border-radius: 50%;
    border: 2px solid #4a90e2;
    display: block;
    position: absolute;
    left: 0;
    top: 7px;
  }
  span:after {
    content: '';
    height: 7px;
    width: 7px;
    background: #fff;
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    border-radius: 50%;
    transform: 300ms ease-in-out 0s;
  }

  p {
    margin-top: 7.5px;
    margin-left: -7.5px;
    font-size: 14px;
  }
`
