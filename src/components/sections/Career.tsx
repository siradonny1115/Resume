import styled from '@emotion/styled';
import { Career as CareerType } from '../../types/resume';

const CareerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CompanyName = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const Position = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secondary};
`;

const PeriodInfo = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.tertiary};
`;

const ResponsibilityList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`;

const ResponsibilityItem = styled.li`
  font-size: 15px;
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

interface CareerProps {
  data: CareerType;
}

export const Career = ({ data }: CareerProps) => {
  return (
    <CareerWrapper>
      <CompanyInfo>
        <CompanyName>{data.company}</CompanyName>
        <Position>
          {data.position} · {data.type}
        </Position>
        <PeriodInfo>
          {data.period} · {data.duration}
        </PeriodInfo>
      </CompanyInfo>
      <ResponsibilityList>
        {data.responsibilities.map((item, index) => (
          <ResponsibilityItem key={index}>{item}</ResponsibilityItem>
        ))}
      </ResponsibilityList>
    </CareerWrapper>
  );
};
