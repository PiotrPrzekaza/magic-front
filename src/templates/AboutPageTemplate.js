import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MenuBar from 'components/organisms/MenuBar/MenuBar';

const Wrapper = styled.div`
  padding: 70px 30px;
`;

const StyledGrid = styled.div`
  display: flex;
  justify-content: center;
`;

const AboutPageTemplate = ({ children }) => (
  <>
    <MenuBar />
    <Wrapper>
      <StyledGrid>{children}</StyledGrid>
    </Wrapper>
  </>
);

AboutPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AboutPageTemplate;
