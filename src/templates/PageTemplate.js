import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MenuBar } from 'components/organisms/MenuBar/MenuBar';
import { Heading } from 'components/atoms/Heading/Heading';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import { Input } from 'components/atoms/Input/Input';
import { Footer } from 'components/organisms/Footer/Footer';

const Wrapper = styled.div`
  padding: 10px 30px 20px 30px;
  margin: 50px auto;
  width: 95vw;
  min-height: calc(100vh - 251px);
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 400px);
  grid-gap: 50px;
  justify-content: center;
`;

const StyledHeader = styled.div`
  margin: 50px 0 30px 0;
`;

const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSize.xxl};
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.bold};
`;

export const PageTemplate = ({ children, pageType }) => (
  <>
    <MenuBar />
    <Wrapper pageType={pageType}>
      <StyledHeader>
        <Input search placeholder="Szukaj" />
        {pageType === 'products' && <StyledHeading as="h1">Projekty zrealizowane</StyledHeading>}
        <StyledParagraph> 6 produktów</StyledParagraph>
      </StyledHeader>
      <StyledGrid>{children}</StyledGrid>
    </Wrapper>
    <Footer />
  </>
);

PageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  pageType: PropTypes.oneOf(['products', 'about']),
};

PageTemplate.defaultProps = {
  pageType: 'products',
};
