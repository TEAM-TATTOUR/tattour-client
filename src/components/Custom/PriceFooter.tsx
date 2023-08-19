import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { customInfoType } from '../../types/customInfoType';
import api from '../../libs/api';
import React from 'react';

interface PriceFooterProps {
  haveDesign?: boolean;
  customInfo: customInfoType;
  handDrawingImage: string;
  customImages: FileList | undefined;
  isCompleted?: boolean;
  handleCompletedState?: () => void;
  isCompletedState?: boolean;

  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const PriceFooter = ({ customInfo, handDrawingImage, customImages, setStep }: PriceFooterProps) => {
  // const navigate = useNavigate();

  const handleClickFooterBtn = async () => {
    const formData = new FormData();
    try {
      // handleCompletedState(); 이렇게 하면 안되는 듯,,
      formData.append('handDrawingImage', handDrawingImage);
      // const newCustomInfo = {
      //   ...customInfo,
      //   isCompleted: true,
      // };
      const newCustomInfo = customInfo;
      const json = JSON.stringify(newCustomInfo);
      const blob = new Blob([json], { type: 'application/json' });

      formData.append('customInfo', blob);

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
      console.log('data', data.data, '!!!!!');
      // navigate('/receipt', {
      //   state: {
      //     data: data.data,
      //   },
      // });
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
