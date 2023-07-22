import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { customInfoType } from '../../types/customInfoType';
import api from '../../libs/api';

interface PriceFooterProps {
  haveDesign?: boolean;
  customInfo?: customInfoType;
  handDrawingImage: File;
  customImages?: FileList | null;
}

const PriceFooter = ({ customInfo, handDrawingImage, customImages }: PriceFooterProps) => {
  const navigate = useNavigate();

  const handleClickFooterBtn = async () => {
    const formData = new FormData();
    try {
      formData.append('handDrawingImage', handDrawingImage);
      const json = JSON.stringify(customInfo);
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
      // console.log('data', data.data);
      navigate('/receipt', {
        state: {
          data: data.data,
        },
      });
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
