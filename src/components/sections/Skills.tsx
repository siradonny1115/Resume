import styled from '@emotion/styled';
import { Skills as SkillsType } from '../../types/resume';

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Tag = styled.span`
  padding: 8px 18px;
  background-color: ${({ theme }) => theme.colors.tagBackground};
  border: 1px solid ${({ theme }) => theme.colors.tagBorder};
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
`;

interface SkillsProps {
  data: SkillsType;
}

export const Skills = ({ data }: SkillsProps) => {
  return (
    <TagList>
      {data.skills.map((skill) => (
        <Tag key={skill}>{skill}</Tag>
      ))}
    </TagList>
  );
};
