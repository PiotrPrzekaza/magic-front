import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Heading } from 'components/atoms/Heading/Heading';
import { Button } from 'components/atoms/Button/Button';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';

const Wrapper = styled.div`
  min-height: 400px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.secondaryBg};
  box-shadow: -5px 3px 42px -16px rgba(0, 0, 0, 1);
  position: relative;
  overflow: hidden;
  display: grid;
`;

const StyledButton = styled(Button)`
  border-radius: 30px;
  width: 33%;

  :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    background-color: ${({ theme }) => theme.grey400};
    color: ${({ theme }) => theme.black};
  }
`;

const HeaderWrapper = styled.div`
  position: relative;
`;

const InnerWrapper = styled.div`
  align-items: center;
  margin: 30px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledImage = styled.img`
  position: absolute;
  border-radius: 10px;
  margin-top: 20px;
  width: 150px;
  height: 150px;
  left: 5%;
  top: 2%;
`;

const StyledHeading = styled(Heading)`
  text-align: center;
  margin-left: 20px;
  font-size: ${({ theme }) => theme.fontSize.l};
`;

export const CategoryCard = ({ typeOfCard, category, imageUrl, id }) => (
  <>
    <Wrapper typeOfCard="category">
      <HeaderWrapper>
        <StyledHeading>{category}</StyledHeading>
      </HeaderWrapper>
      <InnerWrapper>
        <StyledImage src={imageUrl} alt="" />
        <StyledButton>Zamów</StyledButton>
      </InnerWrapper>
    </Wrapper>
  </>
);

CategoryCard.propTypes = {
  typeOfCard: PropTypes.oneOf(['category']),
  imageUrl: PropTypes.string,
  category: PropTypes.string,
  id: PropTypes.number.isRequired,
};

CategoryCard.defaultProps = {
  typeOfCard: 'category',
  imageUrl: null,
  category: null,
};
