import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.secondary};
  border: none;
  width: 200px;
  border: none;
  height: 50px;
  color: #fff;
  font-size: ${({ theme }) => theme.fontSize.s};
  text-transform: lowercase;

  ${({ submit }) =>
    submit &&
    css`
      text-transform: uppercase;
      margin: 20px 0 0 0;
      font-weight: ${({ theme }) => theme.bold};
      background-color: #5afa82;
      letter-spacing: 2px;
      border-radius: 20px;
      color: hsl(0, 0%, 0%);
      :hover {
        cursor: pointer;
        background-color: #2f7c43;
        color: #fff;
      }
    `}

  ${({ small }) =>
    small &&
    css`
      background-color: #dd7783;
      width: 100px;
      height: 20px;
      font-size: ${({ theme }) => theme.fontSize.xxs};
    `}
`;
export default Button;
