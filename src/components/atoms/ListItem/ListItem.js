import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const ListItem = styled(Link)`
  color: ${({ theme }) => theme.black};
  font-size: ${({ theme }) => theme.fontSize.s};
  text-decoration: none;
  transition: all ease-in 0.3s;
`;
