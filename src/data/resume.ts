import { ResumeData } from '../types/resume';

export const resumeData: ResumeData = {
  basicInfo: {
    name: '김상돈',
    title: '프론트엔드 개발자',
    contact: {
      email: 'gorist@naver.com',
      phone: '010-5104-3030',
      github: 'https://github.com/Sangdon1029',
    },
  },

  introduction:
    '저는 복잡한 결제 흐름 속에서 예외 케이스를 끝까지 추적하고, 안정적인 코드를 작성하는 데 집중하는 개발자입니다. 3년간 아임웹에서 PG 연동, 정기결제, 요금제 개편 등 매출에 직결되는 결제 시스템을 개발해왔습니다. 레거시 코드를 분석해 모던 스택으로 전환하는 과정에서, 단순히 기능을 옮기는 것이 아니라 유지보수 가능한 구조로 재설계하는 것을 중요하게 생각합니다. 명확한 기획이 없는 상황에서도 비즈니스 목적을 파악하고 주도적으로 실행하며, 요금제 개편을 통해 결제 전환율 35% 향상에 기여했습니다.',

  skills: {
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Emotion',
      'tailwindcss',
      'Storybook',
      'Git',
      'Github',
      'Jira',
      'Cypress',
    ],
  },

  career: {
    company: '(주) 아임웹',
    position: '프론트엔드 개발자',
    period: '2022.06 ~ 2025.11',
    duration: '3년 6개월',
    type: '정규직',
    responsibilities: [
      '결제 시스템 개발: PG 연동(토스페이, 카카오페이, 나이스페이 등), 정기결제, 간편결제 기능 구현',
      '요금제 개편 A/B 테스트: 실험 환경 구축 및 전환 지점 개발로 결제 전환율 35% 향상',
      'CRM 시스템 개발: 알림톡 캠페인 자동화, 쿠폰 관리 시스템 MFE 전환',
      '레거시 전환: PHP/jQuery 기반 시스템을 React/Next.js로 마이그레이션',
      'E2E 테스트 환경 구축: Cypress + Sorry-Cypress 기반 병렬 테스트 환경 자체 호스팅',
    ],
  },

  mainProjects: [
    {
      company: '(주) 아임웹',
      period: '2025.01 ~ 2025.06 (6개월)',
      description:
        '요금제 개편을 위한 A/B 테스트 기반 실험 환경 구축 및 주요 전환 지점 개발을 담당하였습니다. 기획자가 실험을 반복하거나 조건을 바꾸는 상황에서도 빠르게 대응할 수 있는 유연한 구조로 설계하였습니다.',
      tasks: [
        '요금제 페이지 개편: 무료 체험 14일 안내 애니메이션 UI 개발',
        '템플릿 페이지 개편: Clay 기반 모던 스택 전환',
        'A/B 테스트 그룹별 분기 개발: 요금 페이지, 결제 등록 흐름 분기',
        '정기 결제 해지 방어 모달 신규 개발',
        '첫 결제 고객 프로모션 기능 개발',
      ],
      results: [
        { text: '60일 내 결제 전환율', highlight: '약 35% 증가' },
        { text: '신규 구독 매출', highlight: '최소 20% 이상 증가' },
        { text: '전환 고객 추정 LTV', value: '2.6% 증가' },
      ],
    },
    {
      company: '(주) 아임웹',
      period: '2023.11 ~ 2024.11 (1년)',
      description:
        '기존 활성도가 낮았던 리셀러 페이지를 전문가 페이지로 전환하여 아임웹 신규 프리미엄 사이트 증가에 기여하였습니다. 회원가입부터 Front Office, Admin 개발까지 전 과정을 주도하였습니다.',
      tasks: [
        '전문가 회원가입: React-hook-form + Zod 기반 실시간 유효성 검사 구현',
        '전문가 페이지 (IO): 메인/포트폴리오 상세/전문가 프로필/좋아요 페이지 전체 제작',
        '전문가 어드민 페이지 (EBO): 문의/포트폴리오/회원/웹사이트 관리 페이지 개발',
        'Select, Toast 등 공통 컴포넌트 직접 제작',
      ],
      results: [
        {
          text: '전문가 거래액: 월 평균 158억 → 1,217억',
          highlight: '목표 대비 101% 달성',
        },
        { text: '신규 프리미엄 사이트 수', value: '목표 대비 70% 달성' },
      ],
      link: 'https://imweb.me/expert',
    },
    {
      company: '(주) 아임웹',
      period: '2024.11 ~ 2025.01 (3개월)',
      description:
        '"START YOUR BRAND NOW" 브랜드 캠페인 페이지 UI 개발 및 퍼블리싱을 주도하였습니다. 사용자 입력 정보를 바탕으로 사업자등록증 이미지를 생성하고 인스타그램 스토리에 공유할 수 있는 기능을 구현하였습니다.',
      tasks: [
        '브랜드 메시지 전달을 위한 인터랙션 및 애니메이션 구현',
        '사용자 입력 텍스트 + 3가지 이미지 합성을 위한 Canvas API 직접 렌더링 구현',
        '기존 html2canvas 라이브러리 성능 문제 → Canvas API 직접 렌더링으로 전환',
        '모듈화를 통한 유지보수 용이한 구조 도입',
      ],
      results: [
        {
          text: '사업자등록증 자동 발급 (목표 10,000건 → 실제 12,934건)',
          highlight: '목표 대비 129% 달성',
        },
        { text: '이미지 생성 시간', highlight: '10초 → 0.3초로 97% 단축' },
      ],
      link: 'https://imweb.me/event/brand_campaign',
    },
    {
      company: '(주) 아임웹',
      period: '2022.09 ~ 2023.01 (5개월)',
      description:
        '카드를 등록하여 복잡하던 기존 결제 프로세스를 간소화하고 사용자의 결제 경험을 향상시켰습니다. 아임웹 입사 후 첫 프로젝트로, 결제 도메인의 기초를 다졌습니다.',
      tasks: [
        'PG를 이용한 BillingKey 발급으로 카드 등록 기능',
        '일반결제/정기결제 기능 개발',
        'FO/BO 양쪽에서 결제 플로우 구현',
      ],
      results: [
        { text: '기존의 불필요하거나 복잡한 결제 프로세스 간소화' },
        { highlight: '연장률 10% 증가, 신규 고객 10% 증가' },
      ],
    },
  ],

  otherProjects: [
    {
      name: 'CRM 알림톡 캠페인 자동화',
      period: '2025.07 ~ 2025.11',
      description: '쿠폰-캠페인 연동으로 브랜드 온보딩 단계 축소',
    },
    {
      name: '어드민 쿠폰 페이지 개편',
      period: '2025.07 ~ 2025.09',
      description: 'PHP → React(MFE) 전환, 쿠폰 유형 4종 전체 개편',
    },
    {
      name: 'E2E 테스트 환경 구축',
      period: '2024.09 ~ 2024.10',
      description: 'Sorry-Cypress 도입으로 병렬 테스트 환경 자체 호스팅',
    },
    {
      name: '주문관리시스템 TF',
      period: '2023.03 ~ 2023.10',
      description: 'PHP/jQuery → React 전환 TF 참여',
    },
    {
      name: '토스페이/카카오페이 연동',
      period: '2025.02 ~ 2025.04',
      highlight: '각 1억 원 규모 개발비 확보 (총 2억 원)',
    },
    {
      name: 'PG 입력 간소화',
      period: '2024.09 ~ 2024.10',
      description: 'Chrome Extension 개발로 QA 효율 향상',
    },
    {
      name: '보안 키패드',
      period: '2022.11 ~ 2022.12',
      description: '스프라이트 기법으로 마우스 위치 해킹 방지',
    },
  ],

  contributions: [
    'PG 가입 테스트 Chrome 익스텐션 개발: 이니시스, 나이스페이, 이지페이, 토스페이먼츠, KCP, 카카오페이 등 테스트 입력 자동화',
    'FE 온보딩 문서 재정비: 신규 입사자 적응 지원, 아키텍처 논의 주도',
    '띠배너 MFE 구조 재구성: NEXT + PHP 환경에서 공통 사용 가능하도록 개선',
  ],

  personalProjects: [
    {
      name: 'BUTTON',
      period: '2022.10 ~ 2023.01',
      description:
        '향수에 대한 사람들의 인식을 바꾸기 위해서 이 사이트를 만들게 되었습니다.',
      url: 'https://button-sage.vercel.app/main',
    },
    {
      name: 'Bread-fit',
      period: '2022.10 ~ 2023.01',
      description:
        'SNS를 이용해서 좋아하는 빵에 대해서 공유하고 맛집을 추천하는 서비스 입니다.',
      url: 'https://bread-fit-react.vercel.app/',
      github: 'https://github.com/OhRaeKyu/bread-fit-react',
    },
  ],

  educationHistory: {
    school: '충북대학교',
    major: '바이오시스템공학과',
    status: '졸업',
  },

  educationCourse: {
    name: '멋쟁이 사자처럼 Front-end 1기',
    period: '2021.09 ~ 2022.02',
    status: '수료',
  },

  certificates: [
    {
      name: 'SQLD (SQL 개발자)',
      issuer: '한국데이터산업진흥원',
    },
  ],
};
