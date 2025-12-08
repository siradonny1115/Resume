import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { Header } from '../components/sections/Header';
import { Introduction } from '../components/sections/Introduction';
import { Skills } from '../components/sections/Skills';
import { Career } from '../components/sections/Career';
import { Projects } from '../components/sections/Projects';
import { Contributions } from '../components/sections/Contributions';
import { PersonalProjects } from '../components/sections/PersonalProjects';
import { Education } from '../components/sections/Education';
import { Certificates } from '../components/sections/Certificates';
import { LNB } from '../components/common/LNB';
import { PageTransition } from '../components/common/PageTransition';
import { resumeData } from '../data/resume';

export const HomePage = () => {
  return (
    <PageTransition>
      <LNB />
      <Container>
        <Header data={resumeData.basicInfo} />

        <Section title="자기소개" id="intro">
          <Introduction text={resumeData.introduction} />
        </Section>

        <Section title="기술 스택" id="skills">
          <Skills data={resumeData.skills} />
        </Section>

        <Section title="경력" id="career">
          <Career data={resumeData.career} />
        </Section>

        <Section title="프로젝트" id="projects">
          <Projects
            mainProjects={resumeData.mainProjects}
            otherProjects={resumeData.otherProjects}
          />
        </Section>

        <Section title="자율 기여" id="contributions">
          <Contributions data={resumeData.contributions} />
        </Section>

        <Section title="개인 프로젝트" id="personal">
          <PersonalProjects data={resumeData.personalProjects} />
        </Section>

        <Section title="학력 · 교육" id="education">
          <Education
            history={resumeData.educationHistory}
            course={resumeData.educationCourse}
          />
        </Section>

        <Section title="자격증" id="certificates">
          <Certificates data={resumeData.certificates} />
        </Section>
      </Container>
    </PageTransition>
  );
};
