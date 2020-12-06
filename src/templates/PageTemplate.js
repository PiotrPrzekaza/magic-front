import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MenuBar from 'components/organisms/MenuBar/MenuBar';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Input from 'components/atoms/Input/Input';

const Wrapper = styled.div`
  padding: 70px 30px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
`;

const StyledHeader = styled.div`
  margin: 25px 0 30px 0;
`;

const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSize.xxl};
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.bold};
`;

const PageTemplate = ({ children }) => (
  <>
    <MenuBar />
    <Wrapper>
      <StyledHeader>
        <Input search placeholder="Szukaj" />
        <StyledHeading as="h1">Produkty</StyledHeading>
        <StyledParagraph> 6 produktów</StyledParagraph>
      </StyledHeader>
      <StyledGrid>{children}</StyledGrid>
    </Wrapper>
  </>
);
PageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PageTemplate;
