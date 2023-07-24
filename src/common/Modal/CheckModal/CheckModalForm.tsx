import styled from 'styled-components';
import { IcCancelDark } from '../../../assets/icon';

import api from '../../../libs/api';

interface CheckModalFormProps {
  onClose: () => void;
  title: string;
  subTitle: string;
  continueBtn: string;
  chargeAmount: number;
  setIsOpenCompleteModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckModalForm = ({
  onClose,
  title,
  subTitle,
  continueBtn,
  chargeAmount,
  setIsOpenCompleteModal,
}: CheckModalFormProps) => {
  const handleClickContinueBtn = async () => {
    //포인트 충전
    try {
      await api.post('/user/point/charge', {
        chargeAmount: chargeAmount,
      });
      setIsOpenCompleteModal(true);
      onClose();
      // navigate(redirectURL);
    } catch (err) {
      // console.log(err); //추후 삭제 예정(에러 페이지 라우팅 하면)
      // navigate("/error")
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
    padding: 1.6rem 7.25rem 4rem 7.25rem;

    text-align: center;
    color: ${({ theme }) => theme.colors.gray3};

    ${({ theme }) => theme.fonts.body_medium_16};
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
    width: 100%;
    height: 7rem;

    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.gray8};
    color: ${({ theme }) => theme.colors.white};

    ${({ theme }) => theme.fonts.title_semibold_18};
  `,
};

export default CheckModalForm;
