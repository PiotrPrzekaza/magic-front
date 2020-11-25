import React from 'react';
import styled, { css } from 'styled-components';

const Heading = styled.h1`
  font-size: 5rem;
  text-align: center;
  font-weight: 500;
  font-family: 'Libre Franklin';

  ${({ smallHead }) =>
    smallHead &&
    css`
      font-size: 2rem;
      font-weight: 300;
    `};
`;

export default Heading;