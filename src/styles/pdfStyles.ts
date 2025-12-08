import { css } from '@emotion/react';

export const pdfPageStyles = css`
  @media print {
    @page {
      size: A4;
      margin: 0;
    }

    body {
      margin: 0;
      padding: 0;
    }

    /* 페이지 브레이크 관련 */
    .page-break {
      page-break-after: always;
      break-after: page;
    }

    .avoid-break {
      page-break-inside: avoid;
      break-inside: avoid;
    }

    /* 웹 전용 요소 숨기기 */
    nav,
    button,
    .no-print {
      display: none !important;
    }
  }

  /* A4 용지 크기: 210mm x 297mm (794px x 1123px at 96dpi) */
  .pdf-page {
    width: 210mm;
    min-height: 297mm;
    padding: 20mm;
    margin: 0 auto;
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    position: relative;

    @media print {
      box-shadow: none;
      margin: 0;
      page-break-after: always;
      break-after: page;
    }

    @media screen {
      margin-bottom: 20px;
    }
  }

  .pdf-container {
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;

    @media print {
      margin: 0;
      padding: 0;
    }
  }
`;
