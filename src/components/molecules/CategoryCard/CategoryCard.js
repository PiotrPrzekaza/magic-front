import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Heading } from 'components/atoms/Heading/Heading';
import { Link } from 'react-router-dom';
import { ListItem } from 'components/atoms/ListItem/ListItem';

const Wrapper = styled.div`
  min-height: 400px;
  border: 1px solid black;
  background-color: ${({ theme }) => theme.white};
  box-shadow: -5px 3px 42px -16px rgba(0, 0, 0, 1);
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  transition: transform 0.4s ease-in;
  :hover {
    transform: scale(1.2);
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
  width: 200px;
  height: 200px;
`;

const StyledHeading = styled(Heading)`
  text-align: center;
  margin-left: 20px;
  color: ${({ theme }) => theme.grey1};
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const StyledListItem = styled(ListItem)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CategoryCard = ({ typeOfCard, category, imageUrl, id }) => (
  <>
    <Wrapper typeOfCard={typeOfCard} category={category}>
      <StyledListItem as={Link} to={category}>
        <HeaderWrapper>
          <StyledHeading>{category}</StyledHeading>
        </HeaderWrapper>
        <InnerWrapper>
          <StyledImage src={imageUrl} alt="" />
        </InnerWrapper>
      </StyledListItem>
    </Wrapper>
  </>
);

CategoryCard.propTypes = {
  typeOfCard: PropTypes.oneOf(['category']).isRequired,
  imageUrl: PropTypes.string,
  category: PropTypes.oneOf(['torebki', 'ubrania', 'pluszaki', 'chusty', 'kocyki']).isRequired,
  id: PropTypes.number.isRequired,
};

CategoryCard.defaultProps = {
  imageUrl: null,
};
