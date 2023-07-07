import { memo } from 'react';
import { useState, useEffect } from 'react';
import { styled } from 'styled-components';

interface TimerProps {
  isCorrect: boolean;
}

const Timer = memo(({ isCorrect }: TimerProps) => {
  const MINUTES_IN_MS = 5 * 60 * 1000;
  const INTERVAL = 1000;
  const [timeLeft, setTimeLeft] = useState<number>(MINUTES_IN_MS);

  // padStart(2, '0'): 문자열의 길이는 2로 하고, 빈 곳이 있으면 0으로 채워넣어줌.
  const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(2, '0');
  const second = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, '0');

  useEffect(() => {
    // setInterval: 두 번째 인자(시간(ms))를 간격으로 첫 번째 인자(코드) 실행
    const timer = setInterval(() => {
      // 1초씩 감소
      setTimeLeft((prevTime: number) => prevTime - INTERVAL);
    }, INTERVAL);

    if (timeLeft <= 0) {
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
  }, [timeLeft, isCorrect]);

  return (
    <St.AuthTimer>
      {minutes} : {second}
    </St.AuthTimer>
  );
});

const St = {
  AuthTimer: styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    /* margin-right: 2rem; */

    z-index: 2;

    color: ${({ theme }) => theme.colors.gray7};

    ${({ theme }) => theme.fonts.body_medium_16};
  `,
};

export default Timer;
