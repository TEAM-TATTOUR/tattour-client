import { useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { customInfoType } from '../../types/customInfoType';
import { useState } from 'react';

interface NextFooterProps {
  isActiveNext?: boolean;
  navigateURL: string;
  haveDesign?: boolean;
  customInfo?: customInfoType;
  customMainImage?: File | null;
  customImages?: FileList | null;
  freeDraw?: boolean;
}

const NextFooter = ({
  isActiveNext = true,
  navigateURL,
  haveDesign,
  customInfo,
  customMainImage,
  customImages,
  freeDraw,
}: NextFooterProps) => {
  const navigate = useNavigate();

  const location = useLocation();
  console.log(location.state);

  const handleClickFooter = () => {
    {
      isActiveNext &&
        navigate(navigateURL, {
          state: {
            haveDesign: haveDesign,
            customInfo: customInfo,
            customMainImage: customMainImage,
            customImages: customImages,
            freeDraw: freeDraw,
          },
        });
    }
  };

  return (
    <St.NextFooter $isActiveNext={isActiveNext} onClick={handleClickFooter}>
      <St.FooterText>다음</St.FooterText>
    </St.NextFooter>
  );
};

export default NextFooter;

const St = {
  NextFooter: styled.footer<{ $isActiveNext: boolean }>`
    position: sticky;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 7rem;

    background-color: ${({ $isActiveNext, theme }) =>
      $isActiveNext ? theme.colors.gray9 : theme.colors.gray3};
  `,

  FooterText: styled.p`
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.title_semibold_18};
  `,
};
