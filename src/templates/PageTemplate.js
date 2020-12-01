import React from 'react';
import PropTypes from 'prop-types';
import MenuBar from 'components/organisms/MenuBar/MenuBar';

const PageTemplate = ({ children }) => (
  <>
    <MenuBar />
    {children}
  </>
);
PageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PageTemplate;
