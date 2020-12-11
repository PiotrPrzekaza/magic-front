import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import { Textarea } from 'components/atoms/Textarea/Textarea';
import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: nowrap;
  margin: 30px 0 20px 0;
`;

const StyledInput = styled(Input)`
  margin-top: 20px;
  background-color: #fff;
  border-radius: 0;
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
