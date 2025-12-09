import styled from '@emotion/styled';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Container } from '../components/layout/Container';
import { PageTransition } from '../components/common/PageTransition';
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

const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`;

const ImageCaption = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.tertiary};
  margin-top: 8px;
  text-align: center;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TroubleShootingList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const TroubleShootingItem = styled.div`
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const TroubleLabel = styled.div<{ type: 'problem' | 'solution' | 'result' }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  line-height: 1.7;
`;

const TroubleLabelHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const TroubleLabelEmoji = styled.span`
  font-size: 20px;
`;

const TroubleLabelTitle = styled.span<{ type: 'problem' | 'solution' | 'result' }>`
  font-size: 17px;
  font-weight: 700;
  color: ${({ theme, type }) =>
    type === 'problem'
      ? theme.colors.primary
      : type === 'solution'
        ? theme.colors.primary
        : theme.colors.primary};
`;

const TroubleLabelText = styled.span<{ type: 'problem' | 'solution' | 'result' }>`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 1.8;
  white-space: pre-line;
`;

const LearningList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const LearningItem = styled.li`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secondary};
  padding-left: 28px;
  position: relative;
  line-height: 1.7;

  &::before {
    content: '📚';
    position: absolute;
    left: 0;
    font-size: 18px;
  }
`;

export const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const projectIndex = Number(id);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // mainProjects와 otherProjects를 합쳐서 하나의 배열로 만듦
  const allProjects = [...resumeData.mainProjects, ...resumeData.otherProjects];
  const project = allProjects[projectIndex];

  if (!project || isNaN(projectIndex)) {
    return <Navigate to="/projects" replace />;
  }

  // Lightbox에 사용할 이미지 배열 생성
  const images = project.images?.map((img) => ({ src: img.src })) || [];

  return (
    <PageTransition>
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

      {project.troubleShooting && project.troubleShooting.length > 0 && (
        <Section>
          <SectionTitle>주요 해결 과제</SectionTitle>
          <TroubleShootingList>
            {project.troubleShooting.map((item, index) => (
              <TroubleShootingItem key={index}>
                <TroubleLabel type="problem">
                  <TroubleLabelHeader>
                    <TroubleLabelEmoji>❗</TroubleLabelEmoji>
                    <TroubleLabelTitle type="problem">문제 배경</TroubleLabelTitle>
                  </TroubleLabelHeader>
                  <TroubleLabelText type="problem">{item.problem}</TroubleLabelText>
                </TroubleLabel>
                <TroubleLabel type="solution">
                  <TroubleLabelHeader>
                    <TroubleLabelEmoji>🔧</TroubleLabelEmoji>
                    <TroubleLabelTitle type="solution">해결 방법</TroubleLabelTitle>
                  </TroubleLabelHeader>
                  <TroubleLabelText type="solution">{item.solution}</TroubleLabelText>
                </TroubleLabel>
                <TroubleLabel type="result">
                  <TroubleLabelHeader>
                    <TroubleLabelEmoji>👍</TroubleLabelEmoji>
                    <TroubleLabelTitle type="result">결과</TroubleLabelTitle>
                  </TroubleLabelHeader>
                  <TroubleLabelText type="result">{item.result}</TroubleLabelText>
                </TroubleLabel>
              </TroubleShootingItem>
            ))}
          </TroubleShootingList>
        </Section>
      )}

      {project.learnings && project.learnings.length > 0 && (
        <Section>
          <SectionTitle>핵심 학습 내용</SectionTitle>
          <LearningList>
            {project.learnings.map((learning, index) => (
              <LearningItem key={index}>{learning}</LearningItem>
            ))}
          </LearningList>
        </Section>
      )}

      {project.images && project.images.length > 0 && (
        <Section>
          <SectionTitle>프로젝트 스크린샷</SectionTitle>
          <ImageGallery>
            {project.images.map((image, index) => (
              <ImageWrapper key={index}>
                <ProjectImage
                  src={image.src}
                  alt={image.caption}
                  loading="lazy"
                  onClick={() => {
                    setPhotoIndex(index);
                    setLightboxOpen(true);
                  }}
                />
                <ImageCaption>{image.caption}</ImageCaption>
              </ImageWrapper>
            ))}
          </ImageGallery>
        </Section>
      )}

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={images}
        index={photoIndex}
      />
    </Container>
    </PageTransition>
  );
};
