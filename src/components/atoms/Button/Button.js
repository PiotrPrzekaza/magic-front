import React from 'react';
import styled, { css } from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.primaryButton};
  border: none;
  width: 200px;
  border: none;
  height: 50px;
  color: ${({ theme }) => theme.black};
  border-radius: 30px;
  font-size: ${({ theme }) => theme.fontSize.s};
  text-transform: lowercase;

  ${({ submit }) =>
    submit &&
    css`
      width: 100%;
      text-transform: lowercase;
      margin-top: 10px;
      font-weight: ${({ theme }) => theme.bold};
      background-color: ${({ theme }) => theme.primary};
      letter-spacing: 1px;
      border-radius: 30px;
      color: hsl(0, 0%, 0%);
      :hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.primaryHover};
        color: ${({ theme }) => theme.white};
      }
    `}

  ${({ small }) =>
    small &&
    css`
      background-color: ${({ theme }) => theme.primaryHover};
      width: 100px;
      height: 30px;
      font-size: ${({ theme }) => theme.fontSize.xxs};
    `}
`;
