import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const ListItem = styled(NavLink)`
  color: ${({ theme }) => theme.black};
  font-size: ${({ theme }) => theme.fontSize.s};
  text-decoration: none;
  -webkit-transition: ease 0.4s;
  transition: ease 0.4s;

  ${({ nav }) =>
    nav &&
    css`
      display: inline-block;
      margin: 0 30px;
      text-transform: lowercase;
      -webkit-transition: ease 0.4s;
      transition: ease 0.4s;
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
