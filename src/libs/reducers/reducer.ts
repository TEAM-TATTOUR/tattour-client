type State = {
  isVisible: boolean;
  isError: boolean;
  leftTime: number;
};

type Action =
  | { type: 'SHOW_CERTIFICATION_FORM' }
  | { type: 'HIDE_CERTIFICATION_FORM' }
  | { type: 'VERIFIED_SUCCESS' }
  | { type: 'VERIFIED_FAILED' }
  | { type: 'SET_LEFT_TIME'; payload: number };

export const reducer = (state: State, action: Action): State => {
  const MINUTES_IN_MS = 5 * 60 * 1000;

  switch (action.type) {
    case 'SHOW_CERTIFICATION_FORM':
      return {
        ...state,
        isVisible: true,
        leftTime: MINUTES_IN_MS,
      };
    case 'HIDE_CERTIFICATION_FORM':
      return { ...state, isVisible: false };
    case 'VERIFIED_SUCCESS':
      return { ...state, isError: false };
    case 'VERIFIED_FAILED':
      return { ...state, isError: true };
    case 'SET_LEFT_TIME':
      return { ...state, leftTime: state.leftTime - action.payload };
    default:
      throw new Error('Unhandled action');
  }
};
