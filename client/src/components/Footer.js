import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  padding: 20px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.slate};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.8rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;

  a {
    color: ${({ theme }) => theme.colors.lightSlate};
    font-size: 1.2rem;
    transition: all 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.green};
      transform: translateY(-3px);
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <a href="https://github.com/Queen4087" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/gifti-hussein-696a28331/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://t.me/Giftof_Allah" target="_blank" rel="noreferrer"><FaTelegram /></a>
        <a href="mailto:giftihussein64@gmail.com"><FaEnvelope /></a>
      </SocialLinks>
      <p>Designed & Built by Gifti Hussein</p>
    </FooterContainer>
  );
};

export default Footer;
