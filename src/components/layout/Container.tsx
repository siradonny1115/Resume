import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 60px 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 40px 16px;
  }
`;
