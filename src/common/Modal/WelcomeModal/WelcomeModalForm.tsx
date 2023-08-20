import styled from 'styled-components';
import { IcCancelDark, ImgPointCoupon } from '../../../assets/icon';
import { useNavigate } from 'react-router-dom';

interface WelcomeModalFormProps {
  onClose: () => void;
  title: string;
  continueBtn: string;
}

const WelcomeModalForm = ({ onClose, title, continueBtn }: WelcomeModalFormProps) => {
  const navigate = useNavigate();

  const handleClickContinueBtn = () => {
    onClose();
    navigate('/onboarding');
  };

  return (
    <St.ModalContainer>
      <St.ModalContent>
        <St.ModalTitleWrapper>
          <IcCancelDark onClick={onClose} />
          <St.ModalTitle>{title}</St.ModalTitle>
        </St.ModalTitleWrapper>

        <ImgPointCoupon />

        <St.BtnWrapper>
          <St.ContinueBtn onClick={handleClickContinueBtn}>{continueBtn}</St.ContinueBtn>
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
    height: 41.8rem;

    border-radius: 1rem;

    background-color: ${({ theme }) => theme.colors.white};
  `,

  ModalTitleWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2.5rem;
    margin-bottom: 3.3rem;

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
    width: 100%;
  `,

  ContinueBtn: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    width: 100%;
    height: 7rem;

    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.gray8};
    color: ${({ theme }) => theme.colors.white};

    ${({ theme }) => theme.fonts.title_semibold_18};
  `,
};

export default WelcomeModalForm;
