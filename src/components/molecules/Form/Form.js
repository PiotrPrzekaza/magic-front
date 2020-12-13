import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import { Textarea } from 'components/atoms/Textarea/Textarea';
import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: nowrap;
  margin: 20px 0 20px 0;
`;

const StyledInput = styled(Input)`
  margin-top: 10px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 0;
  ::placeholder {
    text-transform: lowercase;
  }
`;

const Form = () => (
  <StyledForm>
    <Input submit type="text" name="name" placeholder="imię" />
    <StyledInput type="email" name="email" placeholder="email@simple.com" />
    <Textarea type="text" name="message" placeholder="wiadomość" />
    <Button submit>Wyślij</Button>
  </StyledForm>
);

export { Form };
