import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { IcCancelDark, IcPhoto } from '../../../../assets/icon';

interface CustomImgAttachProps {
  setIsActiveNext: React.Dispatch<React.SetStateAction<boolean>>;
  setCustomImages: React.Dispatch<React.SetStateAction<FileList | undefined>>;
  attachedImg: FileList | null;
  previewURL: string[];
  setPreviewURL: React.Dispatch<React.SetStateAction<string>>;
}

const CustomImgAttach = ({
  setIsActiveNext,
  setCustomImages,
  attachedImg,
  previewURL,
  setPreviewURL,
}: CustomImgAttachProps) => {
  useEffect(() => {
    previewURL ? setIsActiveNext(true) : setIsActiveNext(false);
  }, [previewURL, setIsActiveNext]);

  useEffect(() => {
    //state에 있는 attachedImg 값 가져와서 미리보기 구현하기
    if (!attachedImg) return;
    setCustomImages(attachedImg);
    const reader = new FileReader();
    reader.readAsDataURL(attachedImg[0]);
    reader.onloadend = () => {
      setPreviewURL(reader.result as string);
    }; // FileReader로 이미지 미리보기 구현
  }, [attachedImg]);

  const handleChangeImgAttach = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return; // early return

    const fileBlob = files; // 서버 통신 시 보낼 타입
    setCustomImages(fileBlob);

    const reader = new FileReader();
    reader.readAsDataURL(fileBlob[0]);
    reader.onloadend = () => {
      setPreviewURL(reader.result as string);
    }; // FileReader로 이미지 미리보기 구현

    // 같은 파일을 올리면 change 이벤트 인지 못해서 여기서 초기화
    const dataTransfer = new DataTransfer();
    e.target.files = dataTransfer.files;
  };

  const handleClickImgPreviewDelBtn = () => {
    setPreviewURL('');
    setCustomImages(undefined);
  };

  return (
    <St.ImgAttachContainer>
      <input id='imgInput' type='file' accept='image/png' onChange={handleChangeImgAttach} />
      {previewURL ? (
        <St.ImgPreviewContainer>
          <St.ImgPreviewDelBtn type='button' onClick={handleClickImgPreviewDelBtn}>
            <IcCancelDark />
          </St.ImgPreviewDelBtn>
          <St.ImgPreviewArea>
            <img src={previewURL} alt='그려둔-도안-이미지-미리보기' />
          </St.ImgPreviewArea>
        </St.ImgPreviewContainer>
      ) : (
        <St.ImgAttachArea>
          <p>투명한 배경, 고화질 png 파일 1장을 첨부해주세요</p>
        </St.ImgAttachArea>
      )}
      <label htmlFor='imgInput'>
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

    width: 100%;
    gap: 2rem;
    padding-bottom: 12.3rem;

    & > input {
      display: none;
    }
  `,

  ImgAttachArea: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 24.6rem;

    background-color: ${({ theme }) => theme.colors.bg};

    & > p {
      color: ${({ theme }) => theme.colors.gray2};
      ${({ theme }) => theme.fonts.body_medium_14};
    }
  `,

  ImgPreviewContainer: styled.div`
    position: relative;
  `,

  ImgPreviewDelBtn: styled.button`
    position: absolute;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 2.5rem;
    height: 2.5rem;
    padding: 0.2rem;

    background-color: ${({ theme }) => theme.colors.gray7};
  `,

  ImgPreviewArea: styled.div`
    width: 100%;
    height: 25.6rem;

    background-color: ${({ theme }) => theme.colors.bg};

    & > img {
      width: 100%;
      height: 100%;

      object-fit: contain;
    }
  `,

  ImgAttachBtn: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
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
