import { styled } from 'styled-components';
import ScrollContainer from 'react-indiana-drag-scroll';
import { useNavigate } from 'react-router-dom';
import { IcArrowRightDark, LabelCustomSmall } from '../assets/icon';
import useGetHotCustom from '../libs/hooks/useGetHotCustom';

const HotCustom = () => {
  const navigate = useNavigate();

  const handleClickHotCustom = () => {
    navigate('/list');
  };

  const handleClickSticker = (id: number) => () => {
    navigate(`/detail/${id}`);
  };

  const { response, error, loading } = useGetHotCustom();

  return (
    <St.HotCustomSection>
      <St.Header>
        <St.HotCustomButton type='button' onClick={handleClickHotCustom}>
          <St.HotCustomTitle>HOT CUSTOM</St.HotCustomTitle>
          <IcArrowRightDark />
        </St.HotCustomButton>
      </St.Header>
      <St.HotCustomWrapper>
        <ScrollContainer className='scroll-container' vertical={false} hideScrollbars={true}>
          {!loading &&
            !error &&
            response.map(({ id, name, imageUrl, discountRate, discountPrice, price }) => {
              return (
                <St.HotCustomItem key={id} onClick={handleClickSticker(id)}>
                  <St.labelWrapper>
                    <St.HotCustomLabel>
                      <LabelCustomSmall />
                    </St.HotCustomLabel>
                    <St.ImgWrapper>
                      <St.HotCustomImage src={imageUrl} />
                    </St.ImgWrapper>
                  </St.labelWrapper>
                  <St.HotCustomItemTitle>
                    <p>{name}</p>
                    <span>NEW!</span>
                  </St.HotCustomItemTitle>
                  <St.HotCustomItemPriceWrapper>
                    <St.HotCustomItemDiscountRate>
                      {discountRate ? discountRate : 5}%
                    </St.HotCustomItemDiscountRate>
                    <St.HotCustomItemPrice>
                      {discountPrice ? discountPrice.toLocaleString() : '4,000'}원
                    </St.HotCustomItemPrice>
                  </St.HotCustomItemPriceWrapper>
                  <St.HotCustomItemOriginPrice>
                    {price.toLocaleString()}원
                  </St.HotCustomItemOriginPrice>
                </St.HotCustomItem>
              );
            })}
        </ScrollContainer>
      </St.HotCustomWrapper>
    </St.HotCustomSection>
  );
};

const St = {
  HotCustomSection: styled.section`
    padding-left: 2rem;
  `,

  Header: styled.header`
    display: flex;
    justify-content: start;
    align-items: center;

    margin-top: 2.8rem;
    margin-bottom: 2.2rem;
  `,

  HotCustomButton: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0rem; // HOT CUSTOM 왼쪽 padding 삭제

    background-color: transparent;
    border: none;
  `,

  HotCustomTitle: styled.h2`
    ${({ theme }) => theme.fonts.title_eng_bold_20};
    color: ${({ theme }) => theme.colors.gray8};
  `,

  HotCustomImage: styled.img`
    width: 15.3rem;
    height: 16.3rem;
  `,

  HotCustomWrapper: styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.2rem;
    justify-content: space-between;
    margin-right: 1.2rem;

    .scroll-container {
      display: flex;
      flex-direction: row;
      gap: 1.2rem;

      height: 28rem;
      width: 100%;
    }
  `,

  HotCustomItem: styled.article`
    display: flex;
    flex-direction: column;

    width: 15.3rem;
  `,

  labelWrapper: styled.div`
    position: relative;
  `,

  HotCustomLabel: styled.span`
    position: absolute;
  `,

  ImgWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 15.3rem;
    height: 16.3rem;

    background-color: ${({ theme }) => theme.colors.gray0};
  `,
  HotCustomItemTitle: styled.h3`
    display: flex;
    gap: 0.6rem;
    align-items: center;

    margin-top: 1.3rem;
    margin-left: 0.5rem;

    & > p {
      ${({ theme }) => theme.fonts.body_medium_14};
    }

    & > span {
      ${({ theme }) => theme.fonts.detail_medium_12};
      color: ${({ theme }) => theme.colors.pink3};
    }
  `,

  HotCustomItemPriceWrapper: styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

    margin-top: 0.4rem;
    margin-left: 0.5rem;
  `,

  HotCustomItemDiscountRate: styled.span`
    margin-right: 0.5rem;

    ${({ theme }) => theme.fonts.title_extrabold_16};
    color: ${({ theme }) => theme.colors.pink5};
  `,
  HotCustomItemPrice: styled.p`
    ${({ theme }) => theme.fonts.title_extrabold_16};
  `,
  HotCustomItemOriginPrice: styled.span`
    margin-top: 0.1rem;
    margin-bottom: 4.1rem;
    margin-left: 0.5rem;

    ${({ theme }) => theme.fonts.body_line_medium_14};
    color: ${({ theme }) => theme.colors.gray1};
  `,
};

export default HotCustom;
