import styled from '@emotion/styled';
import { ReactNode } from 'react';

const SectionLayout = styled.section`
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 48px;
  padding: ${({ theme }) => theme.spacing.section} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-of-type {
    border-bottom: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.mobileGap};
    padding: 32px 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1.6;
  letter-spacing: -0.3px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 17px;
  }
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

interface SectionProps {
  title: string;
  children: ReactNode;
  id?: string;
}

export const Section = ({ title, children, id }: SectionProps) => {
  return (
    <SectionLayout id={id}>
      <SectionTitle>{title}</SectionTitle>
      <SectionContent>{children}</SectionContent>
    </SectionLayout>
  );
};
