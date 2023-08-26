import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useGetUserProfile from '../../../libs/hooks/useGetUserProfile';
import { SetStateAction, useEffect, useState } from 'react';
import { IcCancelDark } from '../../../assets/icon';

interface ChargePointCompleteModalProps {
  chargeAmount: number;
  redirectURL: string;
  setModalOn: React.Dispatch<SetStateAction<boolean>>;
}

const ChargePointCompleteModal = ({
  chargeAmount,
  redirectURL,
  setModalOn,
}: ChargePointCompleteModalProps) => {
  const navigate = useNavigate();
  const [currPoint, setCurrPoint] = useState(0);

  const { response, error, loading } = useGetUserProfile();

  useEffect(() => {
    if (response) setCurrPoint(response.homeUserInfo.point);
  }, [response]);

  const handleNavigateBtn = () => {
    navigate(redirectURL);
  };

  return (
    !error &&
    !loading && (
      <St.ModalWrapper>
        <St.ModalContent>
          <St.ModalTitleWrapper>
            <IcCancelDark onClick={() => setModalOn(false)} />
            <St.ModalTitle>포인트 충전 완료</St.ModalTitle>
          </St.ModalTitleWrapper>

          <St.ContentsWrapper>
            <St.PointWrapper>
              <St.PointTitle>충전한 금액</St.PointTitle>
              <St.PointContentsWrapper>
                <St.TopContents>{chargeAmount.toLocaleString()}</St.TopContents>
                <St.Unit>P</St.Unit>
              </St.PointContentsWrapper>
            </St.PointWrapper>

            <St.PointWrapper>
              <St.PointTitle>충전 후 포인트 잔액</St.PointTitle>
              <St.PointContentsWrapper>
                <St.BottomContents>{currPoint.toLocaleString()}</St.BottomContents>
                <St.Unit>P</St.Unit>
              </St.PointContentsWrapper>
            </St.PointWrapper>
          </St.ContentsWrapper>

          <St.BtnWrapper>
            <St.NavigationBtn onClick={handleNavigateBtn}>포인트 쓰러가기</St.NavigationBtn>
          </St.BtnWrapper>
        </St.ModalContent>
      </St.ModalWrapper>
    )
  );
};

export default ChargePointCompleteModal;

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
    margin-top: 2.5rem;
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

  BottomContents: styled.p`
    color: ${({ theme }) => theme.colors.gray8};

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
