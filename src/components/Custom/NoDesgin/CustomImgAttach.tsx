import { styled } from 'styled-components';
import { IcPhoto } from '../../../assets/icon';

const CustomImgAttach = () => {
  return (
    <St.ImgAttachContainer>
      <input id='img-input' type='file' accept='image/png' />
      <St.ImgAttachArea>
        <p>도안 이미지를 첨부해주세요</p>
      </St.ImgAttachArea>
      <label htmlFor='img-input'>
        <St.ImgAttachBtn>
          <IcPhoto />
          <span>사진 첨부하기</span>
        </St.ImgAttachBtn>
      </label>
    </St.ImgAttachContainer>
  );
};

export default CustomImgAttach;

const St = {
  ImgAttachContainer: styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 2rem;

    & > input {
      display: none;
    }
  `,

  ImgAttachArea: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 33.5rem;
    height: 24.6rem;

    background-color: ${({ theme }) => theme.colors.bg};

    & > p {
      color: ${({ theme }) => theme.colors.gray2};
      ${({ theme }) => theme.fonts.body_medium_14};
    }
  `,

  ImgAttachBtn: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 33.5rem;
    height: 5rem;

    background-color: ${({ theme }) => theme.colors.white};

    border: 0.1rem solid ${({ theme }) => theme.colors.gray1};
    border-radius: 0.5rem;

    & > svg {
      padding-right: 0.6rem;
    }

    & > span {
      color: ${({ theme }) => theme.colors.gray3};
      ${({ theme }) => theme.fonts.body_medium_16};
    }
  `,
};
