import { styled } from 'styled-components';

const ErrorMessage = () => {
  return (
    <St.NotificationWrapper>
      <St.Notification>인증번호가 잘못되었어요.</St.Notification>
    </St.NotificationWrapper>
  );
};

const St = {
  NotificationWrapper: styled.div`
    display: flex;
    justify-content: start;
    width: 100%;
    padding-top: 0.8rem;
    padding-left: 2.2rem;
  `,

  Notification: styled.p`
    color: ${({ theme }) => theme.colors.red};

    ${({ theme }) => theme.fonts.body_medium_14};
  `,
};

export default ErrorMessage;
