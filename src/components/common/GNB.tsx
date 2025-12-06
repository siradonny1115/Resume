import styled from '@emotion/styled';
import { Link, useLocation } from 'react-router-dom';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  z-index: 100;
  backdrop-filter: blur(8px);
  background-color: rgba(255, 255, 255, 0.95);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.highlight};
  }
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 32px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 20px;
  }
`;

const NavItem = styled.li<{ isActive?: boolean }>`
  a {
    font-size: 15px;
    font-weight: 500;
    color: ${({ theme, isActive }) =>
      isActive ? theme.colors.highlight : theme.colors.secondary};
    text-decoration: none;
    transition: color 0.2s;
    position: relative;

    &:hover {
      color: ${({ theme }) => theme.colors.highlight};
    }

    ${({ isActive, theme }) =>
      isActive &&
      `
      &::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        right: 0;
        height: 2px;
        background-color: ${theme.colors.highlight};
      }
    `}
  }
`;

export const GNB = () => {
  const location = useLocation();

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">김상돈</Logo>
        <NavMenu>
          <NavItem isActive={location.pathname === '/'}>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem isActive={location.pathname.startsWith('/projects')}>
            <Link to="/projects">Projects</Link>
          </NavItem>
          <NavItem>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Blog
            </a>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};
