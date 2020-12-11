import React from 'react';
import styled from 'styled-components';
import logo from 'assets/icon/Magiczna.png';

const Textarea = styled.textarea`
  margin-top: 20px;
  outline: none;
  resize: none;
  overflow: auto;
  border: 1px solid #888;
  min-height: 100px;
  min-width: 300px;
  ::placeholder {
    padding: 2px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.grey300};
  }
`;

export { Textarea };
