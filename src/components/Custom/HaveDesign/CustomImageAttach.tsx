import { styled } from 'styled-components';
import { IcDraw, IcPhoto, IcCancelDark } from '../../../assets/icon';
import { useRef, useState, useEffect } from 'react';
import Toast from '../../../common/ToastMessage/Toast';

interface PaintBottomProps {
  isBottomOpen: boolean;
  setBottomOpen: React.Dispatch<React.SetStateAction<boolean>>;
  drawingImageURL: string | null;
  setDrawingImageURL: React.Dispatch<React.SetStateAction<string | null>>;
  setIsActiveNext: React.Dispatch<React.SetStateAction<boolean>>;
  setCustomImages: React.Dispatch<React.SetStateAction<FileList | null>>;
  customImages: FileList | null;
  setFreeDraw: React.Dispatch<React.SetStateAction<boolean>>;
  setHandDrawingImage: React.Dispatch<React.SetStateAction<File | null>>;
  handDrawingImage: File | null;
  previewURL: string[];
  setPreviewURL: React.Dispatch<React.SetStateAction<string[]>>;
}

const CustomImageAttach: React.FC<PaintBottomProps> = ({
  setBottomOpen,
  drawingImageURL,
  setDrawingImageURL,
  setIsActiveNext,
  setCustomImages,
  customImages,
  setFreeDraw,
  setHandDrawingImage,
  handDrawingImage,
  previewURL,
  setPreviewURL,
}) => {
  const MAX_FILES = 3;

  const ref = useRef<HTMLInputElement | null>(null);
  const [toast, setToast] = useState<boolean>(false);

  const handleClickRefBtn = () => {
    if (previewURL.length < MAX_FILES) {
      ref.current?.click();
    } else {
      setToast(true);
    }
  };

  // 이미지 없으면 다음 비활성화
  useEffect(() => {
    previewURL.length !== 0 ? setIsActiveNext(true) : setIsActiveNext(false);
  }, [previewURL, setIsActiveNext]);

  function dataURItoBlob(dataURI: string) {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    const byteString = atob(dataURI.split(',')[1]);

    // separate out the mime component
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to an ArrayBuffer
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: mimeString });
  }

  //이미지 파일 첨부하기
  useEffect(() => {
    if (!customImages) return;
    if (!drawingImageURL) return;
    console.log('customImages', drawingImageURL);
    // const blob = new Blob([drawingImageURL], { type: 'image/png' });
    const blob = dataURItoBlob(drawingImageURL);
    const file = new File([blob], 'image.png', {
      type: blob.type,
    });
    console.log(file, 'file');
    setHandDrawingImage(file);
  }, [drawingImageURL]);

  // useEffect(() => {
  //   if (drawingImageURL) {
  //     setFreeDraw(true);
  //     const file = new File([drawingImageURL], 'image.png', { type: 'image/png' });
  //   } else setFreeDraw(false);
  // }, [drawingImageURL, setFreeDraw]);

  const handleChangeImgAttach = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    // console.log(files, '+++++++');
    if (!files) return;
    if (files[3]) {
      setToast(true);
    }

    const fileBlobs = files;
    // const imageFiles = Array.from(fileBlobs).slice(1);
    // console.log(files, '+++++++');
    // console.log('imageFiles, ******', imageFiles);
    const dataTransfer = new DataTransfer();
    Array.from(fileBlobs).forEach((file) => {
      dataTransfer.items.add(file);
    });

    const fileList = dataTransfer.files;
    setCustomImages(fileList);

    const uploadImage = Array.from(files);

    //개수 제한 적용해주기
    const filesToEncode = Array.from(uploadImage).slice(0, MAX_FILES - previewURL.length);
    encodeFile(filesToEncode);
  };

  const encodeFile = async (fileBlob: File[]) => {
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

    // e.target.value = '';
  };

  const handleClickPreviewDelBtn = (index: number) => {
    setPreviewURL((prevURLs) => {
      const updatedURLs = [...prevURLs];
      updatedURLs.splice(index, 1);
      return updatedURLs;
    });
  };

  const handleClickFreeDrawDelBtn = () => {
    setFreeDraw(false);
    setDrawingImageURL(null);
    setHandDrawingImage(null);
  };

  const handleReferenceBtn = () => {
    if (handDrawingImage) {
      return;
    } else {
      setBottomOpen(true);
    }
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
        {handDrawingImage ? (
          <St.ImgPreviewContainer>
            <St.ImgPreviewDelBtn type='button' onClick={() => handleClickFreeDrawDelBtn()}>
              <IcCancelDark />
            </St.ImgPreviewDelBtn>
            <St.Image>
              {drawingImageURL && <img src={drawingImageURL} alt='첨부-이미지-미리보기' />}
            </St.Image>
          </St.ImgPreviewContainer>
        ) : (
          ''
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
          onClick={handleReferenceBtn}
          className={handDrawingImage ? 'disabled' : ''}
        >
          <IcDraw />
          대충 그리기
        </St.ReferenceButton>
      </St.ButtonWrapper>
      {toast && <Toast setToast={setToast} text='이미지를 3장 이상 첨부할 수 없습니다' />}
    </St.CustomReferenceWrapper>
  );
};

const St = {
  CustomReferenceWrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    padding-bottom: 8.3rem;
  `,
  PreviewSection: styled.div`
    display: flex;
    gap: 1rem;

    width: 33.5rem;
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
    /* padding-bottom: 8.3rem; */
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

    &.disabled {
      background-color: ${({ theme }) => theme.colors.gray0};
    }
  `,
};

export default CustomImageAttach;
