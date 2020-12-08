import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MenuBar from 'components/organisms/MenuBar/MenuBar';
import Heading from 'components/atoms/Heading/Heading';

const Wrapper = styled.div`
  padding: 70px 30px;
`;

const StyledGrid = styled.div`
  display: flex;
`;

const StyledHeader = styled.div`
  margin: 25px 0 30px 0;
`;

const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSize.xxl};
`;

const AboutPageTemplate = ({ children, pageType }) => (
  <>
    <MenuBar />
    <Wrapper pageType={pageType}>
      <StyledHeader>
        <StyledHeading as="h1">O Mnie</StyledHeading>
      </StyledHeader>
      <StyledGrid>{children}</StyledGrid>
    </Wrapper>
  </>
);

AboutPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  pageType: PropTypes.exact('contact'),
};

AboutPageTemplate.defaultProps = {
  pageType: 'contact',
};

export default AboutPageTemplate;
