import React from 'react';
import styled from 'styled-components';

export const Textarea = styled.textarea`
  margin-top: 10px;
  outline: none;
  resize: none;
  overflow: auto;
  border: none;
  min-height: 20%;
  min-width: 100%;
  ::placeholder {
    padding: 2px;
    text-align: center;
    text-transform: lowercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.grey300};
  }
`;
