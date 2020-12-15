import React from 'react';
import styled from 'styled-components';
import FacebookIcon from 'assets/icon/facebook.svg';
import InstagramIcon from 'assets/icon/instagram.svg';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import { ImageItem } from 'components/atoms/ImageItem/ImageItem';
import { Anchor } from 'components/atoms/Anchor/Anchor';
import { ListItem } from 'components/atoms/ListItem/ListItem';

const FooterWrapper = styled.footer`
  display: flex;
  width: 100%;
  height: 5%;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.primaryBg};
`;

const StyledImageItem = styled(ImageItem)`
  width: 25px;
  height: 25px;
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
      <ListItem
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/Magiczna_petelka-100294938418180/"
      >
        <StyledImageItem src={FacebookIcon} />
      </ListItem>
      <ListItem
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/magicznapetelka/"
      >
        <StyledImageItem src={InstagramIcon} />
      </ListItem>
    </SocialWrapper>
    <CreatorWrapper>
      <StyledParagraph>
        powered by
        <Anchor
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/piotr-przekaza-9540b8172/"
        >
          {' '}
          Piotr Przekaza
        </Anchor>{' '}
        &copy;2021
      </StyledParagraph>
    </CreatorWrapper>
  </FooterWrapper>
);
