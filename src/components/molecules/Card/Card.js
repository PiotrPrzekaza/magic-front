import React from 'react';
import styled, { css } from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import ImageItem from 'components/atoms/ImageItem/ImageItem';
import image from 'assets/icon/jednorozec.png';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const Wrapper = styled.div`
  transform-style: preserve-3d;
  min-height: 400px;
  box-shadow: 0 20px 20px hsla(0, 0%, 0%, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  overflow: hidden;
  display: grid;
  grid-template-rows: 0.5fr 1fr;
`;

const InnerWrapper = styled.div`
  padding: 15px 30px;
  background-color: ${({ theme }) => theme.secondaryBg};

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const Card = () => {
  <Wrapper>
    <InnerWrapper>
      <Heading>Maskotka</Heading>
      <ImageItem src={image} alt="jednorożec" />
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>
        Pluszowa maskota wykonana starannie z jawyszej jakości włuczki przeznaczonej do wykonywania
        zabawek.
      </Paragraph>
      <Button>Zamów</Button>
    </InnerWrapper>
  </Wrapper>;
};

export default Card;
