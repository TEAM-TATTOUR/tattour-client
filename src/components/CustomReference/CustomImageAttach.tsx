import { styled } from 'styled-components';
import { IcDraw, IcPhoto } from '../../assets/icon';
interface PaintBottomProps {
  isBottomOpen: boolean;
  setBottomOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CustomImageAttach = ({ isBottomOpen, setBottomOpen }: PaintBottomProps) => {
  const handleClickButton = () => {
    setBottomOpen(true);
  };

  return (
    <St.CustomReferenceWrapper>
      <St.Image>
        <St.ImageDescription>최대 3장까지 추가할 수 있어요</St.ImageDescription>
      </St.Image>
      <St.ButtonWrapper>
        <St.ReferenceButton type='button'>
          <IcPhoto />
          사진 첨부하기
        </St.ReferenceButton>
        <St.ReferenceButton type='button' onClick={handleClickButton}>
          <IcDraw />
          대충 그리기
        </St.ReferenceButton>
      </St.ButtonWrapper>
    </St.CustomReferenceWrapper>
  );
};

const St = {
  CustomReferenceWrapper: styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,

  Image: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 33.5rem;
    height: 24.6rem;
    margin-bottom: 2rem;

    background-color: ${({ theme }) => theme.colors.bg};
  `,

  ImageDescription: styled.p`
    background-color: ${({ theme }) => theme.colors.bg};
    ${({ theme }) => theme.fonts.body_medium_14};
    color: ${({ theme }) => theme.colors.gray2};
  `,
  ButtonWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: fit-content;
    width: fit-content;
    margin-bottom: 8.3rem;
    gap: 1rem;
  `,

  ReferenceButton: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;

    width: 33.5rem;
    height: 5rem;

    background-color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.body_medium_16};
    color: ${({ theme }) => theme.colors.gray3};

    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.gray2};
  `,
};

export default CustomImageAttach;
