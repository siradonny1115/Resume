import styled from '@emotion/styled';
import { Global } from '@emotion/react';
import { pdfPageStyles } from '../styles/pdfStyles';
import { resumeData } from '../data/resume';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const PDFContainer = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;

  @media print {
    margin: 0;
    padding: 0;
  }
`;

const DownloadButton = styled.button`
  position: fixed;
  top: 80px;
  right: 40px;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.colors.highlight};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  z-index: 100;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  @media print {
    display: none;
  }
`;

const PDFPage = styled.div`
  width: 210mm;
  min-height: 297mm;
  padding: 20mm;
  margin: 0 auto 20px;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  @media print {
    box-shadow: none;
    margin: 0;
    page-break-after: always;
  }
`;

// Header Section
const Header = styled.div`
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
`;

const Name = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 8px 0;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0 0 16px 0;
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.secondary};
`;

const ContactItem = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;

  &:not(:last-child)::after {
    content: '|';
    margin-left: 16px;
    color: ${({ theme }) => theme.colors.border};
  }
`;

// Section
const Section = styled.section`
  margin-bottom: 28px;
  page-break-inside: avoid;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 16px 0;
  padding-bottom: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const IntroText = styled.p`
  font-size: 13px;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

// Skills
const SkillsGrid = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`;

const SkillTag = styled.span`
  padding: 4px 12px;
  background-color: ${({ theme }) => theme.colors.lightBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
`;

// Career
const CareerItem = styled.div`
  margin-bottom: 16px;
`;

const CareerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 8px;
`;

const CompanyName = styled.h4`
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

const Period = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.tertiary};
  font-weight: 500;
`;

const Position = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 4px 0 12px 0;
`;

const ResponsibilityList = styled.ul`
  margin: 0;
  padding-left: 20px;
  list-style: none;
`;

const ResponsibilityItem = styled.li`
  font-size: 12px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 6px;
  position: relative;

  &::before {
    content: '•';
    position: absolute;
    left: -16px;
    color: ${({ theme }) => theme.colors.highlight};
  }
`;

// Projects
const ProjectItem = styled.div`
  margin-bottom: 20px;
  page-break-inside: avoid;
`;

const ProjectHeader = styled.div`
  margin-bottom: 8px;
`;

const ProjectName = styled.h4`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 4px 0;
`;

const ProjectMeta = styled.div`
  display: flex;
  gap: 8px;
  font-size: 11px;
  color: ${({ theme }) => theme.colors.tertiary};
  margin-bottom: 6px;
`;

const ProjectDesc = styled.p`
  font-size: 12px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0 0 8px 0;
`;

const TaskList = styled.ul`
  margin: 0 0 8px 0;
  padding-left: 20px;
  list-style: none;
`;

const TaskItem = styled.li`
  font-size: 11px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 3px;
  position: relative;

  &::before {
    content: '·';
    position: absolute;
    left: -12px;
    color: ${({ theme }) => theme.colors.tertiary};
  }
`;

const ResultList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ResultItem = styled.div`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.secondary};

  strong {
    color: ${({ theme }) => theme.colors.highlight};
    font-weight: 600;
  }
`;

// 보안 토큰 (환경변수로 관리 권장)
const RESUME_ACCESS_TOKEN = 'resume-access-2025';

export const PDFResumePage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // 접근 권한 체크
  useEffect(() => {
    const token = searchParams.get('token');

    if (token !== RESUME_ACCESS_TOKEN) {
      // 토큰이 없거나 잘못된 경우 홈으로 리다이렉트
      navigate('/', { replace: true });
    }
  }, [searchParams, navigate]);

  const handlePrint = () => {
    window.print();
  };

  // 주요 프로젝트 3개만 선택
  const topProjects = resumeData.mainProjects.slice(0, 3);

  return (
    <>
      <Global styles={pdfPageStyles} />
      <DownloadButton onClick={handlePrint} className="no-print">
        📥 PDF 다운로드
      </DownloadButton>

      <PDFContainer className="pdf-container">
        {/* Page 1: 기본정보 + 자기소개 + 스킬 + 경력 */}
        <PDFPage className="pdf-page">
          <Header>
            <Name>{resumeData.basicInfo.name}</Name>
            <Title>{resumeData.basicInfo.title}</Title>
            <ContactInfo>
              <ContactItem>📧 {resumeData.basicInfo.contact.email}</ContactItem>
              <ContactItem>📱 {resumeData.basicInfo.contact.phone}</ContactItem>
              <ContactItem>💻 {resumeData.basicInfo.contact.github}</ContactItem>
            </ContactInfo>
          </Header>

          <Section>
            <SectionTitle>자기소개</SectionTitle>
            <IntroText>{resumeData.introduction}</IntroText>
          </Section>

          <Section>
            <SectionTitle>기술 스택</SectionTitle>
            <SkillsGrid>
              {resumeData.skills.skills.map((skill, index) => (
                <SkillTag key={index}>{skill}</SkillTag>
              ))}
            </SkillsGrid>
          </Section>

          <Section>
            <SectionTitle>경력</SectionTitle>
            <CareerItem>
              <CareerHeader>
                <CompanyName>{resumeData.career.company}</CompanyName>
                <Period>
                  {resumeData.career.period} · {resumeData.career.duration}
                </Period>
              </CareerHeader>
              <Position>
                {resumeData.career.position} · {resumeData.career.type}
              </Position>
              <ResponsibilityList>
                {resumeData.career.responsibilities.map((item, index) => (
                  <ResponsibilityItem key={index}>{item}</ResponsibilityItem>
                ))}
              </ResponsibilityList>
            </CareerItem>
          </Section>
        </PDFPage>

        {/* Page 2-3: 주요 프로젝트 */}
        {topProjects.map((project, index) => (
          <PDFPage key={index} className="pdf-page">
            <Section>
              <SectionTitle>주요 프로젝트 {index + 1}</SectionTitle>
              <ProjectItem>
                <ProjectHeader>
                  <ProjectName>{project.name}</ProjectName>
                  <ProjectMeta>
                    <span>{project.company}</span>
                    <span>|</span>
                    <span>{project.period}</span>
                  </ProjectMeta>
                  <ProjectDesc>{project.description}</ProjectDesc>
                </ProjectHeader>

                <div style={{ marginBottom: '12px' }}>
                  <strong style={{ fontSize: '12px', display: 'block', marginBottom: '6px' }}>
                    주요 작업
                  </strong>
                  <TaskList>
                    {project.tasks.map((task, idx) => (
                      <TaskItem key={idx}>{task}</TaskItem>
                    ))}
                  </TaskList>
                </div>

                <div style={{ marginBottom: '12px' }}>
                  <strong style={{ fontSize: '12px', display: 'block', marginBottom: '6px' }}>
                    성과 및 결과
                  </strong>
                  <ResultList>
                    {project.results.map((result, idx) => (
                      <ResultItem key={idx}>
                        {result.text && `${result.text} `}
                        {result.highlight && <strong>{result.highlight}</strong>}
                        {result.value && result.value}
                      </ResultItem>
                    ))}
                  </ResultList>
                </div>

                {project.troubleShooting && project.troubleShooting.length > 0 && (
                  <div>
                    <strong style={{ fontSize: '12px', display: 'block', marginBottom: '6px' }}>
                      주요 해결 과제
                    </strong>
                    {project.troubleShooting.slice(0, 2).map((item, idx) => (
                      <div key={idx} style={{ marginBottom: '10px' }}>
                        <div style={{ fontSize: '11px', marginBottom: '4px' }}>
                          <strong style={{ color: '#d32f2f' }}>문제:</strong>{' '}
                          {item.problem.split('\n')[1] || item.problem}
                        </div>
                        <div style={{ fontSize: '11px', marginBottom: '4px' }}>
                          <strong style={{ color: '#1976d2' }}>해결:</strong>{' '}
                          {item.solution.split('\n')[1] || item.solution}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </ProjectItem>
            </Section>
          </PDFPage>
        ))}

        {/* Page 4: 기타 프로젝트 + 학력 */}
        <PDFPage className="pdf-page">
          <Section>
            <SectionTitle>기타 프로젝트</SectionTitle>
            {resumeData.otherProjects.slice(0, 4).map((project, index) => (
              <ProjectItem key={index}>
                <ProjectName>{project.name}</ProjectName>
                <ProjectMeta>
                  <span>{project.company}</span>
                  <span>|</span>
                  <span>{project.period}</span>
                </ProjectMeta>
                <ProjectDesc>{project.description}</ProjectDesc>
              </ProjectItem>
            ))}
          </Section>

          <Section>
            <SectionTitle>학력 · 교육</SectionTitle>
            <CareerItem>
              <CareerHeader>
                <CompanyName>{resumeData.educationHistory.school}</CompanyName>
                <Period>{resumeData.educationHistory.status}</Period>
              </CareerHeader>
              <Position>{resumeData.educationHistory.major}</Position>
            </CareerItem>
            <CareerItem>
              <CareerHeader>
                <CompanyName>{resumeData.educationCourse.name}</CompanyName>
                <Period>{resumeData.educationCourse.period}</Period>
              </CareerHeader>
              <Position>{resumeData.educationCourse.status}</Position>
            </CareerItem>
          </Section>

          <Section>
            <SectionTitle>자격증</SectionTitle>
            {resumeData.certificates.map((cert, index) => (
              <CareerItem key={index}>
                <CareerHeader>
                  <CompanyName>{cert.name}</CompanyName>
                  <Period>{cert.issuer}</Period>
                </CareerHeader>
              </CareerItem>
            ))}
          </Section>
        </PDFPage>
      </PDFContainer>
    </>
  );
};
