type State = {
  isVisible: boolean;
  isError: boolean;
  leftTime: number;
  resetTime: boolean;
};

type Action =
  | { type: 'SHOW_CERTIFICATION_FORM' }
  | { type: 'HIDE_CERTIFICATION_FORM' }
  | { type: 'VERIFIED_NOT_FAILED' }
  | { type: 'VERIFIED_FAILED' }
  | { type: 'SET_LEFT_TIME'; payload: number }
  | { type: 'RESET_LEFT_TIME' };

export const reducer = (state: State, action: Action): State => {
  const MINUTES_IN_MS = 5 * 60 * 1000;

  switch (action.type) {
    // 인증번호 입력 폼을 나오게 하는 동작
    case 'SHOW_CERTIFICATION_FORM':
      return {
        ...state,
        isVisible: true,
        leftTime: MINUTES_IN_MS,
        resetTime: !state.resetTime,
      };

    // 인증번호 입력 폼을 사라지게 하는 동작
    case 'HIDE_CERTIFICATION_FORM':
      return { ...state, isVisible: false };

    // 전화번호 인증에 실패하지 않은 경우 실행할 동작
    case 'VERIFIED_NOT_FAILED':
      return { ...state, isError: false };

    // 전화번호 인증에 실패한 경우 실행할 동작
    case 'VERIFIED_FAILED':
      return { ...state, isError: true };

    // 타이머 시간이 줄어들게 하는 동작
    case 'SET_LEFT_TIME':
      return { ...state, leftTime: state.leftTime - action.payload };

    case 'RESET_LEFT_TIME':
      return { ...state, leftTime: MINUTES_IN_MS };
    default:
      throw new Error('Unhandled action');
  }
};
