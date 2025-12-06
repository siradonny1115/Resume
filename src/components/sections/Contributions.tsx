import styled from '@emotion/styled';

const ContributionList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ContributionItem = styled.li`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.secondary};
  padding-left: 16px;
  position: relative;
  line-height: 1.6;

  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.highlight};
    font-weight: 600;
  }
`;

interface ContributionsProps {
  data: string[];
}

export const Contributions = ({ data }: ContributionsProps) => {
  return (
    <ContributionList>
      {data.map((item, index) => (
        <ContributionItem key={index}>{item}</ContributionItem>
      ))}
    </ContributionList>
  );
};
