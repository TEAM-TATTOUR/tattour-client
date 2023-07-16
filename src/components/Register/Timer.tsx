import { memo } from 'react';
import { useEffect } from 'react';
import { styled } from 'styled-components';

interface TimerProps {
  isCorrect: boolean;
  isTimeout: boolean;
  setIsTimeout: React.Dispatch<React.SetStateAction<boolean>>;
  leftTime: number;
  setLeftTime: React.Dispatch<React.SetStateAction<number>>;
}

const Timer = memo(({ isCorrect, isTimeout, setIsTimeout, leftTime, setLeftTime }: TimerProps) => {
  const INTERVAL = 1000;
  // padStart(2, '0'): 문자열의 길이는 2로 하고, 빈 곳이 있으면 0으로 채워넣어줌.
  const minutes = String(Math.floor((leftTime / (1000 * 60)) % 60)).padStart(2, '0');
  const second = String(Math.floor((leftTime / 1000) % 60)).padStart(2, '0');

  useEffect(() => {
    // setInterval: 두 번째 인자(시간(ms))를 간격으로 첫 번째 인자(코드) 실행
    const timer = setInterval(() => {
      // 1초씩 감소
      setLeftTime((prevTime: number) => prevTime - INTERVAL);
    }, INTERVAL);

    if (leftTime <= 0) {
      // timer 반복 중단
      clearInterval(timer);
      setIsTimeout(true);
    }

    if (isCorrect) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [leftTime, isCorrect, setIsTimeout]);

  return (
    <St.AuthTimer $isTimeout={isTimeout}>
      {isTimeout ? '시간 만료' : `${minutes} : ${second}`}
    </St.AuthTimer>
  );
});

const St = {
  AuthTimer: styled.span<{ $isTimeout: boolean }>`
    padding-top: 1.2rem;
    position: absolute;
    right: 4rem;

    color: ${({ theme, $isTimeout }) => ($isTimeout ? theme.colors.red : theme.colors.gray7)};

    ${({ theme }) => theme.fonts.body_medium_16};
  `,
};

export default Timer;
