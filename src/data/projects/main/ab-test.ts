import { MainProject } from '../../../types/resume';

export const abTestProject: MainProject = {
  name: '요금제 개편 A/B 테스트',
  company: '(주) 아임웹',
  period: '2025.01 ~ 2025.06',
  description:
    'A/B 테스트 기반 실험 환경 구축 및 주요 전환 지점 개발. 조건 변경에 유연하게 대응할 수 있는 구조로 설계.',
  tasks: [
    '요금제 페이지 개편: 무료 체험 14일 안내 애니메이션 UI 개발',
    '템플릿 페이지 개편: React 기반 모던 스택 전환',
    'A/B 테스트 그룹별 분기 개발: 요금 페이지, 결제 등록 흐름 분기',
    '정기 결제 해지 방어 모달 신규 개발',
    '첫 결제 고객 프로모션 기능 개발',
  ],
  results: [
    { text: '60일 내 결제 전환율', highlight: '약 35% 증가' },
    { text: '신규 구독 매출', highlight: '최소 20% 이상 증가' },
    { text: '전환 고객 추정 LTV', value: '2.6% 증가' },
  ],
  images: [
    {
      src: '/images/projects/pricing-ab-test/price-page.png',
      caption: '요금제 페이지 개편',
      link: 'https://imweb.me/price',
    },
    {
      src: '/images/projects/pricing-ab-test/theme-page.png',
      caption: '템플릿 페이지 개편 (Before)',
      link: 'https://imweb.me/theme',
    },
    {
      src: '/images/projects/pricing-ab-test/theme-page-2.png',
      caption: '템플릿 페이지 개편 (After)',
      link: 'https://imweb.me/theme',
    },
    {
      src: '/images/projects/pricing-ab-test/payment-page.png',
      caption: '결제 등록 흐름',
    },
    {
      src: '/images/projects/pricing-ab-test/credit-page.png',
      caption: '정기 결제 해지 방어 모달',
    },
    {
      src: '/images/projects/pricing-ab-test/credit-page-2.png',
      caption: '첫 결제 고객 프로모션',
    },
  ],
  troubleShooting: [
    {
      problem:
        'Google Optimize, Optimizely 같은 상용 A/B 테스트 도구를 검토했으나, 기존 레거시 PHP 시스템과의 통합이 어렵고 회원 데이터 기반 그룹 분류가 제한적이었습니다. 또한 PHP에서 방화벽 및 보안 검증 로직이 동작하고 있어, Next.js만으로 분리 배포할 수 없는 인프라 제약이 있었습니다.',
      solution:
        'PHP에서 file_get_contents()로 Next.js SSR 페이지를 호출하여 렌더링하는 하이브리드 구조를 채택했습니다.\n회원 식별자의 날짜 정보를 파싱하여 배포일(테스트: 2025-03-09, 운영: 2025-03-23) 이후 가입자를 실험 대상으로 분류했습니다.\n식별자의 마지막 문자가 홀수/짝수인지에 따라 A/B 그룹을 할당하고, Context API로 전역 상태 관리하여 모든 페이지에서 일관된 실험 경험을 제공했습니다. 비회원은 자동으로 실험 대상에 포함되도록 처리했습니다.',
      result:
        '상용 도구 없이 레거시 시스템 위에서 A/B 테스트를 구현하여 추가 비용 없이 실험 환경을 구축했습니다. PHP-Next.js 하이브리드 구조로 기존 보안 레이어를 유지하면서도 모던 프론트엔드 기술 스택을 적용할 수 있었고, 회원 데이터 기반 정교한 그룹 분류로 정확한 실험 데이터를 수집할 수 있었습니다.',
    },
    {
      problem:
        '요금제 페이지에서 뒤로가기 시 사용자가 선택한 요금제 정보가 사라지는 문제가 있었습니다. 여러 진입점(홈페이지, 템플릿 페이지, 직접 URL 접근 등)에서 유입되는 사용자마다 다른 초기 상태를 가지고 있어, 일관된 상태 관리 전략이 필요했습니다.',
      solution:
        '초기에는 세션 스토리지로 상태를 관리하려 했으나, 여러 진입점에 따라 세션 초기화 시점을 제어하기 복잡했습니다.\n대신 URL 쿼리 파라미터를 단일 진실 공급원(Single Source of Truth)으로 사용하는 방식으로 변경했습니다.\n이미 사이트가 생성된 경우, URL에서 사이트 식별 정보를 추출하여 API를 호출해 필요한 데이터를 페칭하도록 구현했습니다.\n브라우저 히스토리 API와 함께 동작하여 뒤로가기 시에도 URL 기반으로 자연스럽게 상태가 복원되도록 했습니다.',
      result:
        '세션 스토리지 기반 상태 관리보다 URL 기반 접근이 여러 진입점을 단순하게 처리할 수 있었고, 브라우저의 네이티브 히스토리 동작과 자연스럽게 통합되어 뒤로가기 시에도 사용자 경험이 일관되게 유지되었습니다.',
    },
  ],
  learnings: [
    'A/B 테스트 환경 구축 및 실험 데이터 분석 방법론 습득',
    '복잡한 분기 로직을 효과적으로 관리하는 아키텍처 설계 경험',
    '기획 변경에 유연하게 대응할 수 있는 확장 가능한 구조 설계',
    'React 프레임워크를 활용한 모던 프론트엔드 개발 경험',
  ],
  link: 'https://imweb.me/price',
};
