import { MainProject } from '../../../types/resume';

export const brandCampaignProject: MainProject = {
  name: '브랜드 캠페인 페이지',
  company: '(주) 아임웹',
  period: '2024.11 ~ 2025.01',
  description:
    'START YOUR BRAND NOW 캠페인 페이지 UI 개발. Canvas API로  등록증 이미지 생성 및 SNS 공유 기능 구현.',
  tasks: [
    '브랜드 메시지 전달을 위한 인터랙션 및 애니메이션 구현',
    '사용자 입력 텍스트 + 3가지 이미지 합성을 위한 Canvas API 직접 렌더링 구현',
    '기존 html2canvas 라이브러리 성능 문제 → Canvas API 직접 렌더링으로 전환',
    '모듈화를 통한 유지보수 용이한 구조 도입',
  ],
  results: [
    {
      text: ' 등록증 자동 발급 (목표 10,000건 → 실제 12,934건)',
      highlight: '목표 대비 129% 달성',
    },
    { text: '이미지 생성 시간', highlight: '10초 → 0.3초로 97% 단축' },
  ],
  troubleShooting: [
    {
      problem:
        'html2canvas 라이브러리를 사용하여 사용자 입력 텍스트와 3가지 이미지를 합성한  등록증을 생성하는데,\n이미지 생성 시간이 10초 이상 소요되어 사용자가 이탈하는 문제가 발생했습니다.',
      solution:
        'html2canvas 대신 Canvas API를 직접 사용하여 이미지 합성 로직을 구현했습니다.\nDOM 전체를 렌더링하는 대신 필요한 이미지와 텍스트만 Canvas에 그려서 최적화했습니다.\ndevicePixelRatio를 계산하여 모든 디바이스에서 고품질 이미지를 생성하도록 처리했습니다.',
      result:
        'html2canvas가 DOM 전체를 스캔하고 렌더링해서 10초 이상 걸렸지만, Canvas API로 직접 구현하여 이미지 생성 시간이 0.3초로 97% 단축되어 사용자 경험이 대폭 개선되었습니다.',
    },
    {
      problem:
        '모바일 브라우저에서 다른 탭으로 이동했다가 돌아오면 카드 뒷면의 비디오 애니메이션이 사라지는 문제가 있었습니다.\n사용자가 카드를 뒤집어서 애니메이션을 보다가 탭을 전환하면 다시 처음부터 봐야 했습니다.',
      solution:
        'visibilitychange 이벤트를 사용하여 브라우저 탭 전환을 감지했습니다.\n탭이 숨겨지면 video 요소를 pause()하고, 다시 보일 때 play()를 호출하여 애니메이션 상태를 유지했습니다.\nvideoRef를 사용하여 DOM 요소에 직접 접근하도록 구현했습니다.',
      result:
        '탭 전환 시 video 상태를 관리하지 않아 애니메이션이 리셋되었지만, visibilitychange 이벤트로 상태를 관리하여 모바일 브라우저에서 탭을 전환해도 애니메이션이 정상적으로 유지되었습니다.',
    },
    {
      problem:
        'PC에서 선택지 영상을 클릭하면 영상이 잘려서 나오고,\n모바일에서 키보드가 내려갔을 때 하단에 여백이 생기는 레이아웃 문제가 있었습니다.',
      solution:
        'PC: 반응형 레이아웃 컨테이너의 max-height를 고정하고 overflow: hidden 처리했습니다.\n모바일: 키보드 이벤트 리스너를 추가하여 키보드가 내려갈 때 window.scrollTo()로 스크롤 위치를 조정했습니다.\nviewport height 계산 시 window.visualViewport API를 활용하여 정확한 높이를 구했습니다.',
      result:
        'PC/모바일 각각의 특성을 고려하지 않아 레이아웃이 깨졌지만, 디바이스별로 최적화된 레이아웃 처리를 하여 PC/모바일 모든 환경에서 일관되고 안정적인 영상 재생이 가능해졌습니다.',
    },
  ],
  images: [
    {
      src: '/images/projects/brand-campaign/event-landing.png',
      caption: '이벤트 랜딩 페이지',
    },
    {
      src: '/images/projects/brand-campaign/event-name-input.png',
      caption: '등록증 발급 - 이름 입력',
    },
    {
      src: '/images/projects/brand-campaign/event-story-sharing.png',
      caption: '등록증 발급 - 스토리 공유',
    },
    {
      src: '/images/projects/brand-campaign/event-card-generated.png',
      caption: '등록증 생성 완료 - Canvas API 렌더링',
    },
  ],
  learnings: [
    'Canvas API를 활용한 고성능 이미지 렌더링 기술 습득',
    '성능 병목 지점 분석 및 최적화 경험 (프로파일링 → 문제 파악 → 해결)',
    '외부 라이브러리 의존성을 줄이고 직접 구현하여 성능 개선하는 방법론',
    '사용자 인터랙션이 많은 캠페인 페이지의 UX 설계',
  ],
  link: 'https://imweb.me/event/brand_campaign',
};
