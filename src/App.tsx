import { ThemeProvider } from '@emotion/react';
import { Global } from '@emotion/react';
import { theme } from './styles/theme';
import { globalStyles } from './styles/globalStyles';
import { Container } from './components/layout/Container';
import { Section } from './components/layout/Section';
import { Header } from './components/sections/Header';
import { Introduction } from './components/sections/Introduction';
import { Skills } from './components/sections/Skills';
import { Career } from './components/sections/Career';
import { Projects } from './components/sections/Projects';
import { Contributions } from './components/sections/Contributions';
import { PersonalProjects } from './components/sections/PersonalProjects';
import { Education } from './components/sections/Education';
import { Certificates } from './components/sections/Certificates';
import { resumeData } from './data/resume';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Container>
        <Header data={resumeData.basicInfo} />

        <Section title="자기소개">
          <Introduction text={resumeData.introduction} />
        </Section>

        <Section title="기술 스택">
          <Skills data={resumeData.skills} />
        </Section>

        <Section title="경력">
          <Career data={resumeData.career} />
        </Section>

        <Section title="프로젝트">
          <Projects
            mainProjects={resumeData.mainProjects}
            otherProjects={resumeData.otherProjects}
          />
        </Section>

        <Section title="자율 기여">
          <Contributions data={resumeData.contributions} />
        </Section>

        <Section title="개인 프로젝트">
          <PersonalProjects data={resumeData.personalProjects} />
        </Section>

        <Section title="학력 · 교육">
          <Education
            history={resumeData.educationHistory}
            course={resumeData.educationCourse}
          />
        </Section>

        <Section title="자격증">
          <Certificates data={resumeData.certificates} />
        </Section>
      </Container>
    </ThemeProvider>
  );
}

export default App;
