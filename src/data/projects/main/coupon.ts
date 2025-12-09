import { MainProject } from '../../../types/resume';

export const couponProject: MainProject = {
  name: '쿠폰 페이지 MFE 전환',
  company: '(주) 아임웹',
  period: '2025.07 ~ 2025.09',
  description:
    'PHP 레거시 쿠폰 페이지(21,116줄)를 React MFE로 전환. FSD 아키텍쳐로 재설계',
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
        '각 쿠폰 유형(다운로드/자동발급/지정발행/코드생성)마다 다른 설정 규칙이 존재했습니다.\n예를 들어 자동발급 쿠폰은 "첫 회원 가입", "첫 주문 완료", "쇼핑 등급 변경", "생일" 등 4가지 트리거를 지원하며, 각각 다른 입력 필드와 검증 로직이 필요했습니다.',
      solution:
        'Zod의 discriminatedUnion을 활용하여 각 쿠폰 유형별로 독립적인 스키마를 정의했습니다.\nSwitchCase 컴포넌트로 쿠폰 타입에 따라 동적으로 발행대상/쿠폰수량/숨김처리 UI를 렌더링하여 코드 중복을 제거했습니다.',
      result:
        '4가지 쿠폰 유형마다 별도의 검증 로직이 분산되어 있어 유지보수가 어려웠지만, discriminatedUnion으로 타입 안전한 스키마를 구성하여 144개의 비즈니스 규칙을 안전하게 처리할 수 있게 되었고, 새로운 쿠폰 유형 추가 시 기존 코드 수정 없이 schema 파일만 추가할 수 있도록 확장성을 높였습니다.',
    },
    {
      problem:
        'PHP 기반 쿠폰 목록 페이지는 페이지네이션으로 50개씩 표시했지만, 페이지 이동이나 삭제/상태 변경 시마다 전체 페이지가 새로고침되어 UX가 좋지 않았습니다.',
      solution:
        '@tanstack/react-table로 SPA 방식의 테이블을 구현하여 페이지 새로고침 없이 즉각적인 UI 반영이 가능하도록 했습니다.\nZustand 스토어로 rowSelection, counts 등의 전역 상태를 관리하고, React Query로 서버 상태와 동기화했습니다.\n대량 작업 시 낙관적 업데이트(Optimistic Update)를 적용하여 로컬 상태를 먼저 업데이트하고, 서버 응답을 기다리지 않고 즉시 UI에 반영했습니다.',
      result:
        '페이지 이동이나 상태 변경 시마다 전체 페이지가 새로고침되어 사용자 경험이 좋지 않았지만, SPA 방식의 테이블과 낙관적 업데이트를 적용하여 페이지 이동 시 로딩 시간이 1.5초 → 0.5초로 66% 개선되었고, 대량 삭제/상태 변경 작업 시 UI 블로킹 없이 실시간으로 진행 상황을 표시할 수 있게 되었습니다.',
    },
  ],
  learnings: [
    'React-hook-form + Zod를 활용한 복잡한 다단계 폼 상태 관리 패턴',
    '21,116줄 PHP 레거시를 React로 전환하는 체계적인 마이그레이션 전략',
    'Feature-Sliced Design을 적용한 프론트엔드 아키텍처 설계',
    '@tanstack/react-table의 테이블 구현',
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
};
