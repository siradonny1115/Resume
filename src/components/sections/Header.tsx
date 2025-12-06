import styled from '@emotion/styled';
import { BasicInfo } from '../../types/resume';

const HeaderWrapper = styled.header`
  padding: 60px 0 48px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 40px 0 32px;
  }
`;

const Name = styled.h1`
  font-size: 56px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 12px;
  letter-spacing: -0.5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 40px;
  }
`;

const Title = styled.p`
  font-size: 22px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 18px;
    margin-bottom: 24px;
  }
`;

const ContactList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 10px;
    font-size: 14px;
  }
`;

const ContactItem = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child)::after {
    content: '|';
    margin-left: 20px;
    color: ${({ theme }) => theme.colors.border};
    font-weight: 300;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      display: none;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.highlight};
    transition: all 0.2s;
    font-weight: 500;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: underline;
    }
  }
`;

interface HeaderProps {
  data: BasicInfo;
}

export const Header = ({ data }: HeaderProps) => {
  return (
    <HeaderWrapper>
      <Name>{data.name}</Name>
      <Title>{data.title}</Title>
      <ContactList>
        <ContactItem>{data.contact.email}</ContactItem>
        <ContactItem>{data.contact.phone}</ContactItem>
        <ContactItem>
          <a href={data.contact.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </ContactItem>
      </ContactList>
    </HeaderWrapper>
  );
};
