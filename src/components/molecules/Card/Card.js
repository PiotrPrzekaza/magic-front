import React from 'react';
import styled, { css } from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import unicorn from 'assets/images/jednorozec.png';
import unBlank from 'assets/images/unBlank.png';
import ImageItem from 'components/atoms/ImageItem/ImageItem';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const Wrapper = styled.div`
  min-height: 400px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.secondaryBg};
  box-shadow: -5px 3px 42px -16px rgba(0, 0, 0, 1);
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

const StyledHeading = styled(Heading)`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.l};
`;

// eslint-disable-next-line consistent-return
const Card = ({ typeOfCard }) => {
  // eslint-disable-next-line no-lone-blocks
  {
    if (typeOfCard === 'products') {
      return (
        <Wrapper>
          <InnerWrapper>
            <StyledImage src={unicorn} alt="jednorożec" />
            <StyledHeading>Maskotka</StyledHeading>
          </InnerWrapper>
          <InnerWrapper flex>
            <Paragraph>
              Pluszowa maskota wykonana starannie z jawyszej jakości włuczki przeznaczonej do
              wykonywania zabawek.
            </Paragraph>
            <Button>Zamów</Button>
          </InnerWrapper>
        </Wrapper>
      );
    }
    if (typeOfCard === 'knitting') {
      return (
        <Wrapper>
          <InnerWrapper>
            <StyledImage src={unBlank} alt="me" />
            <StyledHeading>Druty</StyledHeading>
          </InnerWrapper>
          <InnerWrapper flex>
            <Paragraph>druty</Paragraph>
          </InnerWrapper>
        </Wrapper>
      );
    }
    if (typeOfCard === 'contact') {
      return (
        <Wrapper>
          <InnerWrapper>
            <ImageItem src="" />
            <Heading>O Mnie</Heading>
            <Paragraph>
              Szydełko to maja pasja. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo facere fuga harum minus? Eum vel, autem aliquam temporibus, eius natus in
              voluptas provident laudantium placeat rem sunt quam nostrum at? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Explicabo facere fuga harum minus? Eum vel, autem
              aliquam temporibus, eius natus in voluptas provident laudantium placeat rem sunt quam
              nostrum at?
            </Paragraph>
          </InnerWrapper>
        </Wrapper>
      );
    }
  }
};

export default Card;
