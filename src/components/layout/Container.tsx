import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 100px 20px 60px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 80px 16px 40px;
  }
`;
