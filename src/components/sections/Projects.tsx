import styled from '@emotion/styled';
import { MainProject, OtherProject } from '../../types/resume';

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.lightBackground};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.2s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.medium};
    transform: translateY(-2px);
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const ProjectPeriod = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.tertiary};
  font-weight: 500;
`;

const ProjectDescription = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.secondary};
`;

const ProjectLink = styled.a`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.highlight};
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
  }
`;

const TaskList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const TaskItem = styled.li`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondary};
  padding-left: 16px;
  position: relative;
  line-height: 1.6;

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.tertiary};
  }
`;

const ResultList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const ResultItem = styled.li`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondary};
  padding-left: 16px;
  position: relative;
  line-height: 1.6;

  &::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.highlight};
  }
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.highlight};
  font-weight: 600;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin: 16px 0;
`;

const OtherProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  margin-top: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const OtherProjectItem = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.small};
    border-color: ${({ theme }) => theme.colors.highlight};
  }
`;

const OtherProjectName = styled.h4`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`;

const OtherProjectPeriod = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.tertiary};
`;

const OtherProjectDescription = styled.p`
  font-size: 13px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.secondary};
`;

interface ProjectsProps {
  mainProjects: MainProject[];
  otherProjects: OtherProject[];
}

export const Projects = ({ mainProjects, otherProjects }: ProjectsProps) => {
  return (
    <ProjectsWrapper>
      {mainProjects.map((project, index) => (
        <ProjectItem key={index}>
          <ProjectHeader>
            <ProjectPeriod>{project.period}</ProjectPeriod>
            {project.link && (
              <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                🔗 프로젝트 링크
              </ProjectLink>
            )}
          </ProjectHeader>
          <ProjectDescription>{project.description}</ProjectDescription>
          <TaskList>
            {project.tasks.map((task, taskIndex) => (
              <TaskItem key={taskIndex}>{task}</TaskItem>
            ))}
          </TaskList>
          <ResultList>
            {project.results.map((result, resultIndex) => (
              <ResultItem key={resultIndex}>
                {result.text && `${result.text} `}
                {result.highlight && <Highlight>{result.highlight}</Highlight>}
                {result.value && result.value}
              </ResultItem>
            ))}
          </ResultList>
        </ProjectItem>
      ))}

      <Divider />

      <OtherProjectsWrapper>
        {otherProjects.map((project, index) => (
          <OtherProjectItem key={index}>
            <OtherProjectName>{project.name}</OtherProjectName>
            <OtherProjectPeriod>{project.period}</OtherProjectPeriod>
            {project.description && (
              <OtherProjectDescription>{project.description}</OtherProjectDescription>
            )}
            {project.highlight && (
              <OtherProjectDescription>
                <Highlight>{project.highlight}</Highlight>
              </OtherProjectDescription>
            )}
          </OtherProjectItem>
        ))}
      </OtherProjectsWrapper>
    </ProjectsWrapper>
  );
};
