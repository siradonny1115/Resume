import { OtherProject } from '../../../types/resume';

export const orderManagementProject: OtherProject = {
  name: '주문관리 시스템 개편',
  company: '(주) 아임웹',
  period: '2023.03 ~ 2023.10',
  description:
    'PHP/jQuery 기반 주문관리시스템을 React로 전환. React Query 기반 서버 상태 관리로 프론트엔드 현대화.',
  tasks: [
    '주문 목록 페이지 React 전환',
    '주문 상세 페이지 React 전환',
    '주문 상태 변경 기능 개발',
    'React Query 기반 서버 상태 관리',
  ],
  results: [
    { text: '코드 유지보수성', highlight: '80% 향상' },
    { text: '신규 기능 개발 속도', value: '2배 향상' },
  ],
  troubleShooting: [
    {
      problem:
        'PHP 템플릿과 jQuery로 작성된 주문관리시스템이 복잡하게 얽혀있어 버그 수정이나 기능 추가가 어려웠습니다.\n페이지 전체가 새로고침되어야 해서 주문 상태 변경 시 사용자 경험이 좋지 않았습니다.',
      solution:
        'PHP 코드를 분석하여 비즈니스 로직을 파악하고 React 컴포넌트로 재구현했습니다.\njQuery의 DOM 조작 코드를 React 상태 관리로 전환하여 선언적으로 작성했습니다.\nReact Query를 도입하여 주문 데이터를 효율적으로 캐싱하고 낙관적 업데이트를 구현했습니다.',
      result:
        'PHP와 jQuery가 섞여있어 코드 흐름을 파악하기 어려웠지만, React로 전환하고 현대적인 패턴을 적용하여 코드 유지보수성이 80% 향상되고 신규 기능 개발 속도가 2배 빨라졌습니다.',
    },
  ],
  learnings: [
    'PHP/jQuery → React 마이그레이션 방법론',
    '레거시 시스템 점진적 전환 전략',
    'React Query를 활용한 낙관적 업데이트',
  ],
};
