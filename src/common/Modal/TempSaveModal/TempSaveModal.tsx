import { styled } from 'styled-components';
import { IcCancelDark } from '../../../assets/icon';
import { useNavigate } from 'react-router-dom';

const TempSaveModal = ({
  setModalOn,
}: {
  setModalOn: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();

  const handlClickCancle = () => {
    setModalOn(false);
  };

  return (
    <St.ModalContainer>
      <St.ModalContent>
        <St.ModalTitleWrapper>
          <IcCancelDark onClick={handlClickCancle} />
          <St.ModalTitle>임시 저장한 신청서가 있어요</St.ModalTitle>
          <St.ModalSubTitle>
            임시 저장한 신청서를 불러오거나 새로운 신청서를 작성할 수 있어요
          </St.ModalSubTitle>
        </St.ModalTitleWrapper>

        <St.BtnWrapper>
          <St.LoadBtn
            onClick={() => {
              navigate('/save');
            }}
          >
            불러오기
          </St.LoadBtn>
          <St.NewBtn
            onClick={() => {
              navigate('/custom');
            }}
          >
            새로 작성하기
          </St.NewBtn>
        </St.BtnWrapper>
      </St.ModalContent>
    </St.ModalContainer>
  );
};

export default TempSaveModal;

const St = {
  ModalContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100dvh;

    background: rgba(0, 0, 0, 0.6);

    z-index: 4;
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
    color: ${({ theme }) => theme.colors.gray7};

    ${({ theme }) => theme.fonts.title_semibold_20};
  `,

  ModalSubTitle: styled.p`
    padding: 1.4rem 6.4rem 4rem 6.4rem;

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

  LoadBtn: styled.button`
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

  NewBtn: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16.8rem;
    height: 7rem;

    border-bottom-right-radius: 1rem;
    border-left: 0.1rem solid ${({ theme }) => theme.colors.gray5};
    background-color: ${({ theme }) => theme.colors.gray8};
    color: ${({ theme }) => theme.colors.white};

    ${({ theme }) => theme.fonts.title_semibold_18};
  `,
};
