import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { customInfoType } from '../../types/customInfoType';
import api from '../../libs/api';
import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';

interface PriceFooterProps {
  haveDesign?: boolean;
  customInfo?: customInfoType;
  customMainImage: File;
  customImages: FileList;
}

const PriceFooter = ({
  haveDesign,
  customInfo,
  customMainImage,
  customImages,
}: PriceFooterProps) => {
  const navigate = useNavigate();

  const handlePatchCustom = () => {
    const [response, setResponse] = useState<CustomResponse['data'] | null>(null);
    const [error, setError] = useState<AxiosError>();

    const fetchData = async () => {
      const formData = new FormData();
      formData.append('customInfo', JSON.stringify(customInfo));
      formData.append('customMainImage', customMainImage);
      if (customImages) {
        for (let i = 0; i < customImages.length; i++) {
          formData.append('customImages', customImages[i]);
        }
      }

      try {
        await api.patch('/custom/update', formData);

        navigate('/receipt', {
          state: {
            haveDesign: haveDesign,
            customInfo: customInfo,
            customMainImage: customMainImage,
            customImages: customImages,
          },
        });
      } catch (err) {
        setError(err);
      }
    };
    return { response, error };
  };
  return (
    <St.CustomFooter>
      <St.FooterButton type='button' onClick={handlePatchCustom}>
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
