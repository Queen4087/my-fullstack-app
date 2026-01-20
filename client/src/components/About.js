import React from "react";
import styled from "styled-components";

const AboutContainer = styled.section`
  padding: 100px 50px;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 80px 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.lightestSlate};
  margin-bottom: 40px;
  display: flex;
  align-items: center;

  &::after {
    content: "";
    display: block;
    width: 300px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.lightestNavy};
    margin-left: 20px;
  }

  span {
    color: ${({ theme }) => theme.colors.green};
    margin-right: 10px;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    &::after {
      width: 100%;
    }
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Text = styled.div`
  color: ${({ theme }) => theme.colors.slate};
  font-size: 1.1rem;
  line-height: 1.6;

  p {
    margin-bottom: 15px;
  }
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <SectionTitle>
        <span>01.</span> About Me
      </SectionTitle>
      <Content>
        <Text>
          <p>
            Hello! My name is Gifti Hussein and I enjoy creating things that
            live on the internet. My interest in web development started back
            when I decided to try editing custom Tumblr themes — turns out
            hacking together HTML & CSS was pretty fun!
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of working on
            various projects including official websites and management systems.
            My main focus these days is building accessible, inclusive products
            and digital experiences for a variety of clients.
          </p>
          <p>
            I am also a graphics designer, which allows me to bring a unique
            visual perspective to my development work.
          </p>
        </Text>
      </Content>
    </AboutContainer>
  );
};

export default About;
