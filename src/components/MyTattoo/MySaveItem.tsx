import { styled } from 'styled-components';
import { ImgStorage } from '../../assets/icon';
import useGetCustomDetail from '../../libs/hooks/useGetCustomDetail';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from '../../libs/api';

export interface CustomDetailItemProps {
  id: number;
  userId: number;
  stickerId?: number;
  themes: string[];
  styles: string[];
  // default 값 존재
  mainImageUrl: string;
  images: string[];
  haveDesign: boolean;
  size?: string;
  name: string;
  description?: string;
  demand?: string;
  count?: number;
  isColored?: boolean;
  isPublic?: boolean;
  isCompleted: boolean;
  process?: string;
  viewCount: number;
}

const MySaveItem = ({ id, name, imageUrl }: { id: number; name: string; imageUrl: string }) => {
  const navigate = useNavigate();
  const handleClickMySaveItem = async () => {
    try {
      const res = await api.get(`/user/custom/${id}`);
      const response: CustomDetailItemProps = res.data.data;
      const viewCount = response?.viewCount;
      const haveDesign = response?.haveDesign;

      navigateToNextPage(viewCount, haveDesign, response);
    } catch (error) {
      // Handle error here
    }
  };

  const navigateToNextPage = (
    viewCount: number,
    haveDesign: boolean,
    response: CustomDetailItemProps,
  ) => {
    switch (viewCount) {
      case 1:
        navigate('/custom-size', {
          state: {
            haveDesign: response.haveDesign,
            customId: response.id,
            customMainImage: response.mainImageUrl,
            customImages: response.images,
          },
        });
        break;
      case 2:
        haveDesign
          ? navigate(`/custom-reference`)
          : navigate(`/custom-img`, {
              state: {
                haveDesign: response.haveDesign,
                customMainImage: response.mainImageUrl,
              },
            });
        break;
      case 3:
        haveDesign
          ? navigate(`/styling-color`)
          : navigate(`/custom-request`, {
              state: {
                haveDesign: response.haveDesign,
                customMainImage: response.mainImageUrl,
              },
            });
        break;
      case 4:
        haveDesign
          ? navigate(`/select-keyword`)
          : navigate(`/price`, {
              state: {
                haveDesign: response.haveDesign,
              },
            });
        break;
      case 5:
        navigate('/custom-theme');
        break;
      case 6:
        navigate('/additional-request');
        break;
      case 7:
        navigate('/price');
        break;
      default:
        navigate('/custom-size');
        break;
    }
  };

  return (
    <St.MySaveItem onClick={handleClickMySaveItem}>
      <St.MySaveItemImg src={imageUrl} />
      <St.MySaveItemTitle>{name}</St.MySaveItemTitle>
    </St.MySaveItem>
  );
};

const St = {
  MySaveItem: styled.article`
    position: relative;

    & > svg {
      position: absolute;
    }
  `,

  MySaveItemImg: styled.img`
    width: 15.3rem;
    height: 16.3rem;

    background-color: ${({ theme }) => theme.colors.gray0};
  `,

  MySaveItemTitle: styled.h3`
    margin-top: 1.3rem;
    padding-left: 0.5rem;
    ${({ theme }) => theme.fonts.body_medium_14};
    color: ${({ theme }) => theme.colors.gray7};
  `,
};

export default MySaveItem;
