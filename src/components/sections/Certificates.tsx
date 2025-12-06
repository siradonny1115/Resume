import styled from '@emotion/styled';
import { Certificate } from '../../types/resume';

const CertificateList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CertificateItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CertificateName = styled.h4`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`;

const CertificateIssuer = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.tertiary};
`;

interface CertificatesProps {
  data: Certificate[];
}

export const Certificates = ({ data }: CertificatesProps) => {
  return (
    <CertificateList>
      {data.map((cert, index) => (
        <CertificateItem key={index}>
          <CertificateName>{cert.name}</CertificateName>
          <CertificateIssuer>{cert.issuer}</CertificateIssuer>
        </CertificateItem>
      ))}
    </CertificateList>
  );
};
