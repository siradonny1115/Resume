import styled from '@emotion/styled';
import { Education as EducationType } from '../../types/resume';

const EducationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const EducationItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const EducationName = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`;

const EducationDetail = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondary};
`;

const EducationPeriod = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.tertiary};
`;

interface EducationProps {
  history: EducationType;
  course: EducationType;
}

export const Education = ({ history, course }: EducationProps) => {
  return (
    <EducationWrapper>
      <EducationItem>
        <EducationName>{history.school}</EducationName>
        <EducationDetail>
          {history.major} · {history.status}
        </EducationDetail>
      </EducationItem>
      <EducationItem>
        <EducationName>{course.name}</EducationName>
        <EducationPeriod>{course.period}</EducationPeriod>
        <EducationDetail>{course.status}</EducationDetail>
      </EducationItem>
    </EducationWrapper>
  );
};
