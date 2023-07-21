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
  setCustomMainImage: React.Dispatch<React.SetStateAction<File | null>>;
  setCustomImages: React.Dispatch<React.SetStateAction<FileList | null>>;
}

const CustomImageAttach: React.FC<PaintBottomProps> = ({
  setBottomOpen,
  drawingImageURL,
  setDrawingImageURL,
  setIsActiveNext,
  setCustomMainImage,
  setCustomImages,
}) => {
  const MAX_FILES = 3;

  const ref = useRef<HTMLInputElement | null>(null);
  const [previewURL, setPreviewURL] = useState<string[]>([]);
  const [freeDraw, setFreeDraw] = useState<boolean>(drawingImageURL ? true : false);
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

  useEffect(() => {
    if (drawingImageURL) {
      setFreeDraw(true);
    } else setFreeDraw(false);
  }, [drawingImageURL]);

  const handleChangeImgAttach = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files || !files[0]) return;
    if (files[3]) {
      setToast(true);
    }

    const fileList = createFileList(Array.from(files).slice(1));
    setCustomImages(fileList);

    const uploadImage = Array.from(files);

    //개수 제한 적용해주기
    const filesToEncode = Array.from(uploadImage).slice(0, MAX_FILES - previewURL.length);
    encodeFile(filesToEncode, e);
  };

  const createFileList = (files: File[]): FileList => {
    const dataTransfer = new DataTransfer();
    files.forEach((file) => {
      dataTransfer.items.add(file);
    });
    return dataTransfer.files;
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

  const handleClickFreeDrawDelBtn = () => {
    setFreeDraw(false);
    setDrawingImageURL(null);
  };

  const handleReferenceBtn = () => {
    if (freeDraw) {
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
        ) : freeDraw !== true ? (
          <St.Image>
            <St.ImageDescription> 필수 1장 첨부, 최대 3장 첨부 가능합니다.</St.ImageDescription>
          </St.Image>
        ) : (
          ''
        )}
        {freeDraw ? (
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
          className={freeDraw ? 'disabled' : ''}
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
