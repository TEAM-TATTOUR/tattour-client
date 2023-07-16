import { styled } from 'styled-components';

interface ProgressBarProps {
  // 현재 단계 (전체 페이지에 비례하는 단계)
  curStep: number;
  // 전체 페이지 수
  maxStep: number;
}

const ProgressBar = ({ curStep, maxStep }: ProgressBarProps) => {
  return (
    <St.ProgressBarWrapper>
      <progress value={curStep} max={maxStep}></progress>
    </St.ProgressBarWrapper>
  );
};

const St = {
  ProgressBarWrapper: styled.div`
    & > progress {
      width: 100%;
      height: 0.4rem;

      color: ${({ theme }) => theme.colors.pink5};
      -webkit-appearance: none;
      appearance: none;
    }

    & > progress::-webkit-progress-bar {
      background-color: ${({ theme }) => theme.colors.gray1};
    }
    & > progress::-webkit-progress-value {
      background-color: ${({ theme }) => theme.colors.pink5};
    }
  `,
};

export default ProgressBar;
