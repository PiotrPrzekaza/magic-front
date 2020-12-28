import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MenuBar } from 'components/organisms/MenuBar/MenuBar';
import { Heading } from 'components/atoms/Heading/Heading';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import { Footer } from 'components/organisms/Footer/Footer';

const Wrapper = styled.div`
  padding: 10px 30px 20px 30px;
  margin: 0 auto;
  width: 95vw;
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

export const CategoryPageTemplate = ({ children, pageType }) => (
  <>
    <MenuBar />
    <Wrapper pageType={pageType}>
      <StyledHeader>
        <StyledHeading as="h1">Kategorie</StyledHeading>
      </StyledHeader>
      <StyledGrid>{children}</StyledGrid>
    </Wrapper>
    <Footer />
  </>
);

CategoryPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  pageType: PropTypes.oneOf(['category']),
};

CategoryPageTemplate.defaultProps = {
  pageType: 'category',
};
