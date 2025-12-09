import { OtherProject } from '../../../types/resume';

export const e2eTestProject: OtherProject = {
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
        'Cypress Cloud를 사용하여 E2E 테스트를 실행했는데, 테스트 케이스가 증가하면서 월 $99의 비용이 발생했습니다.\n또한 테스트를 순차적으로 실행해야 해서 25분 이상 소요되었습니다.',
      solution:
        'Sorry-Cypress 오픈소스를 도입하여 자체 호스팅 환경을 구축했습니다.\nDocker Compose로 Sorry-Cypress 서버, MongoDB, S3-compatible 스토리지를 구성했습니다.\nGithub Actions에서 5개의 병렬 작업으로 테스트를 분산 실행하도록 설정했습니다.',
      result:
        'Cypress Cloud에 의존하여 비용이 발생하고 병렬화 한계가 있었지만, Sorry-Cypress로 자체 호스팅을 하여 월 $99 비용을 절감하고 테스트 시간을 72% 단축했습니다.',
    },
  ],
  learnings: [
    'E2E 테스트 자동화 환경 구축 경험',
    'Docker를 활용한 서버 인프라 구성',
    'CI/CD 파이프라인 최적화 방법론',
  ],
};
