import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

const Sidebar = styled.aside`
  position: fixed;
  top: 120px;
  left: 40px;
  width: 200px;
  z-index: 50;

  @media (max-width: 1400px) {
    left: 20px;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const NavItem = styled.li<{ isActive?: boolean }>`
  font-size: 14px;
  font-weight: ${({ isActive }) => (isActive ? '600' : '500')};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.highlight : theme.colors.tertiary};
  cursor: pointer;
  transition: all 0.2s;
  padding-left: ${({ isActive }) => (isActive ? '12px' : '0')};
  border-left: ${({ isActive, theme }) =>
    isActive ? `2px solid ${theme.colors.highlight}` : '2px solid transparent'};

  &:hover {
    color: ${({ theme }) => theme.colors.highlight};
    padding-left: 12px;
  }
`;

const sections = [
  { id: 'intro', label: '자기소개' },
  { id: 'skills', label: '기술 스택' },
  { id: 'career', label: '경력' },
  { id: 'projects', label: '프로젝트' },
];

export const LNB = () => {
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.offsetTop - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <Sidebar>
      <NavList>
        {sections.map((section) => (
          <NavItem
            key={section.id}
            isActive={activeSection === section.id}
            onClick={() => scrollToSection(section.id)}
          >
            {section.label}
          </NavItem>
        ))}
      </NavList>
    </Sidebar>
  );
};
