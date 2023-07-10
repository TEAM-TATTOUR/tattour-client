import styled from 'styled-components';
import { IcCancelDark } from '../../assets/icon';
import { useNavigate } from 'react-router-dom';

interface ModalProps {
  onClose: () => void;
  pageName: string;
}

const Modal: React.FC<ModalProps> = ({ onClose, pageName }) => {
  const navigate = useNavigate();

  const handleClickStopBtn = () => {
    onClose();
    switch (pageName) {
      // 페이지 이름과 라우팅 주소는 나중에 보고 수정
      case 'LoginPage':
        navigate('/login');
        break;

      case 'ChargePage':
        navigate('/charge');
        break;

      case 'CustomSizePage':
        navigate('/custom-size');
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
          <St.ModalTitle>정말 그만두시나요?</St.ModalTitle>
          <St.ModalSubTitle>
            프로필 설정만 마치면, 회원가입 과정이 모두 끝납니다. 중간에 나가시면 정보가 사라져요.
          </St.ModalSubTitle>
        </St.ModalTitleWrapper>

        <St.BtnWrapper>
          <St.ContinueBtn onClick={onClose}>설정 계속하기</St.ContinueBtn>
          <St.StopBtn onClick={handleClickStopBtn}>그만두기</St.StopBtn>
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
    // width 뷰마다 달라지면 props로 받아와서 적용하도록 수정
    width: 27rem;
    padding-top: 1.6rem;
    padding-bottom: 4rem;

    color: ${({ theme }) => theme.colors.gray3};

    ${({ theme }) => theme.fonts.body_medium_16};
  `,

  BtnWrapper: styled.div`
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

export default Modal;
