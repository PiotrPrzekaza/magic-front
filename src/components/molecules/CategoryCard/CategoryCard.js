import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Heading } from 'components/atoms/Heading/Heading';
import { Button } from 'components/atoms/Button/Button';

const Wrapper = styled.div`
  min-height: 400px;
  border: 1px solid black;
  background-color: ${({ theme }) => theme.white};
  box-shadow: -5px 3px 42px -16px rgba(0, 0, 0, 1);
  position: relative;
  overflow: hidden;
  border-radius: 10px;
`;

const StyledButton = styled(Button)`
  border-radius: 5px;
  width: 33%;
  margin: 20px 0;
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.grey1};
  background-color: transparent;
  color: ${({ theme }) => theme.grey1};
  :hover {
    border: 2px solid ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.black};
  }
`;

const HeaderWrapper = styled.div`
  padding: 30px;
  border-bottom: 1px solid black;
  width: 90%;
  margin: 0 auto;
`;

const InnerWrapper = styled.div`
  align-items: center;
  margin: 30px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledImage = styled.img`
  border-radius: 10px;
  margin-top: 20px;
  width: 250px;
  height: 250px;
`;

const StyledHeading = styled(Heading)`
  text-align: center;
  margin-left: 20px;
  color: ${({ theme }) => theme.grey1};
  font-size: ${({ theme }) => theme.fontSize.l};
`;

export const CategoryCard = ({ typeOfCard, category, imageUrl, id }) => (
  <>
    <Wrapper typeOfCard={typeOfCard}>
      <HeaderWrapper>
        <StyledHeading>{category}</StyledHeading>
      </HeaderWrapper>
      <InnerWrapper>
        <StyledImage src={imageUrl} alt="" />
        <StyledButton>zobacz</StyledButton>
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
