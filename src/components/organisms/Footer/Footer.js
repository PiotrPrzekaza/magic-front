import React from 'react';
import styled from 'styled-components';
import FacebookIcon from 'assets/icon/facebook.svg';
import InstagramIcon from 'assets/icon/instagram.svg';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import { ImageItem } from 'components/atoms/ImageItem/ImageItem';
import { Anchor } from 'components/atoms/Anchor/Anchor';

const FooterWrapper = styled.footer`
  display: flex;
  width: 90vw;
  height: 5vh;
  margin: 0 auto;
  border-top: 1px solid black;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.primaryBg};
`;

const StyledImageItem = styled(ImageItem)`
  width: 25px;
  height: 25px;
  :hover {
    --webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
`;
const CreatorWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.s};
  padding-right: 50px;
`;

export const Footer = () => (
  <FooterWrapper>
    <SocialWrapper>
      <StyledParagraph>sociale</StyledParagraph>
      <Anchor
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/Magiczna_petelka-100294938418180/"
      >
        <StyledImageItem src={FacebookIcon} />
      </Anchor>
      <Anchor
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/magicznapetelka/"
      >
        <StyledImageItem src={InstagramIcon} />
      </Anchor>
    </SocialWrapper>
    <CreatorWrapper>
      <StyledParagraph>
        powered by{' '}
        <Anchor
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/piotr-przekaza-9540b8172/"
        >
          {' '}
          Piotr Przekaza
        </Anchor>
        &copy; {new Date().getFullYear()}
      </StyledParagraph>
    </CreatorWrapper>
  </FooterWrapper>
);
