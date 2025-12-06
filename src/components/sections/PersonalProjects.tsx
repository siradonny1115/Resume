import styled from '@emotion/styled';
import { PersonalProject } from '../../types/resume';

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

const ProjectName = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`;

const ProjectPeriod = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.tertiary};
`;

const ProjectDescription = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.secondary};
`;

const LinkWrapper = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const Link = styled.a`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.highlight};
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 4px;

  &:hover {
    text-decoration: underline;
  }
`;

interface PersonalProjectsProps {
  data: PersonalProject[];
}

export const PersonalProjects = ({ data }: PersonalProjectsProps) => {
  return (
    <ProjectList>
      {data.map((project, index) => (
        <ProjectItem key={index}>
          <ProjectHeader>
            <ProjectName>{project.name}</ProjectName>
            <ProjectPeriod>{project.period}</ProjectPeriod>
          </ProjectHeader>
          <ProjectDescription>{project.description}</ProjectDescription>
          <LinkWrapper>
            {project.url && (
              <Link href={project.url} target="_blank" rel="noopener noreferrer">
                🔗 Demo
              </Link>
            )}
            {project.github && (
              <Link href={project.github} target="_blank" rel="noopener noreferrer">
                💻 GitHub
              </Link>
            )}
          </LinkWrapper>
        </ProjectItem>
      ))}
    </ProjectList>
  );
};
