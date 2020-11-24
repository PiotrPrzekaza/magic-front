import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: #257ac0;
  border: none;
  width: 200px;
  border: none;
  height: 50px;
  color: #fff;
  font-size: 16px;
  text-transform: lowercase;
  border-radius: 30px;

  ${({ small }) =>
    small &&
    css`
      background-color: #dd7783;
      width: 100px;
      height: 20px;
      font-size: 10px;
    `}
`;
export default Button;
