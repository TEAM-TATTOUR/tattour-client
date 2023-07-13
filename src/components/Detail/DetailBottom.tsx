import styled from 'styled-components';
import Sheet from 'react-modal-sheet';
import { IcCancelDark, IcMinus, IcMinusOneunder, IcPlus } from '../../assets/icon';
import DetailFooter from './DetailFooter';
import { useEffect, useState } from 'react';

interface DetailBottomProps {
  isSheetOpen: boolean;
  setSheetOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DetailBottom = ({ isSheetOpen, setSheetOpen }: DetailBottomProps) => {
  // '구매하기' 누르면서 바텀 시트 올라오자마자 서버한테 받아올 데이터
  // 사용자가 보유한 포인트, 상품1개 수량, 배송비

  const PRICE = 2500;
  const DELIVERY_PRICE = 3000;
  const MY_POINT = 10000;

  const [count, setCount] = useState(1);
  const [isLack, setLack] = useState(false);

  useEffect(() => {
    if (MY_POINT < count * PRICE + DELIVERY_PRICE) {
      setLack(true);
    }
  }, [count]);

  return (
    <CustomSheet
      isOpen={isSheetOpen}
      onClose={() => setSheetOpen(false)}
      detent='content-height'
      disableDrag={true}
    >
      <Sheet.Container>
        <Sheet.Header disableDrag={true}>
          <St.Title>수량</St.Title>
          <IcCancelDark onClick={() => setSheetOpen(false)} />
        </Sheet.Header>
        <Sheet.Content>
          <St.FullBox>
            <St.Wrapper>
              <St.Stepper>
                {count === 1 ? (
                  <IcMinusOneunder />
                ) : (
                  <IcMinus onClick={() => setCount((prev) => prev - 1)} />
                )}
                <span>{count}</span>
                <IcPlus onClick={() => setCount((prev) => prev + 1)} />
              </St.Stepper>
              <St.PriceContainer>
                <St.Price>{(count * PRICE).toLocaleString()}</St.Price>
                <St.PriceUnit>원</St.PriceUnit>
              </St.PriceContainer>
            </St.Wrapper>
            <St.DeliveryPrice>+ 배송비 {DELIVERY_PRICE.toLocaleString()}원</St.DeliveryPrice>
            <St.Line />
            <St.FinalPriceContainer>
              <St.PriceText>결제 금액</St.PriceText>
              <St.FinalPrice $isLack={isLack}>
                {(count * PRICE + DELIVERY_PRICE).toLocaleString()}
              </St.FinalPrice>
              <St.PriceText>원</St.PriceText>
            </St.FinalPriceContainer>
            <St.LackText $isLack={isLack}>보유 포인트가 부족합니다</St.LackText>
          </St.FullBox>
          <DetailFooter
            setSheetOpen={setSheetOpen}
            isSecond={true}
            text={isLack ? '충전하기' : '구매하기'}
          />
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={() => setSheetOpen(false)} />
    </CustomSheet>
  );
};

export default DetailBottom;

const St = {
  Title: styled.h2`
    ${({ theme }) => theme.fonts.title_semibold_20};
    color: ${({ theme }) => theme.colors.gray7};
  `,
  FullBox: styled.div`
    padding: 0rem 2.4rem 0rem 2.4rem;
  `,
  Wrapper: styled.article`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Stepper: styled.article`
    display: flex;
    justify-content: space-between;
    width: 8.9rem;

    & > span {
      ${({ theme }) => theme.fonts.title_semibold_18};
      color: ${({ theme }) => theme.colors.gray6};
    }
  `,
  PriceContainer: styled.p`
    display: flex;
    align-items: center;
  `,
  Price: styled.span`
    ${({ theme }) => theme.fonts.title_semibold_18};
    color: ${({ theme }) => theme.colors.gray4};
  `,
  PriceUnit: styled.span`
    ${({ theme }) => theme.fonts.body_medium_16};
    color: ${({ theme }) => theme.colors.gray4};
  `,
  DeliveryPrice: styled.p`
    display: flex;
    justify-content: flex-end;
    margin-top: 0.7rem;

    ${({ theme }) => theme.fonts.body_medium_14};
    color: ${({ theme }) => theme.colors.gray2};
  `,
  Line: styled.hr`
    height: 0.1rem;
    margin: 1.7rem -2.4rem 1.6rem -2.4rem;

    background-color: ${({ theme }) => theme.colors.gray0};
    border-width: 0rem;
  `,
  FinalPriceContainer: styled.p`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 0.4rem;

    & > span:nth-child(1) {
      margin-right: 1.2rem;
    }

    & > span:nth-child(3) {
      margin-left: 0.4rem;
    }
  `,
  PriceText: styled.span`
    ${({ theme }) => theme.fonts.body_medium_14};
    color: ${({ theme }) => theme.colors.gray4};
  `,
  FinalPrice: styled.span<{ $isLack: boolean }>`
    ${({ theme }) => theme.fonts.title_extrabold_24};
    color: ${({ theme, $isLack }) => ($isLack ? theme.colors.red : theme.colors.gray7)};
  `,
  LackText: styled.p<{ $isLack: boolean }>`
    display: flex;
    justify-content: flex-end;
    ${({ theme }) => theme.fonts.detail_medium_12};
    color: ${({ theme, $isLack }) => ($isLack ? theme.colors.red : theme.colors.white)};
  `,
};

const CustomSheet = styled(Sheet)`
  .react-modal-sheet-backdrop {
    background-color: rgba(0, 0, 0, 0.6) !important;
  }
  .react-modal-sheet-container {
    padding: 2.5rem 0rem 9.2rem 0rem;
    border-radius: 1rem !important;
  }
  // .react-modal-sheet-header
  .react-modal-sheet-container > div:nth-child(1) {
    display: flex;
    justify-content: space-between !important;
    margin-bottom: 2.8rem;
    padding: 0rem 2.4rem 0rem 2.4rem;
  }
  .react-modal-sheet-drag-indicator {
    display: none;
  }
`;
