import styled from '@emotion/styled';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Container } from '../components/layout/Container';
import { resumeData } from '../data/resume';

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.tertiary};
  text-decoration: none;
  margin-bottom: 32px;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.highlight};
  }
`;

const ProjectHeader = styled.div`
  margin-bottom: 48px;
  padding-bottom: 32px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const ProjectMeta = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`;

const MetaItem = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.tertiary};
  font-weight: 500;
`;

const ProjectTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 28px;
  }
`;

const ProjectDescription = styled.p`
  font-size: 17px;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.secondary};
`;

const ExternalLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.highlight};
  font-weight: 600;
  text-decoration: none;
  margin-top: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

const Section = styled.section`
  margin-bottom: 48px;
`;

const SectionTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
`;

const TaskList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const TaskItem = styled.li`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secondary};
  padding-left: 28px;
  position: relative;
  line-height: 1.7;

  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.highlight};
    font-weight: 700;
    font-size: 18px;
  }
`;

const ResultList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ResultItem = styled.li`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secondary};
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.lightBackground};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border-left: 4px solid ${({ theme }) => theme.colors.highlight};
  line-height: 1.7;
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.highlight};
  font-weight: 700;
  font-size: 18px;
`;

export const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const projectIndex = Number(id);
  const project = resumeData.mainProjects[projectIndex];

  if (!project || isNaN(projectIndex)) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <Container>
      <BackLink to="/projects">← 프로젝트 목록으로</BackLink>

      <ProjectHeader>
        <ProjectMeta>
          <MetaItem>{project.company}</MetaItem>
          <MetaItem>|</MetaItem>
          <MetaItem>{project.period}</MetaItem>
        </ProjectMeta>
        <ProjectTitle>
          {project.description.split('.')[0] || '프로젝트'}
        </ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>
        {project.link && (
          <ExternalLink href={project.link} target="_blank" rel="noopener noreferrer">
            🔗 프로젝트 바로가기
          </ExternalLink>
        )}
      </ProjectHeader>

      <Section>
        <SectionTitle>주요 작업</SectionTitle>
        <TaskList>
          {project.tasks.map((task, index) => (
            <TaskItem key={index}>{task}</TaskItem>
          ))}
        </TaskList>
      </Section>

      <Section>
        <SectionTitle>성과 및 결과</SectionTitle>
        <ResultList>
          {project.results.map((result, index) => (
            <ResultItem key={index}>
              {result.text && `${result.text} `}
              {result.highlight && <Highlight>{result.highlight}</Highlight>}
              {result.value && result.value}
            </ResultItem>
          ))}
        </ResultList>
      </Section>
    </Container>
  );
};
