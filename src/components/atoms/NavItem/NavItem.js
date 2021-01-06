import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  font-size: ${({ theme }) => theme.fontSize.s};
  text-decoration: none;
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
`;
