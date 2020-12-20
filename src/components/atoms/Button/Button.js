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
  -webkit-transition: ease 0.3s;
  transition: ease 0.3s;
  border: 3px solid white;
  border-radius: 30px;
  background-color: transparent;

  ${({ submit }) =>
    submit &&
    css`
      width: 50%;
      text-transform: lowercase;
      margin: 50px auto 0;
      font-weight: ${({ theme }) => theme.bold};
      background-color: transparent;
      letter-spacing: 1px;
      border-radius: 30px;
      color: ${({ theme }) => theme.white};
      :hover {
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
        background-color: ${({ theme }) => theme.grey400};
        color: ${({ theme }) => theme.black};
      }
    `}
`;
