import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MenuBar from 'components/organisms/MenuBar/MenuBar';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const Wrapper = styled.div`
  padding: 150px 25px 70px 25px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
`;

const StyledHeader = styled.div`
  margin: 25px 0 30px 0;
`;

const PageTemplate = ({ children }) => (
  <>
    <MenuBar />
    <Wrapper>
      <StyledHeader>
        <Heading>Produkty</Heading>
        <Paragraph> 6 produktów</Paragraph>
      </StyledHeader>
      <StyledGrid>{children}</StyledGrid>
    </Wrapper>
  </>
);
PageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PageTemplate;
