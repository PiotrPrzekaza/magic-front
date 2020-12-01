import React from 'react';
import styled, { css } from 'styled-components';

const ListItem = styled.a`
  color: black;
  font-size: 2rem;
  text-decoration: none;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  display: inline-block;
  padding: 15px 50px;
  position: relative;

  :after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: black;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  :hover:after {
    width: 100%;
    left: 0;
  }
`;

export default ListItem;
