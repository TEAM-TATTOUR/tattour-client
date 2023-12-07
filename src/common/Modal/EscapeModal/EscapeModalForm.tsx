import styled from 'styled-components';
import { IcCancelDark } from '../../../assets/icon';
import { useNavigate } from 'react-router-dom';
import { removeAccessToken } from '../../../libs/api';

interface EscapeModalFormProps {
  redirectURL?: string;
  setIsActiveNext?: React.Dispatch<React.SetStateAction<boolean>>;
  state?: {
    state?: object;
  };
  onClose: () => void;
  pageName: string;
  title: string;
  subTitle: string;
  subTitle2: string;
  continueBtn: string;
  stopBtn: string;
  continueBtnFunc?: () => void;
}

const EscapeModalForm = ({
  redirectURL,
  setIsActiveNext,
  state,
  onClose,
  pageName,
  title,
  subTitle,
  subTitle2,
  continueBtn,
  stopBtn,
  continueBtnFunc,
}: EscapeModalFormProps) => {
  const navigate = useNavigate();
  const customerInfo = state && state.state;

  const handleClickContinueBtn = () => {
    onClose();
    switch (pageName) {
      case 'CartPage':
        if (continueBtnFunc) {
          continueBtnFunc();
        }
        break;

      case 'OrderPage':
        navigate('/complete', { state: customerInfo });
        break;

      default:
        break;
    }
  };

  const handleClickStopBtn = () => {
    onClose();
    switch (pageName) {
      case 'LoginPage':
        navigate('/');
        removeAccessToken();
        break;

      case 'ChargePage':
        redirectURL ? navigate(redirectURL) : navigate('/');
        break;

      case 'CustomSizePage':
        navigate('/onboarding');
        break;

      case 'OrderPage':
        setIsActiveNext && setIsActiveNext(false);
        break;

      default:
        break;
    }
  };

  return (
    <St.ModalContainer>
      <St.ModalContent>
        <St.ModalTitleWrapper>
          <IcCancelDark onClick={onClose} />
          <St.ModalTitle>{title}</St.ModalTitle>
          <St.ModalSubTitle>{subTitle}</St.ModalSubTitle>
          <St.ModalSubTitle>{subTitle2}</St.ModalSubTitle>
        </St.ModalTitleWrapper>

        <St.BtnWrapper>
          <St.ContinueBtn onClick={handleClickContinueBtn}>{continueBtn}</St.ContinueBtn>
          <St.StopBtn onClick={handleClickStopBtn}>{stopBtn}</St.StopBtn>
        </St.BtnWrapper>
      </St.ModalContent>
    </St.ModalContainer>
  );
};

const St = {
  ModalContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;

    background: rgba(0, 0, 0, 0.6);

    z-index: 30;
  `,

  ModalContent: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 33.5rem;
    height: 24.1rem;

    border-radius: 1rem;

    background-color: ${({ theme }) => theme.colors.white};
  `,

  ModalTitleWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 4.9rem;

    & > svg {
      position: absolute;
      top: 2.5rem;
      right: 2rem;
    }
  `,

  ModalTitle: styled.h2`
    margin-bottom: 1.4rem;
    color: ${({ theme }) => theme.colors.gray7};

    ${({ theme }) => theme.fonts.title_semibold_20};
  `,

  ModalSubTitle: styled.p`
    text-align: center;
    color: ${({ theme }) => theme.colors.gray3};

    ${({ theme }) => theme.fonts.body_medium_16};

    white-space: pre-line;
  `,

  BtnWrapper: styled.div`
    -webkit-flex: 1; /* Safari 6.1+ */
    -ms-flex: 1; /* IE 10 */
    flex: 1;
    display: flex;
    align-items: flex-end;
    width: 100%;
    padding: 0;
    margin-top: 4rem;
  `,

  ContinueBtn: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16.7rem;
    height: 7rem;

    border-bottom-left-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.gray8};
    color: ${({ theme }) => theme.colors.white};

    ${({ theme }) => theme.fonts.title_semibold_18};
  `,

  StopBtn: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16.8rem;
    height: 7rem;

    border-bottom-right-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.gray3};
    color: ${({ theme }) => theme.colors.white};

    ${({ theme }) => theme.fonts.title_semibold_18};
  `,
};

export default EscapeModalForm;
