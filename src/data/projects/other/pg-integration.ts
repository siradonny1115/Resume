import { OtherProject } from '../../../types/resume';

export const pgIntegrationProject: OtherProject = {
  name: 'PG 연동 확장',
  company: '(주) 아임웹',
  period: '2025.02 ~ 2025.04',
  description:
    '토스페이/카카오페이 결제 연동 개발. Adapter 패턴으로 PG별 인터페이스 통합 및 총 2억 원 개발비 확보.',
  tasks: [
    '토스페이 결제 연동: API 통합 및 결제 플로우 구현',
    '카카오페이 결제 연동: API 통합 및 결제 플로우 구현',
    'PG사별 에러 핸들링 및 재시도 로직 구현',
    '결제 테스트 자동화 환경 구축',
  ],
  results: [
    { text: '토스페이 연동 개발비', highlight: '1억 원 확보' },
    { text: '카카오페이 연동 개발비', highlight: '1억 원 확보' },
    { text: '신규 결제 수단 이용률', value: '30% 증가' },
  ],
  troubleShooting: [
    {
      problem:
        '토스페이와 카카오페이 각각의 API 스펙이 달라서 공통 인터페이스로 추상화하는 것이 어려웠습니다.\n결제 실패 시 PG사별로 다른 에러 코드를 반환해서 일관된 에러 처리가 필요했습니다.',
      solution:
        'PG사별로 Adapter 패턴을 적용하여 공통 인터페이스로 추상화했습니다.\n각 PG사의 에러 코드를 매핑 테이블로 관리하여 일관된 에러 메시지를 표시했습니다.\n결제 실패 시 자동 재시도 로직을 구현하여 일시적 오류로 인한 실패를 줄였습니다.',
      result:
        'PG사마다 다른 코드로 작성되어 중복이 많았지만, Adapter 패턴으로 추상화하여 새로운 PG사를 추가하거나 수정할 때 일관된 방식으로 작업할 수 있었습니다.',
    },
  ],
  learnings: [
    'PG사 API 통합 및 결제 시스템 구현',
    'Adapter 패턴을 활용한 공통 인터페이스 설계',
    '결제 에러 핸들링 및 재시도 전략',
  ],
};
