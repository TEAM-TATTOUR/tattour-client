import { styled } from 'styled-components';
import { customInfoType, resCustomInfoType } from '../../types/customInfoType';
import api from '../../libs/api';
import React from 'react';

interface PriceFooterProps {
  haveDesign?: boolean;
  customInfo: customInfoType;
  handDrawingImage: string; //handDrawingImage string으로 넘기면 되는지 확인 부탁!(swagger에는 string으로 명시 됨)
  customImages: FileList | undefined;
  isCompletedState: boolean;
  setIsCompletedState: React.Dispatch<React.SetStateAction<boolean>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setReceiptData: React.Dispatch<React.SetStateAction<resCustomInfoType | undefined>>;
}

const PriceFooter = ({
  customInfo,
  handDrawingImage,
  customImages,
  isCompletedState,
  setIsCompletedState,
  setStep,
  setReceiptData,
}: PriceFooterProps) => {
  // const navigate = useNavigate();

  const handleClickFooterBtn = async () => {
    setIsCompletedState(true);
    const formData = new FormData();
    try {
      // 1. handDrawingImage(손 그림) append
      formData.append('handDrawingImage', handDrawingImage);

      // 2. customInfo(커스텀 정보들) append
      const json = JSON.stringify(customInfo);
      const blob = new Blob([json], { type: 'application/json' });
      formData.append('customInfo', blob);

      // 3. customImage(도안 이미지) append
      if (customImages) {
        for (let i = 0; i < customImages.length; i++) {
          formData.append('customImages', customImages.item(i) as File);
        }
      }

      const { data } = await api.patch('/custom/update', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // console.log('data', data.data, '!!!!!');
      setReceiptData(data.data);
      setStep((prev) => prev + 1);
    } catch (err) {
      console.log('Error', err);
    }
  };

  return (
    <St.CustomFooter>
      <St.FooterButton type='button' onClick={handleClickFooterBtn}>
        접수 완료하기
      </St.FooterButton>
    </St.CustomFooter>
  );
};

const St = {
  CustomFooter: styled.footer`
    position: sticky;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 7rem;

    background-color: ${({ theme }) => theme.colors.gray9};
  `,

  FooterButton: styled.button`
    color: ${({ theme }) => theme.colors.pink5};
    ${({ theme }) => theme.fonts.title_semibold_18};
  `,
};

export default PriceFooter;
