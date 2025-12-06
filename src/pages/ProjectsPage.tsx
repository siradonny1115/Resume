import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Container } from '../components/layout/Container';
import { resumeData } from '../data/resume';

const PageTitle = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 32px;
    margin-bottom: 32px;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 28px;
  background-color: ${({ theme }) => theme.colors.lightBackground};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  border: 1px solid ${({ theme }) => theme.colors.border};
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.large};
    border-color: ${({ theme }) => theme.colors.highlight};
  }
`;

const ProjectPeriod = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.tertiary};
  font-weight: 500;
`;

const ProjectTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1.4;
`;

const ProjectDescription = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.secondary};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ProjectMeta = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 8px;
`;

const Tag = styled.span`
  padding: 4px 12px;
  background-color: ${({ theme }) => theme.colors.tagBackground};
  border: 1px solid ${({ theme }) => theme.colors.tagBorder};
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ProjectsPage = () => {
  return (
    <Container>
      <PageTitle>Projects</PageTitle>
      <ProjectGrid>
        {resumeData.mainProjects.map((project, index) => (
          <ProjectCard key={index} to={`/projects/${index}`}>
            <ProjectPeriod>{project.period}</ProjectPeriod>
            <ProjectTitle>
              {project.description.split('.')[0] || '프로젝트'}
            </ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectMeta>
              <Tag>{project.company}</Tag>
              <Tag>{project.tasks.length}개 주요 작업</Tag>
            </ProjectMeta>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </Container>
  );
};
