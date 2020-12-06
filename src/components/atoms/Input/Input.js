import React from 'react';
import styled, { css } from 'styled-components';
import searchIcon from 'assets/icon/searchIcon.svg';

const Input = styled.input`
  padding: 15px 30px;
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.grey100};
  border: none;
  border-radius: 50px;

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.grey300};
  }

  ${({ search }) =>
    search &&
    css`
      padding: 10px 20px 10px 40px;
      font-size: 1.2rem;
      background-image: url(${searchIcon});
      background-size: 15px;
      background-position: 15px 50%;
      background-repeat: no-repeat;
    `}
`;

export default Input;
