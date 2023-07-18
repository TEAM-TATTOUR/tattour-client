import { styled } from 'styled-components';
import { IcDraw, IcPhoto, IcCancelDark } from '../../../assets/icon';
import { useRef, useState, useEffect } from 'react';

interface PaintBottomProps {
  isBottomOpen: boolean;
  setBottomOpen: React.Dispatch<React.SetStateAction<boolean>>;
  drawingImageURL: string | null;
}

const CustomImageAttach: React.FC<PaintBottomProps> = ({ drawingImageURL, setBottomOpen }) => {
  const MAX_FILES = 3;

  const ref = useRef<HTMLInputElement | null>(null);
  const [previewURL, setPreviewURL] = useState<string[]>(drawingImageURL ? [drawingImageURL] : []);

  const handleClickRefBtn = () => {
    if (previewURL.length < MAX_FILES) {
      ref.current?.click();
    }
  };

  useEffect(() => {
    if (drawingImageURL) {
      setPreviewURL((prevURLs) => [...prevURLs, drawingImageURL]);
    }
  }, [drawingImageURL]);

  const handleChangeImgAttach = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files || !files[0]) return;
    const uploadImage = Array.from(files);

    //개수 제한 적용해주기
    const filesToEncode = Array.from(uploadImage).slice(0, MAX_FILES - previewURL.length);
    encodeFile(filesToEncode, e);
  };

  const encodeFile = async (fileBlob: File[], e: React.ChangeEvent<HTMLInputElement>) => {
    for (let i = 0; i < fileBlob.length; i++) {
      const reader = new FileReader();
      const file = fileBlob[i];

      const dataUrl = await new Promise<string>((resolve, reject) => {
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });

      setPreviewURL((prevURLs) => [...prevURLs, dataUrl]);
    }

    e.target.value = '';
  };

  const handleClickPreviewDelBtn = (index: number) => {
    setPreviewURL((prevURLs) => {
      const updatedURLs = [...prevURLs];
      updatedURLs.splice(index, 1);
      return updatedURLs;
    });
  };

  return (
    <St.CustomReferenceWrapper>
      <St.PreviewSection>
        {previewURL.length > 0 ? (
          previewURL.map((url, index) => (
            <St.ImgPreviewContainer key={index}>
              <St.ImgPreviewDelBtn type='button' onClick={() => handleClickPreviewDelBtn(index)}>
                <IcCancelDark />
              </St.ImgPreviewDelBtn>
              <St.Image>
                <img src={url} alt='첨부-이미지-미리보기' />
              </St.Image>
            </St.ImgPreviewContainer>
          ))
        ) : (
          <St.Image>
            <St.ImageDescription> 필수 1장 첨부, 최대 3장 첨부 가능합니다.</St.ImageDescription>
          </St.Image>
        )}
      </St.PreviewSection>
      <St.ButtonWrapper>
        <St.ReferenceButton type='button' onClick={handleClickRefBtn}>
          <IcPhoto />
          사진 첨부하기
          <input
            name='img-input'
            type='file'
            multiple
            hidden
            accept='image/png, image/jpg'
            onChange={handleChangeImgAttach}
            ref={ref}
          />
        </St.ReferenceButton>
        <St.ReferenceButton
          type='button'
          onClick={() => {
            setBottomOpen(true);
          }}
        >
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
  PreviewSection: styled.div`
    display: flex;
    gap: 1rem;

    width: 100%;
    height: 24.6rem;
    margin-bottom: 2rem;

    overflow-x: auto;
    white-space: nowrap;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
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
    background-color: ${({ theme }) => theme.colors.bg};

    & > img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
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
