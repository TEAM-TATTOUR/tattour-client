import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { api } from '../../libs/api';

export interface CustomDetailItemProps {
  id: number;
  userId: number;
  stickerId?: number;
  themes: string[];
  styles: string[];
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
  handDrawingImageUrl?: string;
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
    console.log(response);
    switch (viewCount) {
      case 0:
        navigate('/custom', {
          state: {
            step: 1,
            haveDesign: haveDesign,
            customId: response.id,
          },
        });
        break;
      case 1:
        if (haveDesign) {
          navigate('/haveDesign', {
            state: {
              step: 1,
              haveDesign: haveDesign,
              customId: response.id,
              size: response.size,
              handDrawingImageUrl: response.handDrawingImageUrl,
              mainImageUrl: response.mainImageUrl,
              images: response.images,
            },
          });
        } else {
          navigate('/noDesign', {
            state: {
              step: 1,
              size: response.size,
              haveDesign: haveDesign,
              customId: response.id,
            },
          });
        }
        break;
      case 2:
        if (haveDesign) {
          navigate('/haveDesign', {
            state: {
              step: 2,
              haveDesign: haveDesign,
              customId: response.id,
              size: response.size,
              handDrawingImageUrl: response.handDrawingImageUrl,
              mainImageUrl: response.mainImageUrl,
              images: response.images,
              isColored: response.isColored,
            },
          });
        } else {
          navigate('/noDesign', {
            state: {
              step: 2,
              size: response.size,
              name: response.name,
              demand: response.demand,
              haveDesign: haveDesign,
              customId: response.id,
              customImages: response.images,
              mainImageUrl: response.mainImageUrl,
            },
          });
        }
        break;
      case 3:
        if (haveDesign) {
          navigate('/haveDesign', {
            state: {
              step: 3,
              haveDesign: haveDesign,
              customId: response.id,
              size: response.size,
              handDrawingImageUrl: response.handDrawingImageUrl,
              mainImageUrl: response.mainImageUrl,
              images: response.images,
              isColored: response.isColored,
              themes: response.themes,
              styles: response.styles,
            },
          });
        } else {
          navigate('/noDesign', {
            state: {
              step: 3,
              name: response.name,
              demand: response.demand,
              size: response.size,
              haveDesign: haveDesign,
              customId: response.id,
              customImages: response.images,
              mainImageUrl: response.mainImageUrl,
            },
          });
        }
        break;
      case 4:
        navigate('/haveDesign', {
          state: {
            step: 4,
            haveDesign: haveDesign,
            customId: response.id,
            size: response.size,
            handDrawingImageUrl: response.handDrawingImageUrl,
            mainImageUrl: response.mainImageUrl,
            images: response.images,
            isColored: response.isColored,
            themes: response.themes,
            styles: response.styles,
            name: response.name,
            description: response.description,
          },
        });
        break;
      case 5:
        navigate('/haveDesign', {
          state: {
            step: 5,
            haveDesign: haveDesign,
            customId: response.id,
            size: response.size,
            handDrawingImageUrl: response.handDrawingImageUrl,
            mainImageUrl: response.mainImageUrl,
            images: response.images,
            isColored: response.isColored,
            themes: response.themes,
            styles: response.styles,
            name: response.name,
            description: response.description,
            demand: response.demand,
          },
        });
        break;
      case 6:
        navigate('/haveDesign', {
          state: {
            step: 6,
            haveDesign: haveDesign,
            customId: response.id,
            size: response.size,
            handDrawingImageUrl: response.handDrawingImageUrl,
            mainImageUrl: response.mainImageUrl,
            images: response.images,
            isColored: response.isColored,
            themes: response.themes,
            styles: response.styles,
            name: response.name,
            description: response.description,
            demand: response.demand,
            count: response.count,
            isPublic: response.isPublic,
          },
        });
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
