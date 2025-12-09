import { MainProject } from '../../../types/resume';

export const expertPlatformProject: MainProject = {
  name: '전문가 플랫폼 개발',
  company: '(주) 아임웹',
  period: '2023.12 ~ 2024.05',
  description:
    '리셀러 페이지를 전문가 플랫폼으로 전환. 회원가입부터 Front Office, Admin 개발',
  tasks: [
    '전문가 회원가입: React-hook-form + Zod 기반 유효성 검사 구현',
    '전문가 페이지 (IO): 메인/포트폴리오 상세/전문가 프로필/좋아요 페이지 전체 제작',
    '전문가 어드민 페이지 (BO): 문의/포트폴리오/회원/웹사이트 관리 페이지 개발',
  ],
  results: [
    {
      text: '전문가 거래액',
      highlight: '월 평균 거래액 7배 이상 증가',
    },
    { text: '신규 프리미엄 사이트 수', value: '목표 대비 70% 달성' },
  ],
  troubleShooting: [
    {
      problem:
        '전문가 포트폴리오 목록을 무한 스크롤로 구현했는데,\n스크롤을 빠르게 내리면 같은 API가 여러 번 호출되어 중복 데이터가 표시되는 문제가 있었습니다.',
      solution:
        'React Query의 useInfiniteQuery를 사용하여 데이터 페칭과 캐싱을 관리했습니다.\nisFetchingNextPage 상태를 체크하여 이미 다음 페이지를 로딩 중이면 추가 요청을 방지했습니다.\nIntersection Observer API로 마지막 아이템을 감지하여 정확한 시점에만 다음 페이지를 불러오도록 했습니다.',
      result:
        '빠른 스크롤 시 API가 중복 호출되어 같은 데이터가 여러 번 나타났지만, React Query와 Intersection Observer를 활용하여 중복 호출이 사라지고 부드러운 무한 스크롤이 구현되었습니다.',
    },
  ],
  images: [
    {
      src: '/images/projects/expert-service/expert-main-page.png',
      caption: '전문가 메인 페이지 (Front Office)',
    },
    {
      src: '/images/projects/expert-service/expert-portfolio-detail.png',
      caption: '포트폴리오 상세 페이지',
    },
    {
      src: '/images/projects/expert-service/expert-signup-step1.png',
      caption: '전문가 회원가입 - React-hook-form + Zod 유효성 검사',
    },
    {
      src: '/images/projects/expert-service/portfolio-create.png',
      caption: '포트폴리오 등록 (Admin)',
    },
    {
      src: '/images/projects/expert-service/expert-profile-edit.png',
      caption: '전문가 프로필 관리 (Admin)',
    },
    {
      src: '/images/projects/expert-service/expert-signup-email-verification.png',
      caption: '이메일 인증 플로우',
    },
  ],
  learnings: [
    'React-hook-form과 Zod를 활용한 복잡한 폼 유효성 검사',
    'React Query를 활용한 무한 스크롤 및 서버 상태 관리',
    'Storybook을 활용한 컴포넌트 문서화 및 팀 협업',
    '처음부터 끝까지 전체 서비스를 주도적으로 개발한 경험',
  ],
  link: 'https://imweb.me/expert',
};
