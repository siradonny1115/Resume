import { css } from '@emotion/react';
import { theme } from './theme';

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: ${theme.fonts.main};
    color: ${theme.colors.secondary};
    background-color: ${theme.colors.background};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    width: 100%;
    min-height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media print {
    body {
      background-color: white;
    }

    @page {
      margin: 1cm;
    }

    section {
      page-break-inside: avoid;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    button {
      display: none;
    }
  }
`;
