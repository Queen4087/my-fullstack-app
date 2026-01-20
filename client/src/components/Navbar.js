import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.3); // Always semi-transparent
  backdrop-filter: blur(10px); // Always blurred
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  z-index: 100;
  transition: all 0.3s ease-in-out;
  box-shadow: ${({ scrollNav }) => scrollNav ? '0 10px 30px -10px rgba(2,12,27,0.7)' : 'none'};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 20px;
  }
`;

const Logo = styled.a`
  color: ${({ theme }) => theme.colors.green};
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavItem = styled.li`
  font-size: 0.9rem;
  
  a {
    color: ${({ theme }) => theme.colors.lightestSlate};
    &:hover {
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;

const NavBtn = styled.a`
  border: 1px solid ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.green};
  padding: 0.75rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.transGreen};
  }
`;

const MobileIcon = styled.div`
  display: none;
  color: ${({ theme }) => theme.colors.green};
  font-size: 1.8rem;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 75%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.lightNavy};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in-out;
  z-index: 99;
  box-shadow: -10px 0px 30px -15px ${({ theme }) => theme.colors.shadow};
`;

const MobileLink = styled.a`
  color: ${({ theme }) => theme.colors.lightestSlate};
  font-size: 1.2rem;
  margin: 20px 0;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }
`;

const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const changeNav = () => {
      if (window.scrollY >= 80) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    };
    window.addEventListener('scroll', changeNav);
    return () => window.removeEventListener('scroll', changeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <Logo onClick={toggleHome}>GH</Logo>
        <MobileIcon onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu>
          <NavItem><a href="#about">About</a></NavItem>
          <NavItem><a href="#skills">Skills</a></NavItem>
          <NavItem><a href="#projects">Projects</a></NavItem>
          <NavItem><a href="#experience">Experience</a></NavItem>
          <NavBtn href="#contact">Contact</NavBtn>
        </NavMenu>
      </Nav>

      <MobileMenu isOpen={isOpen}>
        <MobileLink href="#about" onClick={toggleMenu}>About</MobileLink>
        <MobileLink href="#skills" onClick={toggleMenu}>Skills</MobileLink>
        <MobileLink href="#projects" onClick={toggleMenu}>Projects</MobileLink>
        <MobileLink href="#experience" onClick={toggleMenu}>Experience</MobileLink>
        <NavBtn href="#contact" onClick={toggleMenu}>Contact</NavBtn>
      </MobileMenu>
    </>
  );
};

export default Navbar;
