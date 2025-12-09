import { OtherProject } from '../../../types/resume';

export const pgQaAutomationProject: OtherProject = {
  name: 'PG QA 자동화',
  company: '(주) 아임웹',
  period: '2024.09 ~ 2024.10',
  description:
    'Chrome Extension으로 PG 가입 테스트 자동화. 6개 PG사 지원으로 테스트 시간 87% 단축.',
  tasks: [
    'Chrome Extension Manifest V3 기반 개발',
    'PG사별 가입 폼 자동 입력 기능 구현',
    '테스트 계정 정보 안전한 저장 및 관리',
    '이니시스, 나이스페이, 이지페이, 토스페이먼츠, KCP, 카카오페이 등 6개 PG사 지원',
  ],
  results: [
    { text: 'PG 가입 테스트 시간', highlight: '15분 → 2분으로 87% 단축' },
    { text: 'QA 팀 업무 효율', value: '60% 향상' },
  ],
  troubleShooting: [
    {
      problem:
        'PG 가입 테스트를 위해 매번 사업자번호, 대표자명, 주소 등 수십 개의 입력 필드를 수동으로 채워야 했습니다.\n테스트마다 15분 이상 소요되어 QA 팀의 업무 효율이 떨어졌습니다.',
      solution:
        'Chrome Extension을 개발하여 PG사별 가입 폼을 자동으로 인식하고 테스트 데이터를 채워주도록 했습니다.\nContent Script로 DOM을 분석하여 입력 필드를 찾고, 미리 저장된 테스트 정보를 자동으로 입력했습니다.\nChrome Storage API를 사용하여 테스트 계정 정보를 안전하게 저장하고 관리했습니다.',
      result:
        '매번 수동으로 입력 필드를 채워야 해서 시간이 오래 걸렸지만, Chrome Extension으로 자동화하여 PG 가입 테스트 시간이 87% 단축되고 QA 팀 업무 효율이 60% 향상되었습니다.',
    },
  ],
  learnings: [
    'Chrome Extension 개발 및 배포',
    'DOM 조작 및 자동화 기술',
    '개발 도구를 만들어 팀 생산성 향상',
  ],
};
