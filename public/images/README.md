# 이미지 관리 가이드

## 📁 폴더 구조

```
public/images/
├── projects/              # 프로젝트별 이미지
│   ├── pricing-ab-test/   # 요금제 A/B 테스트
│   ├── expert-service/    # 전문가 서비스 플랫폼
│   ├── brand-campaign/    # 2025 브랜드 캠페인
│   └── simple-payment/    # 간편결제 프로젝트
└── profile/               # 프로필 이미지 (선택)
```

## 🖼️ 이미지 추가 방법

### 1. 이미지 파일 배치
요금제 A/B 테스트 프로젝트 이미지를 추가하려면:
```
public/images/projects/pricing-ab-test/
  ├── main.webp           # 메인 이미지
  ├── screenshot-1.webp   # 스크린샷 1
  ├── screenshot-2.webp   # 스크린샷 2
  └── result.webp         # 결과 이미지
```

### 2. 코드에서 사용
```tsx
// 프로젝트 상세 페이지에서
<img src="/images/projects/pricing-ab-test/main.webp" alt="요금제 A/B 테스트" />
```

## ✨ 이미지 최적화 가이드

### 권장 사양
- **포맷**: WebP (PNG/JPG 대비 30% 작음)
- **프로젝트 메인 이미지**: 1200x800px, < 300KB
- **스크린샷**: 1000x600px, < 200KB
- **썸네일**: 400x300px, < 100KB

### 최적화 도구
- [Squoosh](https://squoosh.app/) - 온라인 이미지 압축
- [ImageOptim](https://imageoptim.com/) - Mac 앱
- Photoshop: "Save for Web" → WebP

### 변환 명령어 (옵션)
```bash
# PNG → WebP 변환
cwebp input.png -q 80 -o output.webp

# 여러 파일 일괄 변환
for file in *.png; do cwebp "$file" -q 80 -o "${file%.png}.webp"; done
```

## 📝 사용 예시

### 프로젝트 상세 페이지에 이미지 추가
```tsx
const ProjectImage = styled.img`
  width: 100%;
  border-radius: 12px;
  margin: 20px 0;
`;

<ProjectImage
  src="/images/projects/pricing-ab-test/main.webp"
  alt="요금제 페이지 개편"
/>
```

## 🚀 배포 시 주의사항

- `public/` 폴더의 모든 파일은 자동으로 배포됩니다
- Git에 커밋하면 Vercel이 자동으로 CDN에 배포
- 대용량 파일은 피하세요 (권장: 각 파일 < 500KB)
