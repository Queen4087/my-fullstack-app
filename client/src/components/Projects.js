import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FaExternalLinkAlt, FaFolder } from 'react-icons/fa';

const ProjectsContainer = styled.section`
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
  position: relative;
`;

const ProjectCard = styled.div`
  background-color: #000000;
  padding: 2rem 1.75rem;
  border-radius: 4px;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: default;
  box-shadow: 0 4px 6px rgba(255, 255, 255, 0.1); // Add shadow
  border: 1px solid #222;

  &:hover {
    transform: translateY(-7px);
    box-shadow: 0 10px 30px -15px ${({ theme }) => theme.colors.shadow};
    
    h3 {
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  
  .folder {
    color: ${({ theme }) => theme.colors.green};
    font-size: 40px;
  }

  .links {
    display: flex;
    align-items: center;
    gap: 15px;
    
    a {
      color: ${({ theme }) => theme.colors.lightSlate};
      font-size: 20px;
      
      &:hover {
        color: ${({ theme }) => theme.colors.green};
      }
    }
  }
`;

const CardTitle = styled.h3`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.lightestSlate};
  font-size: 22px;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const CardDescription = styled.div`
  color: ${({ theme }) => theme.colors.lightSlate};
  font-size: 17px;
  margin-bottom: 20px;
  
  p {
    margin: 0;
  }
`;

const CardFooter = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;
  
  li {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 12px;
    color: ${({ theme }) => theme.colors.slate};
    margin-right: 15px;
    margin-bottom: 5px;
  }
`;

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // In a real scenario, we would fetch from the backend
        // const res = await axios.get('http://localhost:5000/api/projects');
        // setProjects(res.data.data);
        
        // For demo purposes, if backend isn't running or accessible during build, we fallback or try fetch
        // We will try to fetch, if fail, use static data for reliability in this environment
        axios.get('http://localhost:5000/api/projects')
          .then(res => {
            setProjects(res.data.data);
          })
          .catch(err => {
            console.error("Failed to fetch projects", err);
            // Fallback data if API fails (e.g. CORS or server not running)
            setProjects([
              {
                id: 1,
                title: "MGSA Official Website",
                description: "Official website for MGSA. A comprehensive platform for the organization.",
                link: "#",
                tags: "React,Node.js,Web Design"
              },
              {
                id: 2,
                title: "Haramaya University Clinic",
                description: "A full-stack management system for the university clinic, handling patient records.",
                link: "#",
                tags: "Fullstack,Database,System Design"
              }
            ]);
          });

      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <ProjectsContainer id="projects">
      <SectionTitle><span>03.</span> Some Things I've Built</SectionTitle>
      <Grid>
        {projects.map((project) => (
          <ProjectCard key={project.id}>
            <header>
              <CardHeader>
                <div className="folder">
                  <FaFolder />
                </div>
                <div className="links">
                  <a href={project.link} target="_blank" rel="noreferrer" aria-label="External Link">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>
                <p>{project.description}</p>
              </CardDescription>
            </header>
            <footer>
              <CardFooter>
                {project.tags && project.tags.split(',').map((tag, i) => (
                  <li key={i}>{tag.trim()}</li>
                ))}
              </CardFooter>
            </footer>
          </ProjectCard>
        ))}
      </Grid>
    </ProjectsContainer>
  );
};

export default Projects;
