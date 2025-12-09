import { MainProject } from '../types/resume';

export const mainProjects: MainProject[] = [
  {
    name: '쿠폰 페이지 MFE 전환',
    company: '(주) 아임웹',
    period: '2025.07 ~ 2025.09',
    description:
      'PHP 레거시 쿠폰 페이지(21,116줄)를 React MFE로 전환. 4가지 쿠폰 유형을 Feature-Sliced Design으로 재설계.',
    tasks: [
      'PHP 레거시 분석: 21,116줄의 PHP 코드를 분석하여 핵심 비즈니스 로직 추출',
      '4가지 쿠폰 유형 재구현: 다운로드/자동발급/지정발행/코드생성 쿠폰 유형의 독립적인 스키마 설계',
      'MFE 아키텍처 적용: Vite 기반 독립 배포 가능한 마이크로 프론트엔드 구조',
      '복잡한 폼 관리: React-hook-form + Zod로 다단계 쿠폰 생성 플로우 구현',
    ],
    results: [
      { text: '페이지 로딩 속도', highlight: '1.5초 → 0.5초로 66% 개선' },
      { text: '타입 안정성', highlight: 'TypeScript + Zod 스키마로 런타임 에러 감소' },
    ],
    troubleShooting: [
      {
        problem:
          '각 쿠폰 유형(다운로드/자동발급/지정발행/코드생성)마다 다른 발행 대상, 수량 제한, 혜택 설정 규칙이 존재했습니다. 예를 들어 자동발급 쿠폰은 "첫 회원 가입", "첫 주문 완료", "쇼핑 등급 변경", "생일" 등 4가지 트리거를 지원하며, 각각 다른 입력 필드와 검증 로직이 필요했습니다.',
        solution:
          'Zod의 discriminatedUnion을 활용하여 각 쿠폰 유형별로 독립적인 스키마를 정의했습니다(down.schema.ts, auto.schema.ts, create.schema.ts, targeted.schema.ts). 예를 들어 downCouponDefaultCouponTargetSchema는 전체 회원/특정 그룹/특정 회원 대상을 discriminated union으로 처리하여 타입 안정성을 확보했습니다. SwitchCase 컴포넌트로 쿠폰 타입에 따라 동적으로 발행대상/쿠폰수량/숨김처리 UI를 렌더링하여 코드 중복을 제거했습니다.',
        result:
          '4가지 쿠폰 유형과 다양한 조건에 따른 144개의 비즈니스 규칙을 안전하게 처리할 수 있게 되었습니다. 새로운 쿠폰 유형 추가 시 기존 코드 수정 없이 schema 파일만 추가할 수 있도록 확장성을 높였습니다.',
      },
      {
        problem:
          '쿠폰 생성 폼은 기본설정 → 혜택설정 → 운영설정 → 알림설정의 4단계로 구성되며, 각 단계는 10개 이상의 중첩된 입력 필드를 포함했습니다. 예를 들어 혜택설정에서는 금액할인/비율할인/배송비무료/고정가할인 중 선택에 따라 최소주문금액, 최대할인금액, 중복할인, 쿠폰적용범위 등의 조건부 필드가 동적으로 나타납니다.',
        solution:
          'React-hook-form의 중첩 객체 구조와 Zod 스키마를 연동하여 복잡한 폼 상태를 관리했습니다. benefitSetting.value에 따라 benefitSetting.fixedPriceDiscount.couponCoverage 등의 깊은 중첩 필드를 자동으로 검증하도록 구현했습니다. Provider 패턴(ProductsProvider, NotificationProvider)으로 각 단계의 상태를 격리하여 불필요한 리렌더링을 방지했습니다.',
        result:
          '4단계 40개 이상의 중첩 필드를 타입 안전하게 관리하면서도 폼 상태 업데이트 성능이 60% 개선되었습니다. 조건부 필드 검증 로직이 명확해져 QA 피드백 사이클이 3일 → 1일로 단축되었습니다.',
      },
      {
        problem:
          'PHP 기반 쿠폰 목록 페이지는 페이지네이션으로 50개씩 표시했지만, 페이지 이동이나 삭제/상태 변경 시마다 전체 페이지가 새로고침되어 UX가 좋지 않았습니다. 특히 대량 작업(여러 쿠폰 선택 후 삭제/상태 변경) 시 매번 서버 왕복이 발생하여 작업이 느렸습니다.',
        solution:
          '@tanstack/react-table로 SPA 방식의 테이블을 구현하여 페이지 새로고침 없이 즉각적인 UI 반영이 가능하도록 했습니다. Zustand 스토어로 rowSelection, counts 등의 전역 상태를 관리하고, React Query로 서버 상태와 동기화했습니다. 대량 작업 시 낙관적 업데이트(Optimistic Update)를 적용하여 로컬 상태를 먼저 업데이트하고, 서버 응답을 기다리지 않고 즉시 UI에 반영했습니다.',
        result:
          '페이지 이동 시 로딩 시간이 3초 → 0.3초로 90% 개선되었고, 대량 삭제/상태 변경 작업 시 UI 블로킹 없이 실시간으로 진행 상황을 표시할 수 있게 되었습니다. 사용자는 작업 완료를 기다리지 않고 다른 작업을 바로 진행할 수 있게 되었습니다.',
      },
    ],
    learnings: [
      'React-hook-form + Zod를 활용한 복잡한 다단계 폼 상태 관리 패턴',
      '21,116줄 PHP 레거시를 React로 전환하는 체계적인 마이그레이션 전략',
      'Feature-Sliced Design을 적용한 대규모 프론트엔드 아키텍처 설계',
      '@tanstack/react-table의 가상화와 Zustand를 결합한 고성능 테이블 구현',
      'Discriminated Union을 활용한 타입 안전한 다형성 데이터 모델링',
    ],
    images: [
      {
        src: '/images/projects/coupon/whole-screenshot.png',
        caption: '쿠폰 목록 페이지 전체',
      },
      {
        src: '/images/projects/coupon/whole-screenshot-2.png',
        caption: '쿠폰 목록 페이지 상세',
      },
      {
        src: '/images/projects/coupon/empty.png',
        caption: '쿠폰 목록 빈 상태',
      },
      {
        src: '/images/projects/coupon/create-coupon-type-select-modal.png',
        caption: '쿠폰 유형 선택 모달',
      },
      {
        src: '/images/projects/coupon/type-1.png',
        caption: '다운로드 쿠폰 생성',
      },
      {
        src: '/images/projects/coupon/type-2.png',
        caption: '자동발급 쿠폰 생성',
      },
      {
        src: '/images/projects/coupon/type-3.png',
        caption: '지정발행 쿠폰 생성',
      },
      {
        src: '/images/projects/coupon/type-4.png',
        caption: '코드생성 쿠폰 생성',
      },
      {
        src: '/images/projects/coupon/benefit-section.png',
        caption: '혜택 설정 섹션',
      },
      {
        src: '/images/projects/coupon/validate.png',
        caption: '폼 유효성 검사',
      },
      {
        src: '/images/projects/coupon/charge-modal.png',
        caption: '쿠폰 충전 모달',
      },
    ],
  },
  {
    name: '요금제 개편 A/B 테스트',
    company: '(주) 아임웹',
    period: '2025.01 ~ 2025.06',
    description:
      'A/B 테스트 기반 실험 환경 구축 및 주요 전환 지점 개발. 조건 변경에 유연하게 대응할 수 있는 구조로 설계.',
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
    images: [
      {
        src: '/images/projects/pricing-ab-test/price-page.png',
        caption: '요금제 페이지 개편',
      },
      {
        src: '/images/projects/pricing-ab-test/theme-page.png',
        caption: '템플릿 페이지 개편 (Before)',
      },
      {
        src: '/images/projects/pricing-ab-test/theme-page-2.png',
        caption: '템플릿 페이지 개편 (After)',
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
        problem: '❗ 문제 배경\nA/B 테스트를 진행하기 위해 회원 가입 시점을 기준으로 그룹을 분류해야 했는데, memberCode에서 시간 정보를 추출하는 로직이 복잡했습니다.\n또한 테스트 서버와 운영 서버의 배포 시점이 달라서 각각 다른 기준일을 적용해야 했습니다.',
        solution:
          '🔧 해결 방법\n배포일(테스트: 2025-03-09, 운영: 2025-03-23)을 기준으로 memberCode에서 가입일을 추출했습니다.\n가입일이 배포일보다 이후면 실험 대상으로 분류하고, memberCode의 짝수/홀수로 A/B 그룹을 할당했습니다.\nContext API로 전역 상태 관리하여 모든 페이지에서 일관된 실험 경험을 제공했고, 비회원은 자동으로 실험 대상에 포함되도록 처리했습니다.',
        result: '👍 이전 코드는\n테스트와 운영 서버의 배포일을 분리하지 못해 실험 그룹이 섞이는 문제가 있었습니다.\n\n하지만 배포일 기준으로 그룹을 나누고 Context API로 관리하니까\n회원/비회원 모두 올바른 A/B 그룹에 할당되어 정확한 실험 데이터를 수집할 수 있었습니다.',
      },
      {
        problem: '❗ 문제 배경\n요금제 페이지에서 뒤로가기 버튼을 클릭하면 쿼리 파라미터가 초기화되는 문제가 있었습니다.\n사용자가 선택한 요금제 정보(version, period 등)가 사라져서 다시 선택해야 하는 불편함이 있었습니다.',
        solution:
          '🔧 해결 방법\n세션 스토리지를 활용하여 요금제 선택 정보를 저장했습니다.\n페이지 이동 시 필요한 쿼리 파라미터는 URL에 유지하면서, 세션 스토리지에도 동시에 저장했습니다.\n뒤로가기 시 세션 스토리지에서 정보를 복원하여 사용자가 선택한 내용을 그대로 유지했습니다.',
        result: '👍 이전 코드는\nURL 쿼리만으로 상태를 관리해서 뒤로가기 시 정보가 사라졌습니다.\n\n하지만 세션 스토리지를 추가로 활용하니까\n사용자가 뒤로가기를 해도 선택했던 요금제 정보가 그대로 유지되어 자연스러운 흐름을 제공할 수 있었습니다.',
      },
      {
        problem: '❗ 문제 배경\n14일 무료 체험을 제공하는 A 케이스와 즉시 결제하는 B 케이스의 결제일 계산 로직이 달라서 복잡했습니다.\n또한 프로모션 코드를 적용했을 때 기간이 추가되는 경우도 고려해야 했습니다.',
        solution:
          '🔧 해결 방법\nA 케이스는 사이트 생성 가능 여부를 먼저 확인한 후, 무료 체험 가능하면 현재일 +14일, 불가능하면 +period(개월)로 계산했습니다.\nB 케이스는 항상 현재일 +period(개월)로 계산했습니다.\nluxon DateTime 라이브러리를 사용하여 모든 날짜 연산을 일관되게 처리하고, 프로모션 코드의 추가 기간도 동일한 방식으로 더했습니다.',
        result: '👍 이전 코드는\n각 케이스마다 날짜 계산 로직이 분산되어 있어 유지보수가 어려웠습니다.\n\n하지만 luxon을 활용해 날짜 연산을 통일하니까\nA/B 테스트 그룹과 프로모션 적용 여부에 관계없이 정확한 결제 예정일을 표시할 수 있었습니다.',
      },
      {
        problem: '❗ 문제 배경\n템플릿 페이지에서 사이트 생성 시 선택한 요금제 정보를 다음 페이지로 전달해야 했는데,\n여러 쿼리 파라미터(version, period, siteName, siteUrl, templateIdx)를 관리하는 것이 복잡했습니다.',
        solution:
          '🔧 해결 방법\nPaymentDetailInfoContext로 결제 상세 정보를 전역으로 관리했습니다.\n페이지 진입 시 쿼리 파라미터를 읽어서 Context에 저장하고, 필요한 컴포넌트에서 useContext로 꺼내 사용했습니다.\n사이트 생성 완료 후에는 세션을 초기화하여 다음 사용을 위해 준비했습니다.',
        result: '👍 이전 코드는\n여러 컴포넌트에서 쿼리 파라미터를 직접 읽어서 props drilling이 심했습니다.\n\n하지만 Context API로 전역 상태 관리를 하니까\n코드 중복이 줄고 결제 정보를 일관되게 관리할 수 있었습니다.',
      },
    ],
    learnings: [
      'A/B 테스트 환경 구축 및 실험 데이터 분석 방법론 습득',
      '복잡한 분기 로직을 효과적으로 관리하는 아키텍처 설계 경험',
      '기획 변경에 유연하게 대응할 수 있는 확장 가능한 구조 설계',
      'Clay 프레임워크를 활용한 모던 프론트엔드 개발 경험',
    ],
  },
  {
    name: '전문가 플랫폼 개발',
    company: '(주) 아임웹',
    period: '2023.11 ~ 2024.11',
    description:
      '리셀러 페이지를 전문가 플랫폼으로 전환. 회원가입부터 Front Office, Admin 개발',
    tasks: [
      '전문가 회원가입: React-hook-form + Zod 기반 유효성 검사 구현',
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
    troubleShooting: [
      {
        problem:
          '❗ 문제 배경\n전문가 회원가입 시 React-hook-form과 Zod로 유효성 검사를 구현했는데,\n서버 에러가 발생하면 어떤 필드에서 문제가 생겼는지 사용자가 알 수 없었습니다.',
        solution:
          '🔧 해결 방법\n서버에서 반환하는 에러 응답을 파싱하여 해당 필드의 에러 메시지로 매핑했습니다.\nsetError() 메서드를 사용하여 서버 에러를 React-hook-form의 필드 에러로 변환했습니다.\n각 필드마다 에러 메시지를 표시하여 사용자가 어떤 부분을 수정해야 하는지 명확하게 안내했습니다.',
        result:
          '👍 이전 코드는\n서버 에러가 발생해도 사용자가 어디를 고쳐야 할지 몰랐습니다.\n\n하지만 서버 에러를 필드별로 매핑하니까\n사용자가 정확한 위치의 에러를 확인하고 즉시 수정할 수 있었습니다.',
      },
      {
        problem:
          '❗ 문제 배경\n전문가 포트폴리오 목록을 무한 스크롤로 구현했는데,\n스크롤을 빠르게 내리면 같은 API가 여러 번 호출되어 중복 데이터가 표시되는 문제가 있었습니다.',
        solution:
          '🔧 해결 방법\nReact Query의 useInfiniteQuery를 사용하여 데이터 페칭과 캐싱을 관리했습니다.\nisFetchingNextPage 상태를 체크하여 이미 다음 페이지를 로딩 중이면 추가 요청을 방지했습니다.\nIntersection Observer API로 마지막 아이템을 감지하여 정확한 시점에만 다음 페이지를 불러오도록 했습니다.',
        result:
          '👍 이전 코드는\n빠른 스크롤 시 API가 중복 호출되어 같은 데이터가 여러 번 나타났습니다.\n\n하지만 React Query와 Intersection Observer를 활용하니까\n중복 호출이 사라지고 부드러운 무한 스크롤이 구현되었습니다.',
      },
      {
        problem:
          '❗ 문제 배경\n전문가 어드민 페이지에서 공통 컴포넌트(Select, Toast 등)를 만들었는데,\n다른 팀원들이 사용법을 몰라서 매번 물어보는 상황이 발생했습니다.',
        solution:
          '🔧 해결 방법\nStorybook을 도입하여 모든 공통 컴포넌트의 사용 예시와 API 문서를 작성했습니다.\n각 컴포넌트마다 여러 가지 사용 케이스를 스토리로 만들어 시각적으로 확인할 수 있게 했습니다.\nJSDoc 주석을 추가하여 IDE에서 자동완성과 타입 힌트를 제공했습니다.',
        result:
          '👍 이전 코드는\n컴포넌트 사용법을 매번 코드를 뒤져서 찾아야 했습니다.\n\n하지만 Storybook과 JSDoc을 추가하니까\n팀원들이 스스로 문서를 보고 컴포넌트를 사용할 수 있게 되었습니다.',
      },
    ],
    learnings: [
      'React-hook-form과 Zod를 활용한 복잡한 폼 유효성 검사',
      'React Query를 활용한 무한 스크롤 및 서버 상태 관리',
      'Storybook을 활용한 컴포넌트 문서화 및 팀 협업',
      '처음부터 끝까지 전체 서비스를 주도적으로 개발한 경험',
    ],
    link: 'https://imweb.me/expert',
  },
  {
    name: '브랜드 캠페인 페이지',
    company: '(주) 아임웹',
    period: '2024.11 ~ 2025.01',
    description:
      'START YOUR BRAND NOW 캠페인 페이지 UI 개발. Canvas API로 사업자등록증 이미지 생성 및 SNS 공유 기능 구현.',
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
    troubleShooting: [
      {
        problem: '❗ 문제 배경\nhtml2canvas 라이브러리를 사용하여 사용자 입력 텍스트와 3가지 이미지를 합성한 사업자등록증을 생성하는데,\n이미지 생성 시간이 10초 이상 소요되어 사용자가 이탈하는 문제가 발생했습니다.',
        solution:
          '🔧 해결 방법\nhtml2canvas 대신 Canvas API를 직접 사용하여 이미지 합성 로직을 구현했습니다.\nDOM 전체를 렌더링하는 대신 필요한 이미지와 텍스트만 Canvas에 그려서 최적화했습니다.\ndevicePixelRatio를 계산하여 모든 디바이스에서 고품질 이미지를 생성하도록 처리했습니다.',
        result: '👍 이전 코드는\nhtml2canvas가 DOM 전체를 스캔하고 렌더링해서 10초 이상 걸렸습니다.\n\n하지만 Canvas API로 직접 구현하니까\n이미지 생성 시간이 0.3초로 97% 단축되어 사용자 경험이 대폭 개선되었습니다.',
      },
      {
        problem: '❗ 문제 배경\n모바일 브라우저에서 다른 탭으로 이동했다가 돌아오면 카드 뒷면의 비디오 애니메이션이 사라지는 문제가 있었습니다.\n사용자가 카드를 뒤집어서 애니메이션을 보다가 탭을 전환하면 다시 처음부터 봐야 했습니다.',
        solution:
          '🔧 해결 방법\nvisibilitychange 이벤트를 사용하여 브라우저 탭 전환을 감지했습니다.\n탭이 숨겨지면 video 요소를 pause()하고, 다시 보일 때 play()를 호출하여 애니메이션 상태를 유지했습니다.\nvideoRef를 사용하여 DOM 요소에 직접 접근하도록 구현했습니다.',
        result: '👍 이전 코드는\n탭 전환 시 video 상태를 관리하지 않아 애니메이션이 리셋되었습니다.\n\n하지만 visibilitychange 이벤트로 상태를 관리하니까\n모바일 브라우저에서 탭을 전환해도 애니메이션이 정상적으로 유지되었습니다.',
      },
      {
        problem: '❗ 문제 배경\nPC에서 선택지 영상을 클릭하면 영상이 잘려서 나오고,\n모바일에서 키보드가 내려갔을 때 하단에 여백이 생기는 레이아웃 문제가 있었습니다.',
        solution:
          '🔧 해결 방법\nPC: 반응형 레이아웃 컨테이너의 max-height를 고정하고 overflow: hidden 처리했습니다.\n모바일: 키보드 이벤트 리스너를 추가하여 키보드가 내려갈 때 window.scrollTo()로 스크롤 위치를 조정했습니다.\nviewport height 계산 시 window.visualViewport API를 활용하여 정확한 높이를 구했습니다.',
        result: '👍 이전 코드는\nPC/모바일 각각의 특성을 고려하지 않아 레이아웃이 깨졌습니다.\n\n하지만 디바이스별로 최적화된 레이아웃 처리를 하니까\nPC/모바일 모든 환경에서 일관되고 안정적인 영상 재생이 가능해졌습니다.',
      },
      {
        problem: '❗ 문제 배경\n사용자가 이름이나 도전하고 싶은 일을 1글자만 입력하면 다음 버튼이 비활성화되는데,\n왜 비활성화되었는지 안내가 없어서 사용자가 혼란스러워했습니다.',
        solution:
          '🔧 해결 방법\nbadwords-ko 라이브러리를 추가하여 비속어 유효성 검사를 구현했습니다.\n입력 필드 하단에 "2글자 이상 입력해 주세요" 안내 문구를 표시했습니다.\n실시간으로 입력 길이를 체크하여 조건을 만족하면 다음 버튼을 활성화했습니다.',
        result: '👍 이전 코드는\n버튼이 왜 비활성화되었는지 사용자가 알 수 없었습니다.\n\n하지만 안내 문구와 유효성 검사를 추가하니까\n사용자 피드백이 개선되고 올바른 입력을 유도할 수 있었습니다.',
      },
    ],
    learnings: [
      'Canvas API를 활용한 고성능 이미지 렌더링 기술 습득',
      '성능 병목 지점 분석 및 최적화 경험 (프로파일링 → 문제 파악 → 해결)',
      '외부 라이브러리 의존성을 줄이고 직접 구현하여 성능 개선하는 방법론',
      '사용자 인터랙션이 많은 캠페인 페이지의 UX 설계',
    ],
    link: 'https://imweb.me/event/brand_campaign',
  },
  {
    name: '카드 간편결제 시스템',
    company: '(주) 아임웹',
    period: '2022.09 ~ 2023.01',
    description:
      '카드 등록 기반 간편결제 시스템 개발. BillingKey를 활용한 일반결제/정기결제 기능 구현으로 결제 프로세스 간소화.',
    tasks: [
      'PG를 이용한 BillingKey 발급으로 카드 등록 기능',
      '일반결제/정기결제 기능 개발',
      'FO/BO 양쪽에서 결제 플로우 구현',
      '카드 정보 암호화 및 안전한 저장',
    ],
    results: [
      { text: '기존의 불필요하거나 복잡한 결제 프로세스 간소화' },
      { highlight: '연장률 10% 증가, 신규 고객 10% 증가' },
    ],
    troubleShooting: [
      {
        problem:
          '❗ 문제 배경\nBillingKey를 발급받아 카드를 등록하는 과정에서 PG사마다 응답 형식이 달라서 일관된 처리가 어려웠습니다.\n또한 결제 창에서 뒤로가기를 누르면 결제가 실패했는지 취소했는지 구분할 수 없었습니다.',
        solution:
          '🔧 해결 방법\nPG사별 Adapter 패턴을 적용하여 응답을 공통 인터페이스로 변환했습니다.\n결제 창에서 postMessage API를 사용하여 부모 창과 통신하도록 구현했습니다.\n결제 결과를 success, fail, cancel로 명확하게 구분하여 각 상황에 맞는 안내 메시지를 표시했습니다.',
        result:
          '👍 이전 코드는\nPG사마다 다른 응답 처리 코드가 중복되어 있었습니다.\n\n하지만 Adapter 패턴과 postMessage를 활용하니까\n모든 PG사에서 일관된 결제 경험을 제공할 수 있었습니다.',
      },
      {
        problem:
          '❗ 문제 배경\n정기결제 시 첫 결제는 성공했는데 다음 달 자동 결제가 실패하는 경우가 있었습니다.\n사용자는 결제가 실패했는지 모르고 서비스가 중단되어 불만이 발생했습니다.',
        solution:
          '🔧 해결 방법\n정기결제 실패 시 자동으로 3회까지 재시도하는 로직을 구현했습니다.\n각 재시도마다 1시간 간격을 두어 일시적인 오류로 인한 실패를 방지했습니다.\n재시도가 모두 실패하면 사용자에게 이메일과 알림톡으로 결제 실패를 안내했습니다.',
        result:
          '👍 이전 코드는\n정기결제 실패 시 바로 서비스가 중단되었습니다.\n\n하지만 재시도 로직과 알림 시스템을 추가하니까\n일시적 오류로 인한 서비스 중단이 크게 줄어들었습니다.',
      },
      {
        problem:
          '❗ 문제 배경\n카드 정보를 저장할 때 보안을 위해 암호화해야 했는데,\n프론트엔드에서 어떻게 안전하게 처리해야 할지 막막했습니다.',
        solution:
          '🔧 해결 방법\nPG사에서 제공하는 BillingKey 방식을 사용하여 실제 카드 정보는 프론트엔드에서 다루지 않도록 했습니다.\n카드 정보 입력은 PG사의 iframe 또는 팝업을 통해서만 진행하도록 제한했습니다.\n서버에는 BillingKey만 저장하고, 실제 카드번호는 PG사에서 관리하도록 구조를 설계했습니다.',
        result:
          '👍 이전 코드는\n카드 정보 보안 처리 방법을 몰라 고민이 많았습니다.\n\n하지만 PG사의 BillingKey 시스템을 활용하니까\n프론트엔드에서 민감한 정보를 다루지 않아 보안 리스크를 크게 줄일 수 있었습니다.',
      },
    ],
    learnings: [
      'PG사 연동 및 결제 시스템 구현 경험',
      'Adapter 패턴을 활용한 공통 인터페이스 설계',
      '결제 보안 및 BillingKey 시스템 이해',
      '정기결제 및 재시도 로직 구현',
    ],
  },
];
