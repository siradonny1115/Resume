export const theme = {
  colors: {
    primary: '#21252a',
    secondary: '#535961',
    tertiary: '#a1aab2',
    highlight: '#00CCAA',
    background: '#ffffff',
    lightBackground: '#f8f9fa',
    tagBackground: '#f0f9f7',
    tagBorder: '#d0f0e8',
    border: '#e9ecef',
    cardBorder: '#dee2e6',
  },
  fonts: {
    main: "'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
  },
  breakpoints: {
    mobile: '768px',
  },
  spacing: {
    section: '48px',
    gap: '32px',
    mobileGap: '16px',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
  },
  shadows: {
    small: '0 1px 3px rgba(0, 0, 0, 0.05)',
    medium: '0 2px 8px rgba(0, 0, 0, 0.08)',
    large: '0 4px 16px rgba(0, 0, 0, 0.1)',
  },
} as const;

export type Theme = typeof theme;
