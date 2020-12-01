import React from 'react';
import GlobalStyle from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

const BasicTemplate = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

BasicTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default BasicTemplate;
