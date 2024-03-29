import { memo, useEffect, useReducer, useRef } from 'react';
import { styled } from 'styled-components';
import { reducer } from '../../libs/reducers/registerReducer';

interface TimerProps {
  isTimeout: boolean;
  resetTime: boolean;
  setIsTimeout: React.Dispatch<React.SetStateAction<boolean>>;
}

const Timer = memo(({ isTimeout, setIsTimeout, resetTime }: TimerProps) => {
  const MINUTES_IN_MS = 5 * 60 * 1000;
  const INTERVAL = 1000;

  const [timerState, dispatch] = useReducer(reducer, {
    isVisible: false,
    isError: false,
    leftTime: MINUTES_IN_MS,
    resetTime: false,
  });

  const timer = useRef(0);

  // padStart(2, '0'): 문자열의 길이는 2로 하고, 빈 곳이 있으면 0으로 채워넣어줌.
  const minutes = String(Math.floor((timerState.leftTime / (1000 * 60)) % 60)).padStart(2, '0');
  const second = String(Math.floor((timerState.leftTime / 1000) % 60)).padStart(2, '0');

  useEffect(() => {
    // setInterval: 두 번째 인자(시간(ms))를 간격으로 첫 번째 인자(코드) 실행
    timer.current = setInterval(() => {
      // 1초씩 감소
      dispatch({ type: 'SET_LEFT_TIME', payload: INTERVAL });
    }, INTERVAL);

    if (timerState.leftTime <= 0) {
      // timer 반복 중단
      clearInterval(timer.current);
      setIsTimeout(true);
    }

    return () => {
      clearInterval(timer.current);
    };
  }, [timerState.leftTime, setIsTimeout]);

  useEffect(() => {
    dispatch({ type: 'RESET_LEFT_TIME' });
  }, [resetTime]);

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
