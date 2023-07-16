import { css, DefaultTheme } from 'styled-components';

const colors = {
  white: '#FFFFFF',
  bg: '#F7F7FA',
  gray0: '#EDEEF2',
  gray1: '#D8D9DD',
  gray2: '#B2B4BA',
  gray3: '#8B8E98',
  gray4: '#646875',
  gray5: '#3E4253',
  gray6: '#313542',
  gray7: '#252832',
  gray8: '#191B21',
  gray9: '#0C0D11',
  pink1: '#FFD7E1',
  pink2: '#FFAFC2',
  pink3: '#FF87A4',
  pink4: '#FF5F86',
  pink5: '#FF3767',
  red: '#FF4444',
  brown: '#392020',
};

const fonts = {
  title_semibold_24: css`
    font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    letter-spacing: -0.024rem;
  `,
  title_semibold_20: css`
    font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    letter-spacing: -0.02rem;
  `,
  title_medium_20: css`
    font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: -0.02rem;
  `,
  title_regular_20: css`
    font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -0.02rem;
  `,

  title_semibold_18: css`
    font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    letter-spacing: -0.018rem;
  `,
  title_medium_18: css`
    font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: -0.018rem;
  `,
  title_line_medium_16: css`
    font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: -0.016rem;
    text-decoration-line: line-through;
  `,
  title_line_medium_16: css`
    font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: -0.016rem;
    text-decoration-line: line-through;
  `,
  title_semibold_16: css`
    font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    letter-spacing: -0.016rem;
  `,
  body_medium_16: css`
    font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: -0.016rem;
  `,
  body_semibold_14: css`
    font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    letter-spacing: -0.014rem;
  `,
  body_medium_14: css`
    font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: -0.014rem;
  `,
  body_line_medium_14: css`
    font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: -0.014rem;
    text-decoration-line: line-through;
  `,
  body_underline_medium_14: css`
    font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: -0.14px;
    text-decoration-line: underline;
  `,
  body_line_medium_12: css`
    font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: -0.012rem;
    text-decoration-line: line-through;
  `,
  detail_medium_12: css`
    font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: -0.012rem;
  `,
  detail_semibold_12: css`
    font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 15.6px */
    letter-spacing: -0.012rem;
  `,

  title_extrabold_16: css`
    font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    letter-spacing: -0.016rem;
  `,

  title_extrabold_18: css`
    font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    letter-spacing: -0.018rem;
  `,

  title_extrabold_22: css`
    font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    font-size: 2.2rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    letter-spacing: -0.022rem;
  `,
  title_extrabold_24: css`
    font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    letter-spacing: -0.024rem;
  `,
  title_eng_bold_20: css`
    font-family: 'title_eng_bold_20';
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    letter-spacing: 0.06rem;
  `,
  body_eng_bold_10: css`
    font-family: 'body_eng_bold_10';
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    letter-spacing: 0.03rem;
  `,
  title_eng_bold_18: css`
    font-family: 'body_eng_bold_18';
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    letter-spacing: 0.054rem;
  `,
};

const theme: DefaultTheme = {
  colors,
  fonts,
};
export default theme;
