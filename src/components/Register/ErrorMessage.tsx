import { styled } from 'styled-components';

interface ErrorMessageProps {
  isTimeout: boolean;
}

const ErrorMessage = ({ isTimeout }: ErrorMessageProps) => {
  return (
    <St.NotificationWrapper>
      <St.Notification>{isTimeout ? '재인증 버튼을 눌러 다시 시도해주세요' : '인증번호를 다시 입력해주세요'}</St.Notification>
    </St.NotificationWrapper>
  );
};

const St = {
  NotificationWrapper: styled.div`
    display: flex;
    justify-content: start;
    width: 100%;
    padding-top: 0.8rem;
    padding-left: 0.2rem;
  `,

  Notification: styled.p`
    color: ${({ theme }) => theme.colors.red};

    ${({ theme }) => theme.fonts.body_medium_14};
  `,
};

export default ErrorMessage;
