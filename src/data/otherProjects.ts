import { OtherProject } from '../types/resume';

export const otherProjects: OtherProject[] = [
  {
    name: 'CRM 그룹템플릿 개발',
    company: '(주) 아임웹',
    period: '2025.07 ~ 2025.11',
    description:
      'CRM 알림톡 캠페인에 그룹템플릿 기능 추가. 실시간 미리보기 및 변수 입력 UI 개선으로 캠페인 생성 시간 단축.',
    tasks: [
      '그룹템플릿 시스템 추가: 기본 제공 템플릿 선택 시 즉시 사용 가능하도록 구현',
      '실시간 미리보기: hover 시 템플릿 미리보기, 변수 입력 시 실시간 반영',
      '변수 입력 UI 개선: 데이터 연결 + 대체 텍스트 입력을 아코디언 형태로 재설계',
      '레거시 변수 데이터 정규화: 기존 string[] 형식을 CustomVariableRecord로 변환',
      '캠페인 생성 플로우 버그 수정: 템플릿 선택 후 변수 초기화 문제 해결',
    ],
    results: [
      { text: '캠페인 생성 시간', highlight: '평균 10분 → 3분으로 70% 단축' },
      { text: '템플릿 선택 오류', highlight: '주 5건 → 0건으로 감소' },
      { text: '변수 설정 UX', value: '사용자 만족도 85% 달성' },
    ],
    troubleShooting: [
      {
        problem:
          '기존에는 커스텀 템플릿만 지원했는데, 그룹템플릿(기본 제공 템플릿)을 추가해야 했습니다. 하지만 그룹템플릿의 변수 데이터는 레거시 형식인 string[] (예: ["고객명", "쿠폰명"])으로 저장되어 있었고, 커스텀 템플릿은 CustomVariableRecord (예: { "고객명": { systemVariableKey: "customerName", value: "홍길동" } })로 저장되어 있었습니다. 두 형식을 통합하지 않으면 미리보기와 변수 입력 UI가 제대로 동작하지 않았습니다.',
        solution:
          'normalizeGroupTemplateVariables 함수를 만들어 레거시 string[] 형식을 CustomVariableRecord로 변환했습니다. 그룹템플릿의 templateContent: ["고객명", "쿠폰명"]을 받아서 VARIABLE_MAP을 참조하여 { "고객명": { systemVariableKey: "customerName", value: "" }, "쿠폰명": { systemVariableKey: "couponName", value: "" } } 형태로 정규화했습니다. 이렇게 하면 미리보기 컴포넌트에서 두 템플릿 타입을 동일하게 처리할 수 있습니다.',
        result:
          '그룹템플릿과 커스텀 템플릿을 구분 없이 동일한 미리보기 UI로 표시할 수 있게 되었습니다. 레거시 데이터 마이그레이션 없이도 기존 데이터를 활용할 수 있어 개발 기간이 2주 단축되었습니다.',
      },
      {
        problem:
          '사용자가 템플릿을 hover할 때 미리보기를 보여주고, 템플릿을 선택하면 해당 템플릿의 내용으로 폼이 채워져야 했습니다. 하지만 hover 상태와 선택 상태를 동시에 관리하면서 React Query로 템플릿 데이터를 조회하니 상태 동기화가 복잡했습니다. 특히 hover 중에 다른 템플릿을 선택하면 미리보기가 잘못된 템플릿을 표시하는 버그가 발생했습니다.',
        solution:
          'Jotai의 hoveredTemplateAtom으로 hover 상태를 전역 관리하고, Preview 컴포넌트에서 우선순위 로직을 구현했습니다. hover된 템플릿이 있으면 hoveredTemplateData를 먼저 표시하고, 없으면 선택된 templateCode의 데이터를 표시하도록 useMemo로 조건부 렌더링했습니다. React Query의 enabled 옵션으로 필요한 데이터만 선택적으로 조회하여 불필요한 API 호출을 방지했습니다.',
        result:
          'hover 시 즉시 미리보기가 표시되고, 템플릿 선택 시 정확한 데이터가 반영됩니다. 상태 동기화 버그가 완전히 해결되었고, API 호출 횟수가 50% 감소하여 페이지 반응 속도가 개선되었습니다.',
      },
      {
        problem:
          '기존 변수 입력 UI는 모든 변수가 한 번에 펼쳐져 있어서 변수가 5개 이상일 때 스크롤이 길어지고 어떤 변수를 수정 중인지 파악하기 어려웠습니다. 또한 "데이터 연결"과 "대체 텍스트" 입력 필드가 분리되어 있지 않아 사용자가 혼란스러워했습니다.',
        solution:
          'VariableForm 컴포넌트를 아코디언 형태로 재설계했습니다. 기본 상태(isOpen: false)에서는 변수명과 설정된 값만 한 줄로 표시하고, 클릭하면 펼쳐져서 "데이터 연결" Select와 "대체 텍스트" Textarea가 구분되어 나타나도록 했습니다. VariableTextIcon으로 설정/미설정 상태를 시각적으로 표현하고, 에러가 있으면 빨간색으로 강조했습니다.',
        result:
          '변수가 10개 이상 있어도 화면이 깔끔하게 유지되고, 사용자는 수정하려는 변수만 펼쳐서 집중할 수 있게 되었습니다. 변수 설정 오류율이 주 5건 → 0건으로 감소했습니다.',
      },
    ],
    learnings: [
      '레거시 데이터 정규화 패턴: string[]을 CustomVariableRecord로 변환하여 타입 통합',
      'Jotai atom을 활용한 hover 상태 관리와 React Query 데이터 우선순위 처리',
      '아코디언 UI 패턴으로 복잡한 폼 입력 경험 개선',
      'useMemo를 활용한 조건부 렌더링 최적화 및 불필요한 리렌더링 방지',
    ],
  },
  {
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
          '❗ 문제 배경\n토스페이와 카카오페이 각각의 API 스펙이 달라서 공통 인터페이스로 추상화하는 것이 어려웠습니다.\n결제 실패 시 PG사별로 다른 에러 코드를 반환해서 일관된 에러 처리가 필요했습니다.',
        solution:
          '🔧 해결 방법\nPG사별로 Adapter 패턴을 적용하여 공통 인터페이스로 추상화했습니다.\n각 PG사의 에러 코드를 매핑 테이블로 관리하여 일관된 에러 메시지를 표시했습니다.\n결제 실패 시 자동 재시도 로직을 구현하여 일시적 오류로 인한 실패를 줄였습니다.',
        result:
          '👍 이전 코드는\nPG사마다 다른 코드로 작성되어 중복이 많았습니다.\n\n하지만 Adapter 패턴으로 추상화하니까\n새로운 PG사를 추가하거나 수정할 때 일관된 방식으로 작업할 수 있었습니다.',
      },
    ],
    learnings: [
      'PG사 API 통합 및 결제 시스템 구현',
      'Adapter 패턴을 활용한 공통 인터페이스 설계',
      '결제 에러 핸들링 및 재시도 전략',
    ],
  },
  {
    name: 'E2E 테스트 환경 구축',
    company: '(주) 아임웹',
    period: '2024.09 ~ 2024.10',
    description:
      'Cypress + Sorry-Cypress 기반 병렬 E2E 테스트 환경 자체 호스팅. 테스트 시간 72% 단축 및 비용 절감.',
    tasks: [
      'Cypress E2E 테스트 환경 초기 구축',
      'Sorry-Cypress 서버 구축 및 Docker 컨테이너화',
      '병렬 테스트 실행 환경 구성 (최대 5개 동시 실행)',
      'Github Actions CI/CD 파이프라인 통합',
    ],
    results: [
      { text: '테스트 실행 시간', highlight: '25분 → 7분으로 72% 단축' },
      { text: '월간 Cypress Cloud 비용', value: '$99 → $0 (100% 절감)' },
    ],
    troubleShooting: [
      {
        problem:
          '❗ 문제 배경\nCypress Cloud를 사용하여 E2E 테스트를 실행했는데, 테스트 케이스가 증가하면서 월 $99의 비용이 발생했습니다.\n또한 테스트를 순차적으로 실행해야 해서 25분 이상 소요되었습니다.',
        solution:
          '🔧 해결 방법\nSorry-Cypress 오픈소스를 도입하여 자체 호스팅 환경을 구축했습니다.\nDocker Compose로 Sorry-Cypress 서버, MongoDB, S3-compatible 스토리지를 구성했습니다.\nGithub Actions에서 5개의 병렬 작업으로 테스트를 분산 실행하도록 설정했습니다.',
        result:
          '👍 이전 코드는\nCypress Cloud에 의존하여 비용이 발생하고 병렬화 한계가 있었습니다.\n\n하지만 Sorry-Cypress로 자체 호스팅을 하니까\n월 $99 비용을 절감하고 테스트 시간을 72% 단축했습니다.',
      },
    ],
    learnings: [
      'E2E 테스트 자동화 환경 구축 경험',
      'Docker를 활용한 서버 인프라 구성',
      'CI/CD 파이프라인 최적화 방법론',
    ],
  },
  {
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
          '❗ 문제 배경\nPG 가입 테스트를 위해 매번 사업자번호, 대표자명, 주소 등 수십 개의 입력 필드를 수동으로 채워야 했습니다.\n테스트마다 15분 이상 소요되어 QA 팀의 업무 효율이 떨어졌습니다.',
        solution:
          '🔧 해결 방법\nChrome Extension을 개발하여 PG사별 가입 폼을 자동으로 인식하고 테스트 데이터를 채워주도록 했습니다.\nContent Script로 DOM을 분석하여 입력 필드를 찾고, 미리 저장된 테스트 정보를 자동으로 입력했습니다.\nChrome Storage API를 사용하여 테스트 계정 정보를 안전하게 저장하고 관리했습니다.',
        result:
          '👍 이전 코드는\n매번 수동으로 입력 필드를 채워야 해서 시간이 오래 걸렸습니다.\n\n하지만 Chrome Extension으로 자동화하니까\nPG 가입 테스트 시간이 87% 단축되고 QA 팀 업무 효율이 60% 향상되었습니다.',
      },
    ],
    learnings: [
      'Chrome Extension 개발 및 배포',
      'DOM 조작 및 자동화 기술',
      '개발 도구를 만들어 팀 생산성 향상',
    ],
  },
  {
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
          '❗ 문제 배경\nPHP 템플릿과 jQuery로 작성된 주문관리시스템이 복잡하게 얽혀있어 버그 수정이나 기능 추가가 어려웠습니다.\n페이지 전체가 새로고침되어야 해서 주문 상태 변경 시 사용자 경험이 좋지 않았습니다.',
        solution:
          '🔧 해결 방법\nPHP 코드를 분석하여 비즈니스 로직을 파악하고 React 컴포넌트로 재구현했습니다.\njQuery의 DOM 조작 코드를 React 상태 관리로 전환하여 선언적으로 작성했습니다.\nReact Query를 도입하여 주문 데이터를 효율적으로 캐싱하고 낙관적 업데이트를 구현했습니다.',
        result:
          '👍 이전 코드는\nPHP와 jQuery가 섞여있어 코드 흐름을 파악하기 어려웠습니다.\n\n하지만 React로 전환하고 현대적인 패턴을 적용하니까\n코드 유지보수성이 80% 향상되고 신규 기능 개발 속도가 2배 빨라졌습니다.',
      },
    ],
    learnings: [
      'PHP/jQuery → React 마이그레이션 방법론',
      '레거시 시스템 점진적 전환 전략',
      'React Query를 활용한 낙관적 업데이트',
    ],
  },
  {
    name: '보안 키패드 구현',
    company: '(주) 아임웹',
    period: '2022.11 ~ 2022.12',
    description:
      '스프라이트 기법 기반 보안 키패드 구현. 랜덤 배치 및 암호화로 마우스 위치 해킹 방지.',
    tasks: [
      '스프라이트 기법을 활용한 보안 키패드 UI 구현',
      '매번 랜덤하게 배치되는 키패드 레이아웃',
      '마우스 클릭 위치 암호화 처리',
      '모바일 터치 이벤트 지원',
    ],
    results: [
      { text: '보안 키패드 도입으로', highlight: '마우스 위치 해킹 방지' },
      { text: '카드 정보 유출 시도', value: '0건 유지' },
    ],
    troubleShooting: [
      {
        problem:
          '❗ 문제 배경\n일반 input 필드로 카드 정보를 입력받으면 마우스 위치를 추적하여 정보를 탈취할 수 있는 보안 취약점이 있었습니다.\n또한 키로거로 키보드 입력을 가로챌 수 있는 위험도 있었습니다.',
        solution:
          '🔧 해결 방법\n스프라이트 이미지로 숫자 키패드를 구현하여 실제 텍스트가 DOM에 노출되지 않도록 했습니다.\n키패드 버튼 위치를 매번 랜덤하게 배치하여 마우스 위치로 입력 값을 유추할 수 없게 했습니다.\n클릭 이벤트를 암호화하여 서버로 전송하도록 구현했습니다.',
        result:
          '👍 이전 코드는\n일반 input 필드를 사용해서 보안에 취약했습니다.\n\n하지만 스프라이트 기반 보안 키패드를 구현하니까\n마우스 위치 해킹과 키로거 공격을 모두 방어할 수 있었습니다.',
      },
    ],
    learnings: [
      '프론트엔드 보안 기술 및 취약점 이해',
      '스프라이트 기법을 활용한 UI 구현',
      '암호화 및 보안 처리 방법',
    ],
  },
];
