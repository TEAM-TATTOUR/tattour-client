import { styled } from 'styled-components';
import { IcCancelDark, IcDraw, IcPhoto } from '../../../assets/icon';
import { useRef, useState } from 'react';

const CustomImageAttach = () => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [previewURL, setPreviewURL] = useState<string>('');

  const handleChangeImgAttach = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files || !files[0]) return;
    const uploadImage = files;
    encodeFile(uploadImage, e);
  };

  const encodeFile = (fileBlob: FileList | Blob, e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if (!fileBlob) return;

    //배열로 들어온 파일들 하나하나 읽어서 미리보기로 띄워주기
    const files: Blob[] = [];
    if (fileBlob instanceof FileList) {
      for (let i = 0; i < Math.min(fileBlob.length, 3); i++) {
        files.push(fileBlob.item(i)!);
      }
    } else {
      files.push(fileBlob);
    }

    files.forEach((file) => {
      reader.readAsDataURL(file);
    });

    reader.onloadend = () => {
      setPreviewURL(reader.result as string);
      e.target.value = '';
    };
  };

  const handleClickPreviewDelBtn = () => {
    setPreviewURL('');
  };

  return (
    <St.CustomReferenceWrapper>
      {previewURL ? (
        <St.ImgPreviewContainer>
          <St.ImgPreviewDelBtn type='button' onClick={handleClickPreviewDelBtn}>
            <IcCancelDark />
          </St.ImgPreviewDelBtn>
          <St.Image>
            <img src={previewURL} alt='첨부-이미지-미리보기' />
          </St.Image>
        </St.ImgPreviewContainer>
      ) : (
        <St.Image>
          <St.ImageDescription>최대 3장까지 추가할 수 있어요</St.ImageDescription>
        </St.Image>
      )}
      <St.ButtonWrapper>
        <St.ReferenceButton type='button'>
          <IcPhoto />
          사진 첨부하기
          <input
            name='img-input'
            type='file'
            multiple
            hidden
            accept='image/png'
            onChange={handleChangeImgAttach}
            ref={ref}
          />
        </St.ReferenceButton>
        <St.ReferenceButton type='button'>
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
  ImgPreviewContainer: styled.div`
    position: relative;
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
