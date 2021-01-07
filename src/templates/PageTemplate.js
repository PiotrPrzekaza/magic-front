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
  min-height: calc(100vh - 251px);
`;

const StyledGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 50px;
  justify-content: space-evenly;
  align-items: center;
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

export const PageTemplate = ({ children, pageType, id }) => (
  <>
    <MenuBar />
    <Wrapper pageType={pageType}>
      <StyledHeader>
        <Input search placeholder="Szukaj" />
        <StyledHeading as="h1">{pageType}</StyledHeading>
        <StyledParagraph> 6 produktów</StyledParagraph>
      </StyledHeader>
      <StyledGrid>{children}</StyledGrid>
    </Wrapper>
    <Footer />
  </>
);

PageTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageType: PropTypes.oneOf(['torebki', 'kocyki', 'pluszaki', 'chusty', 'ubrania']),
  id: PropTypes.number,
};

PageTemplate.defaultProps = {
  pageType: 'torebki',
  id: null,
};
