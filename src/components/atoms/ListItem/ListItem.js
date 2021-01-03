import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const ListItem = styled(NavLink)`
  color: ${({ theme }) => theme.black};
  font-size: ${({ theme }) => theme.fontSize.s};
  text-decoration: none;
  transition: all ease-in 0.3s;

  ${({ nav }) =>
    nav &&
    css`
      padding: 20px;
      text-transform: lowercase;
      transition: all 0.3s ease-in;
      text-align: center;
      color: ${({ theme }) => theme.grey};
      &.active {
        color: ${({ theme }) => theme.grey1};
        font-weight: ${({ theme }) => theme.bold};
        font-size: ${({ theme }) => theme.fontSize.m};
      }
      :hover {
        color: ${({ theme }) => theme.grey1};
        font-weight: ${({ theme }) => theme.bold};
        font-size: ${({ theme }) => theme.fontSize.m};
      }
    `}
`;
