import styled from 'styled-components';
import { IcCancelDark } from '../../../assets/icon';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../../../libs/api';

interface ChargePointModalFormProps {
  onClose: () => void;
  title: string;
  subTitle?: string;
  topContentsTitle: string;
  topContents: string;
  bottomContentsTitle: string;
  bottomContents: string;
  navigationBtn: string;
  unit: string;
  isEnoughPoint: boolean;
  haveDesign: boolean;
}

const ChargePointModalForm = ({
  onClose,
  title,
  subTitle,
  navigationBtn,
  topContentsTitle,
  topContents,
  bottomContentsTitle,
  bottomContents,
  unit,
  isEnoughPoint,
  haveDesign,
}: ChargePointModalFormProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const currURL = location.pathname;

  const handleClickNavigationBtn = async () => {
    if (isEnoughPoint) {
      try {
        const { data } = await api.post('/custom/apply', {
          haveDesign: haveDesign,
        });
        navigate('/custom-size', {
          state: {
            haveDesign: haveDesign,
            customId: data.data.customId,
          },
        });
      } catch (err) {
        navigate('/error');
      }
    } else {
      navigate('/point-charge', {
        state: {
          redirectURL: currURL,
        },
      });
    }
  };

  return (
    <St.ModalWrapper>
      <St.ModalContent>
        <St.ModalTitleWrapper>
          <IcCancelDark onClick={onClose} />
          <St.ModalTitle>{title}</St.ModalTitle>
          {subTitle ? <St.ModalSubTitle>{subTitle}</St.ModalSubTitle> : ''}
        </St.ModalTitleWrapper>

        <St.ContentsWrapper>
          <St.PointWrapper>
            <St.PointTitle>{topContentsTitle}</St.PointTitle>
            <St.PointContentsWrapper>
              <St.TopContents>{topContents}</St.TopContents>
              <St.Unit>{unit}</St.Unit>
            </St.PointContentsWrapper>
          </St.PointWrapper>

          <St.PointWrapper>
            <St.PointTitle>{bottomContentsTitle}</St.PointTitle>
            <St.PointContentsWrapper>
              <St.BottomContents $isEnoughPoint={isEnoughPoint}>{bottomContents}</St.BottomContents>
              <St.Unit>{unit}</St.Unit>
            </St.PointContentsWrapper>
          </St.PointWrapper>
        </St.ContentsWrapper>

        <St.BtnWrapper>
          <St.NavigationBtn onClick={handleClickNavigationBtn}>{navigationBtn}</St.NavigationBtn>
        </St.BtnWrapper>
      </St.ModalContent>
    </St.ModalWrapper>
  );
};

const St = {
  ModalWrapper: styled.section`
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

    border-radius: 1rem;

    background-color: ${({ theme }) => theme.colors.white};
  `,

  ModalTitleWrapper: styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 2.5rem;

    & > svg {
      position: absolute;
      top: 2.5rem;
      right: 2rem;
    }
  `,

  ModalTitle: styled.h2`
    color: ${({ theme }) => theme.colors.gray7};

    ${({ theme }) => theme.fonts.title_semibold_20};

    white-space: pre-line;
  `,

  ModalSubTitle: styled.p`
    padding: 1.5rem 5.4rem 1.3rem 5.4rem;

    color: ${({ theme }) => theme.colors.gray3};

    ${({ theme }) => theme.fonts.body_medium_16};
  `,

  ContentsWrapper: styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 29.1rem;
    height: 9.6rem;
    margin-top: 1.5rem;
    margin-bottom: 3rem;
    gap: 1.4rem;

    border-radius: 0.6rem;

    background-color: ${({ theme }) => theme.colors.bg};
  `,

  PointWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    width: 24.7rem;
  `,

  PointTitle: styled.p`
    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.colors.gray4};

    ${({ theme }) => theme.fonts.body_medium_16};
  `,

  PointContentsWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;
  `,

  TopContents: styled.p`
    color: ${({ theme }) => theme.colors.gray5};

    ${({ theme }) => theme.fonts.title_medium_18};
  `,

  BottomContents: styled.p<{ $isEnoughPoint: boolean }>`
    color: ${({ theme, $isEnoughPoint }) =>
      !$isEnoughPoint ? theme.colors.red : theme.colors.gray8};

    ${({ theme }) => theme.fonts.title_extrabold_18};
  `,

  Unit: styled.span`
    color: ${({ theme }) => theme.colors.gray4};

    ${({ theme }) => theme.fonts.body_medium_16};
  `,

  BtnWrapper: styled.div`
    display: flex;
    align-items: flex-end;
    width: 100%;
    padding: 0;
  `,

  NavigationBtn: styled.button`
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

export default ChargePointModalForm;
