import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MenuBar from 'components/organisms/MenuBar/MenuBar';
import { Footer } from 'components/organisms/Footer/Footer';

const Wrapper = styled.div`
  display: flex;
  margin: 17px 0 0 0;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 250px);
`;

const AboutPageTemplate = ({ children, pageType }) => (
  <>
    <MenuBar />
    <Wrapper>
      <StyledGrid>{children}</StyledGrid>
      <Footer />
    </Wrapper>
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
