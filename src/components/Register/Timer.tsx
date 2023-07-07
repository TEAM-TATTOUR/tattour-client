import { memo } from 'react';
import { useState, useEffect } from 'react';
import { styled } from 'styled-components';

interface TimerProps {
  isCorrect: boolean;
}

const Timer = memo(({ isCorrect }: TimerProps) => {
  const MINUTES_IN_MS = 5 * 60 * 1000;
  const INTERVAL = 1000;
  const [leftTime, setLeftTime] = useState<number>(MINUTES_IN_MS);

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
      alert('제한 시간이 끝났습니다.');
    }

    if (isCorrect) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [leftTime, isCorrect]);

  return (
    <St.AuthTimerWrapper>
      <St.AuthTimer>
        {minutes} : {second}
      </St.AuthTimer>
    </St.AuthTimerWrapper>
  );
});

const St = {
  AuthTimerWrapper: styled.div`
    display: flex;
    align-items: center;
  `,
  AuthTimer: styled.p`
    position: absolute;
    right: 4rem;

    color: ${({ theme }) => theme.colors.gray7};

    ${({ theme }) => theme.fonts.body_medium_16};
  `,
};

export default Timer;
