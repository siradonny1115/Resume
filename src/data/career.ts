import { Career } from '../types/resume';

export const career: Career = {
  company: '(주) 아임웹',
  position: '프론트엔드 개발자',
  period: '2022.06 ~ 2025.11',
  duration: '3년 6개월',
  type: '정규직',
  responsibilities: [
    '결제 시스템 개발: PG 연동(토스페이, 카카오페이, 나이스페이 등), 정기결제, 간편결제 기능 구현',
    '요금제 개편 A/B 테스트: 실험 환경 구축 및 전환 지점 개발로 결제 전환율 35% 향상',
    '전문가 플랫폼 개발: 리셀러 페이지를 전문가 플랫폼으로 전환, Front Office 및 Admin 전체 개발',
    'CRM 시스템 개발: 알림톡 캠페인 자동화, 쿠폰 관리 시스템 MFE 전환',
    '레거시 전환: PHP/jQuery 기반 시스템을 React/Next.js로 마이그레이션',
    'E2E 테스트 환경 구축: Cypress + Sorry-Cypress 기반 병렬 테스트 환경 자체 호스팅',
  ],
};
