import React from 'react';
import styled, { css } from 'styled-components';

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  letter-spacing: 1px;
`;
