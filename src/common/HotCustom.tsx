import { styled } from 'styled-components';
import ScrollContainer from 'react-indiana-drag-scroll';
import { useNavigate } from 'react-router-dom';
import { IcArrowRightDark, LabelCustomSmall } from '../assets/icon';
import test_tattoo from '../assets/test_tattoo.png';

interface HotCustomItemProps {
  id: number;
  img: string;
  title: string;
  originalPrice: number;
  discountRate: number;
}

const dummyItemList: HotCustomItemProps[] = [
  {
    id: 1,
    img: '',
    title: '고양이 리본 타투',
    originalPrice: 4000,
    discountRate: 25,
  },
  {
    id: 2,
    img: '',
    title: '고양이 리본 타투',
    originalPrice: 4000,
    discountRate: 25,
  },
  {
    id: 3,
    img: '',
    title: '고양이 리본 타투',
    originalPrice: 4000,
    discountRate: 25,
  },
];

const HotCustom = () => {
  const navigate = useNavigate();

  const handleClickHotCustom = () => {
    // 추후 수정
    navigate('/tattoo');
  };

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
          {dummyItemList.map(({ id, title, discountRate, originalPrice }) => {
            return (
              <St.HotCustomItem key={id}>
                <St.labelWrapper>
                  <St.HotCustomLabel>
                    <LabelCustomSmall />
                  </St.HotCustomLabel>
                  <St.ImgWrapper>
                    <img src={test_tattoo} />
                  </St.ImgWrapper>
                </St.labelWrapper>
                <St.HotCustomItemTitle>
                  <p>{title}</p>
                  <span>NEW!</span>
                </St.HotCustomItemTitle>
                <St.HotCustomItemPriceWrapper>
                  <St.HotCustomItemDiscountRate>{discountRate}%</St.HotCustomItemDiscountRate>
                  <St.HotCustomItemPrice>
                    {(originalPrice * discountRate * 0.01).toLocaleString()}원
                  </St.HotCustomItemPrice>
                </St.HotCustomItemPriceWrapper>
                <St.HotCustomItemOriginPrice>
                  {originalPrice.toLocaleString()}원
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

    ${({ theme }) => theme.fonts.body_line_medium_14};
    color: ${({ theme }) => theme.colors.gray1};
  `,
};

export default HotCustom;
