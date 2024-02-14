import { styled } from 'styled-components';
import ModalPortal from '../ModalPortal';
import { IcCancelDark } from '../../../assets/icon';
import { useNavigate } from 'react-router-dom';
import { customInfoType } from '../../../types/customInfoType';
import { api } from '../../../libs/api';

interface CustomSizeEscapeModalProps {
  setModalOn: React.Dispatch<React.SetStateAction<boolean>>;
  haveDesign?: boolean;
  customInfo?: customInfoType;
  handDrawingImage?: File | null;
  customImages?: FileList | null;
}

const CustomSizeEscapeModal = ({
  setModalOn,
  customInfo,
  handDrawingImage,
  customImages,
}: CustomSizeEscapeModalProps) => {
  const navigate = useNavigate();

  const handleClickStopBtn = async () => {
    const formData = new FormData();
    const json = JSON.stringify(customInfo);

    try {
      if (handDrawingImage) {
        formData.append('handDrawingImage', handDrawingImage);
      }
      const blob = new Blob([json], { type: 'application/json' });
      formData.append('customInfo', blob);
      if (customImages) {
        for (let i = 0; i < customImages.length; i++) {
          console.log(customImages.item(i));
          formData.append('customImages', customImages.item(i) as File);
        }
      }

      const { data } = await api.patch('/custom/update', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/', {
        state: {
          data: data,
        },
      });
    } catch (err) {
      console.log(formData);
      console.log(err);
    }
    navigate('/');
    setModalOn(false);
  };

  return (
    <ModalPortal>
      <St.ModalContainer>
        <St.ModalContent>
          <St.ModalTitleWrapper>
            <IcCancelDark onClick={() => setModalOn(false)} />
            <St.ModalTitle>정말 그만두시나요?</St.ModalTitle>
            <St.ModalSubTitle>
              {'현재 페이지를 제외한 이전 내용들이\n임시저장되며, 언제든 이어서 작성할 수 있어요'}
            </St.ModalSubTitle>
          </St.ModalTitleWrapper>

          <St.BtnWrapper>
            <St.ContinueBtn onClick={() => setModalOn(false)}>취소</St.ContinueBtn>
            <St.StopBtn onClick={handleClickStopBtn}>그만두기</St.StopBtn>
          </St.BtnWrapper>
        </St.ModalContent>
      </St.ModalContainer>
    </ModalPortal>
  );
};

export default CustomSizeEscapeModal;

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
