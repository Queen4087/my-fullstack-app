
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import profileImg from '../assets/profile.jpg';

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
  background-color: ${({ theme }) => theme.colors.navy};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column-reverse;
    padding: 100px 20px 50px;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: center;
  }
`;

const HeroImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    max-width: 400px;
    height: 450px; /* Force portrait height */
    object-fit: cover;
    width: 100%;
    border-radius: 10px;
    filter: grayscale(20%) contrast(1.1);
    transition: all 0.3s ease-in-out;
    box-shadow: 0 10px 30px -10px ${({ theme }) => theme.colors.shadow};

    &:hover {
      filter: none;
      transform: translateY(-5px);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 50px;
    img {
      max-width: 300px;
    }
  }
`;

const Greeting = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.lightestSlate};
  margin-bottom: 20px;

  span {
    color: ${({ theme }) => theme.colors.green};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.slate};
  max-width: 540px;
  margin-bottom: 40px;
  line-height: 1.6;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 20px;
`;

const PrimaryButton = styled.a`
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.navy};
  padding: 14px 28px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightestSlate};
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled.a`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.green};
  border: 1px solid ${({ theme }) => theme.colors.green};
  padding: 14px 28px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.transGreen};
    transform: translateY(-2px);
  }
`;

const StatusBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 40px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.slate};

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: ${({ theme }) => theme.colors.green};
    border-radius: 50%;
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.green};
  }
`;

const Hero = () => {
  return (
    <HeroContainer id="home">
      <HeroContent>
        <Greeting
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I'm <span>Gifti Hussein</span>
        </Greeting>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          I build beautiful and responsive user interfaces. I focus on
          accessibility, performance, and delightful micro-interactions.
        </Subtitle>
        <ButtonGroup
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <PrimaryButton href="#projects">View Projects</PrimaryButton>
          <SecondaryButton href="#">Download Resume</SecondaryButton>
        </ButtonGroup>

        <StatusBadge>
          <span></span> Available for work • Based in Dire Dawa
        </StatusBadge>
      </HeroContent>

      <HeroImage>
        <motion.img
          src={profileImg}
          alt="Gifti Hussein"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </HeroImage>
    </HeroContainer>
  );
};

export default Hero;
