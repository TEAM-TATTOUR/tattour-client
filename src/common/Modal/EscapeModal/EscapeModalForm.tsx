import styled from 'styled-components';
import { IcCancelDark } from '../../../assets/icon';
import { useNavigate } from 'react-router-dom';

interface EscapeModalFormProps {
  redirectURL?: string;
  onClose: () => void;
  pageName: string;
  title: string;
  subTitle: string;
  continueBtn: string;
  stopBtn: string;
}

const EscapeModalForm = ({
  redirectURL,
  onClose,
  pageName,
  title,
  subTitle,
  continueBtn,
  stopBtn,
}: EscapeModalFormProps) => {
  const navigate = useNavigate();
  // const location = useLocation();
  // const patchStates = location.state;

  const handleClickStopBtn = () => {
    onClose();
    switch (pageName) {
      // 페이지 이름과 라우팅 주소는 나중에 보고 수정
      case 'LoginPage':
        navigate('/login');
        break;

      case 'ChargePage':
        redirectURL ? navigate(redirectURL) : navigate('/');
        break;

      case 'CustomSizePage':
        navigate('/onboarding');
        break;

      default:
        navigate('/');
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
        </St.ModalTitleWrapper>

        <St.BtnWrapper>
          <St.ContinueBtn onClick={onClose}>{continueBtn}</St.ContinueBtn>
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
    margin-top: 4.7rem;

    & > svg {
      position: absolute;
      top: 2.5rem;
      right: 2rem;
    }
  `,

  ModalTitle: styled.h2`
    color: ${({ theme }) => theme.colors.gray7};

    ${({ theme }) => theme.fonts.title_semibold_20};
  `,

  ModalSubTitle: styled.p`
    padding: 1.6rem 2.6rem 4rem 2.6rem;

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
