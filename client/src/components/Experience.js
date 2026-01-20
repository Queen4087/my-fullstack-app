import React from 'react';
import styled from 'styled-components';

const ExperienceContainer = styled.section`
  padding: 100px 50px;
  max-width: 800px;
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
    content: '';
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
`;

const JobContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const JobCard = styled.div`
  border-left: 2px solid ${({ theme }) => theme.colors.lightestNavy};
  padding-left: 20px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.green};
  }
`;

const JobTitle = styled.h3`
  color: ${({ theme }) => theme.colors.lightestSlate};
  font-size: 1.3rem;
  margin-bottom: 5px;
`;

const Company = styled.span`
  color: ${({ theme }) => theme.colors.green};
`;

const JobDate = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.lightSlate};
  margin-bottom: 15px;
`;

const JobDescription = styled.ul`
  list-style: none;
  
  li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.slate};
    font-size: 1rem;

    &::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;

const Experience = () => {
  return (
    <ExperienceContainer id="experience">
      <SectionTitle><span>04.</span> Where I've Worked</SectionTitle>
      <JobContainer>
        <JobCard>
          <JobTitle>Fullstack Developer <Company>@ Freelance</Company></JobTitle>
          <JobDate>2023 - Present</JobDate>
          <JobDescription>
            <li>Developed and maintained code for client websites using HTML, CSS, JavaScript, and React.</li>
            <li>Built the official website for MGSA, ensuring a responsive and accessible design.</li>
            <li>Created a Clinic Management System for Haramaya University, handling complex data relationships and user roles.</li>
          </JobDescription>
        </JobCard>
        <JobCard>
          <JobTitle>Graphics Designer <Company>@ Self-Employed</Company></JobTitle>
          <JobDate>2022 - Present</JobDate>
          <JobDescription>
            <li>Designed user interfaces and visual assets for web applications.</li>
            <li>Created branding materials including logos and social media graphics.</li>
          </JobDescription>
        </JobCard>
      </JobContainer>
    </ExperienceContainer>
  );
};

export default Experience;
