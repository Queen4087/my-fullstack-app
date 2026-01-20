import React from 'react';
import styled from 'styled-components';
import { FaPython, FaNodeJs, FaReact, FaPalette, FaDatabase, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';

const SkillsContainer = styled.section`
  padding: 100px 50px;
  max-width: 1000px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.lightNavy};

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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
`;

const SkillCard = styled.div`
  background-color: #000000;
  padding: 20px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: default;
  box-shadow: 0 4px 6px rgba(255, 255, 255, 0.1); // Add white/light shadow for visibility on black
  border: 1px solid #222;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px -15px ${({ theme }) => theme.colors.shadow};
    
    svg {
      color: ${({ theme }) => theme.colors.green};
    }
  }

  svg {
    font-size: 3rem;
    margin-bottom: 15px;
    color: ${({ theme }) => theme.colors.lightSlate};
    transition: all 0.3s ease;
  }

  span {
    color: ${({ theme }) => theme.colors.lightestSlate};
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.9rem;
  }
`;

const Skills = () => {
  const skills = [
    { name: 'Python', icon: <FaPython /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Graphics', icon: <FaPalette /> },
    { name: 'Database', icon: <FaDatabase /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
  ];

  return (
    <SkillsContainer id="skills">
      <SectionTitle><span>02.</span> Skills</SectionTitle>
      <SkillsGrid>
        {skills.map((skill, index) => (
          <SkillCard key={index}>
            {skill.icon}
            <span>{skill.name}</span>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default Skills;
