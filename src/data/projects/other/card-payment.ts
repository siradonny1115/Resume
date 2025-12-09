import { OtherProject } from '../../../types/resume';

export const cardPaymentProject: OtherProject = {
  name: '카드 간편결제 UI',
  company: '(주) 아임웹',
  period: '2022.09 ~ 2023.01',
  description:
    '카드 등록 기반 간편결제 시스템의 프론트엔드 개발. PG사 iframe/팝업 연동 및 결제 플로우 UI 구현.',
  tasks: [
    'PG사 iframe/팝업 연동 및 BillingKey 발급 UI 구현',
    '일반결제/정기결제 결제 플로우 UI 개발',
    'FO(Front Office) 및 BO(Back Office) 카드 관리 페이지 개발',
    'postMessage API를 활용한 결제창-부모창 간 통신 구현',
  ],
  results: [
    { text: '기존의 불필요하거나 복잡한 결제 프로세스 간소화' },
    { highlight: '연장률 10% 증가, 신규 고객 10% 증가' },
  ],
  troubleShooting: [
    {
      problem:
        'PG사마다 제공하는 결제 창(iframe/팝업)의 응답 형식이 달라서 일관된 처리가 어려웠습니다.\n또한 결제 창에서 뒤로가기를 누르면 결제가 실패했는지 사용자가 취소했는지 구분할 수 없었습니다.',
      solution:
        'PG사별 Adapter 패턴을 적용하여 응답을 공통 인터페이스로 변환했습니다.\npostMessage API를 사용하여 결제 창(iframe/팝업)과 부모 창 간 양방향 통신을 구현했습니다.\n결제 결과를 success, fail, cancel로 명확하게 구분하여 각 상황에 맞는 안내 메시지와 UI를 표시했습니다.',
      result:
        'PG사마다 다른 응답 처리 코드가 중복되어 있었지만, Adapter 패턴과 postMessage를 활용하여 모든 PG사에서 일관된 결제 UX를 제공할 수 있었습니다.',
    },
    {
      problem:
        '카드 정보 입력 시 보안을 위해 PG사의 iframe 또는 팝업을 사용해야 했는데,\n프론트엔드에서 민감한 카드 정보를 어떻게 안전하게 처리해야 할지 막막했습니다.',
      solution:
        'PG사에서 제공하는 BillingKey 방식을 사용하여 실제 카드 정보는 프론트엔드에서 직접 다루지 않도록 했습니다.\n카드 정보 입력은 PG사의 보안 iframe 또는 팝업을 통해서만 진행하도록 제한했습니다.\nBillingKey 발급 후에는 토큰만 서버로 전송하여 프론트엔드에서 민감 정보를 노출하지 않았습니다.',
      result:
        '카드 정보 보안 처리 방법을 몰라 고민이 많았지만, PG사의 BillingKey 시스템과 iframe/팝업을 활용하여 프론트엔드에서 민감한 정보를 다루지 않아 보안 리스크를 크게 줄일 수 있었습니다.',
    },
  ],
  learnings: [
    'PG사 iframe/팝업 연동 및 결제 UI 구현 경험',
    'Adapter 패턴을 활용한 공통 인터페이스 설계',
    'postMessage API를 활용한 크로스 도메인 통신 구현',
    '결제 보안 및 BillingKey 시스템 이해',
  ],
};
