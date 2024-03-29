import { createGlobalStyle, css } from 'styled-components';

export const reset = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  menu,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 62.5%;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }
  body {
    line-height: 1;
  }
  menu,
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;
export const GlobalStyle = createGlobalStyle`

${reset}

@font-face {
  font-family: 'title_eng_bold_20';
  src: url('./fonts/Surt-Expanded-Bold/student/Surt-Expanded-Bold.woff') format('woff');
}
@font-face {
  font-family: 'body_eng_bold_10';
  src: url('./fonts/Surt-Expanded-Bold/student/Surt-Expanded-Bold.woff') format('woff');
}
@font-face {
  font-family: 'body_eng_bold_18';
  src: url('./fonts/Surt-Expanded-Bold/student/Surt-Expanded-Bold.woff') format('woff');
}

#root, body, html {
    max-width: 43rem;
    margin: 0 auto;
    /* overflow-y: auto; */
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
}
#root::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
}

* {
    box-sizing: border-box;
    // 버튼 음영 제거
    -webkit-tap-highlight-color:rgba(255,255,255,0);
    // 글자 선택 방지
    user-select: none;
    // 링크 터치 금지
    -webkit-touch-callout: none;
    
}
input:disabled, textarea:disabled, input:disabled::placeholder, textarea:disabled::placeholder {
    opacity: 1; 
}

// 사파리 웹 뷰 브라우저 상속 스타일 제거
input, textarea,button {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    border-radius: 0;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
}

// react-modal-sheet 라이브러리 Sheet 컴포넌트 최상위 스타일 
.react-modal-sheet-wrapper {
  inset : 0px auto !important;
  width: 100% !important;
  overflow: visible !important;
}
`;

export default GlobalStyle;
