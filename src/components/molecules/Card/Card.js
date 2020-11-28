import React from 'react';
import styled, { css } from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import image from 'assets/icon/jednorozec.png';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const Wrapper = styled.div`
  margin: 20px;
  min-height: 400px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.secondaryBg};
  box-shadow: -11px 14px 22px -1px rgba(0, 0, 0, 0.76);
  position: relative;
  overflow: hidden;
  display: grid;
`;

const InnerWrapper = styled.div`
  position: relative;
  justify-content: space-around;
  padding: 17px 30px;
  ${({ flex }) =>
    flex &&
    css`
      align-items: center;
      margin: 30px 0 0 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const StyledImage = styled.img`
  position: absolute;
  width: 150px;
  height: 150px;
  left: 5%;
  top: 2%;
`;

const Card = () => (
  <Wrapper>
    <InnerWrapper>
      <StyledImage src={image} alt="jednorożec" />
      <Heading smallHead>Maskotka</Heading>
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>
        Pluszowa maskota wykonana starannie z jawyszej jakości włuczki przeznaczonej do wykonywania
        zabawek.
      </Paragraph>
      <Button>Zamów</Button>
    </InnerWrapper>
  </Wrapper>
);

export default Card;
