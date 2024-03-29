import React from 'react';
import { styled } from 'styled-components';

interface PriceFooterProps {
  haveDesign?: boolean;
  // customInfo: customInfoType;
  // handDrawingImage?: File | null;
  // customImages: FileList | undefined;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  // setReceiptData: React.Dispatch<React.SetStateAction<resCustomInfoType | undefined>>;
}

const PriceFooter = ({
  // customInfo,
  // handDrawingImage,
  // customImages,
  setStep,
}: // setReceiptData,
PriceFooterProps) => {
  // const handleClickFooterBtn = async () => {
  //   const formData = new FormData();
  //   try {
  //     // 1. handDrawingImage(손 그림) append
  //     if (handDrawingImage) {
  //       formData.append('handDrawingImage', handDrawingImage);
  //     }

  //     // 2. customInfo(커스텀 정보들) append
  //     const json = JSON.stringify(customInfo);
  //     const blob = new Blob([json], { type: 'application/json' });
  //     formData.append('customInfo', blob);

  //     // 3. customImage(도안 이미지) append
  //     if (customImages) {
  //       for (let i = 0; i < customImages.length; i++) {
  //         formData.append('customImages', customImages.item(i) as File);
  //       }
  //     }

  //     const { data } = await api.patch('/custom/update', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });

  //     setReceiptData(data.data);
  //     setStep((prev) => prev + 1);
  //   } catch (err) {
  //     console.log('Error', err);
  //   }
  // };

  return (
    <St.CustomFooter>
      <St.FooterButton type='button' onClick={() => setStep((prev) => prev + 1)}>
        신청서 작성 완료하기
      </St.FooterButton>
    </St.CustomFooter>
  );
};

const St = {
  CustomFooter: styled.footer`
    position: fixed;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 43rem;
    height: 7rem;

    background-color: ${({ theme }) => theme.colors.gray9};
  `,

  FooterButton: styled.button`
    width: 100%;
    height: 100%;

    color: ${({ theme }) => theme.colors.pink5};
    ${({ theme }) => theme.fonts.title_semibold_18};
  `,
};

export default PriceFooter;
