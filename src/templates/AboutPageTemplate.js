import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MenuBar from 'components/organisms/MenuBar/MenuBar';
import { Footer } from 'components/organisms/Footer/Footer';

const Wrapper = styled.div`
  padding: 70px 30px;
`;

const StyledGrid = styled.div`
  display: flex;
  justify-content: center;
`;

const AboutPageTemplate = ({ children, pageType }) => (
  <>
    <MenuBar />
    <Wrapper>
      <StyledGrid>{children}</StyledGrid>
    </Wrapper>
    <Footer />
  </>
);

AboutPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  pageType: PropTypes.oneOf(['about', 'contact']),
};

AboutPageTemplate.defaultProps = {
  pageType: 'about',
};

export default AboutPageTemplate;
