import styled from 'styled-components';
import Sheet from 'react-modal-sheet';
import { IcCancelDark, IcMinusOneunder, IcPlus } from '../../assets/icon';
import DetailFooter from './DetailFooter';
import { useState } from 'react';

interface DetailBottomProps {
  isSheetOpen: boolean;
  setSheetOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DetailBottom = ({ isSheetOpen, setSheetOpen }: DetailBottomProps) => {
  const PRICE = 5000;
  const DELIVERY_PRICE = 3000;
  const FINAL_PRICE = 8500;

  const [count, setCount] = useState(1);

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
                <IcMinusOneunder onClick={() => setCount((prev) => prev - 1)} />
                <span>{count}</span>
                <IcPlus onClick={() => setCount((prev) => prev + 1)} />
              </St.Stepper>
              <St.PriceContainer>
                <St.Price>{PRICE.toLocaleString()}</St.Price>
                <St.PriceUnit>원</St.PriceUnit>
              </St.PriceContainer>
            </St.Wrapper>
            <St.DeliveryPrice>+ 배송비 {DELIVERY_PRICE.toLocaleString()}원</St.DeliveryPrice>
            <St.Line />
            <St.FinalPriceContainer>
              <St.PriceText>결제 금액</St.PriceText>
              <St.FinalPrice>{FINAL_PRICE.toLocaleString()}</St.FinalPrice>
              <St.PriceText>원</St.PriceText>
            </St.FinalPriceContainer>
          </St.FullBox>
          <DetailFooter setSheetOpen={setSheetOpen} isSecond={true} />
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
    margin-bottom: 11.2rem;

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
  FinalPrice: styled.span`
    ${({ theme }) => theme.fonts.title_extrabold_24};
    color: ${({ theme }) => theme.colors.gray7};
  `,
};

const CustomSheet = styled(Sheet)`
  .react-modal-sheet-backdrop {
    background-color: rgba(0, 0, 0, 0.6) !important;
  }
  .react-modal-sheet-container {
    padding: 2.5rem 0rem 0rem 0rem;
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
