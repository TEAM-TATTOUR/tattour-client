import { styled } from 'styled-components';
import { IcArrowRightDark } from '../../assets/icon';

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
  // img 대체
  const renderNullImage = () => {
    return (
      <div
        style={{
          width: '15.3rem',
          height: '16.3rem',
          backgroundColor: 'gray',
        }}
      ></div>
    );
  };

  return (
    <St.HotCustomSection>
      <St.Header>
        <St.HotCustomTitle>HOT CUSTOM</St.HotCustomTitle>
        <IcArrowRightDark />
      </St.Header>
      <St.HotCustomWrapper>
        {dummyItemList.map(({ id, title, discountRate, originalPrice }) => {
          return (
            <St.HotCustomItem key={id}>
              <St.labelWrapper>
                <St.HotCustomLabel>CUSTOM</St.HotCustomLabel>
                {renderNullImage()}
              </St.labelWrapper>
              <St.HotCustomItemTitle>{title}</St.HotCustomItemTitle>
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

  // title_eng_bold_20 필요
  HotCustomTitle: styled.h2`
    font-size: 2rem;
    font-weight: bold;
  `,

  HotCustomWrapper: styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.2rem;
    justify-content: space-between;
    margin-right: 1.2rem;

    overflow-x: scroll;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
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

    width: 6.9rem;
    height: 2.3rem;

    display: flex;
    justify-content: center;
    align-items: center;

    // body_eng_bold_10 필요
    font-size: 1rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.gray8};

    background-color: ${({ theme }) => theme.colors.pink5};
  `,

  HotCustomItemTitle: styled.h3`
    margin-top: 1.3rem;

    font: ${({ theme }) => theme.fonts.body_medium_14};
  `,

  HotCustomItemPriceWrapper: styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

    margin-top: 0.4rem;
  `,

  HotCustomItemDiscountRate: styled.span`
    // font title_extra_bold_16 추가 필요
    font-size: 1.6rem;
    font-weight: bold;
    margin-right: 0.5rem;

    color: ${({ theme }) => theme.colors.pink5};
  `,
  HotCustomItemPrice: styled.p`
    // font title_extra_bold_16 추가 필요
    font-size: 1.6rem;
    font-weight: bold;
  `,
  HotCustomItemOriginPrice: styled.span`
    margin-top: 0.1rem;
    margin-bottom: 4.1rem;

    font: ${({ theme }) => theme.fonts.body_line_medium_14};
    color: ${({ theme }) => theme.colors.gray1};
  `,
};

export default HotCustom;
