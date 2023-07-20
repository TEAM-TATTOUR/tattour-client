import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { customInfoType } from '../../types/customInfoType';

interface PriceFooterProps {
  isActiveNext?: boolean;
  haveDesign?: boolean;
  customInfo?: customInfoType;
  customMainImage?: File;
  customImages?: FileList;
}

const PriceFooter = ({
  isActiveNext = true,
  haveDesign,
  customInfo,
  customMainImage,
  customImages,
}: PriceFooterProps) => {
  const navigate = useNavigate();

  const handleClickFooter = () => {
    {
      isActiveNext &&
        navigate('/receipt', {
          state: {
            haveDesign: haveDesign,
            customInfo: customInfo,
            customMainImage: customMainImage,
            customImages: customImages,
          },
        });
    }
  };

  return (
    <St.CustomFooter>
      <St.FooterButton type='button' onClick={handleClickFooter}>
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
