import React from 'react';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const Footer = () => (
  <FooterWrapper>
    <div>
      <ul>
        <Paragraph>sociale</Paragraph>
        <li>facebook</li>
        <li>instagram</li>
      </ul>
    </div>
    <div>
      <p>
        powered by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/piotr-przekaza-9540b8172/"
        >
          {' '}
          Piotr Przekaza
        </a>{' '}
        &copy;2021
      </p>
    </div>
  </FooterWrapper>
);

export { Footer };
