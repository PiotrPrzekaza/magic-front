import React from 'react';
import styled, { css } from 'styled-components';

export const Button = styled.button`
  width: 300px;
  padding: 10px 20px;
  color: white;
  text-align: center;
  text-transform: lowercase;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.s};
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  border: 3px solid white;
  border-radius: 30px;
  background-color: transparent;

  ${({ submit }) =>
    submit &&
    css`
      width: 100%;
      text-transform: lowercase;
      margin-top: 40px;
      font-weight: ${({ theme }) => theme.bold};
      background-color: transparent;
      letter-spacing: 1px;
      border-radius: 30px;
      color: ${({ theme }) => theme.white};
      :hover {
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
        background-color: ${({ theme }) => theme.grey200};
        color: ${({ theme }) => theme.black};
      }
    `}
`;
