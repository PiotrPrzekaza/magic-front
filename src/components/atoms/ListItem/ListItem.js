import React from 'react';
import styled, { css } from 'styled-components';

const ListItem = styled.a`
  display: flex;
  max-width: 100%;
  justify-content: space-between;
  text-align: center;
  flex-direction: row;
  font-size: 2rem;
  :hover {
    text-decoration: underline 2px solid red;
    transition: ease 0.5s;
  }
`;
export default ListItem;
