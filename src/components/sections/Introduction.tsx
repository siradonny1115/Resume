import styled from '@emotion/styled';

const IntroText = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.secondary};
  white-space: pre-wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 15px;
  }
`;

interface IntroductionProps {
  text: string;
}

export const Introduction = ({ text }: IntroductionProps) => {
  return <IntroText>{text}</IntroText>;
};
