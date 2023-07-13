import styled from 'styled-components';
import Sheet from 'react-modal-sheet';
import { IcCancelDark, IcMinusOneunder, IcPlus } from '../../assets/icon';

interface DetailBottomProps {
  isSheetOpen: boolean;
  setSheetOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DetailBottom = ({ isSheetOpen, setSheetOpen }: DetailBottomProps) => {
  const PRICE = 5000;
  const DELIVERY_PRICE = 3000;

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
          <St.Wrapper>
            <St.Stepper>
              <IcMinusOneunder />
              <span>1</span>
              <IcPlus />
            </St.Stepper>
            <St.PriceContainer>
              <St.Price>{PRICE.toLocaleString()}</St.Price>
              <St.PriceUnit>원</St.PriceUnit>
            </St.PriceContainer>
          </St.Wrapper>
          <St.DeliveryPrice>+ 배송비 {DELIVERY_PRICE.toLocaleString()}원</St.DeliveryPrice>
          <St.Line />
          <St.FinalPriceContainer>
            <St.PriceText></St.PriceText>
            <St.FinalPrice></St.FinalPrice>
          </St.FinalPriceContainer>
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
  DeliveryPrice: styled.p``,
  Line: styled.hr``,
  FinalPriceContainer: styled.p``,
  PriceText: styled.span``,
  FinalPrice: styled.span``,
};

const CustomSheet = styled(Sheet)`
  .react-modal-sheet-backdrop {
    background-color: rgba(0, 0, 0, 0.6) !important;
  }
  .react-modal-sheet-container {
    padding: 2.5rem 2.4rem 4.2rem 2.4rem;
    border-radius: 1rem !important;
  }
  // .react-modal-sheet-header
  .react-modal-sheet-container > div {
    display: flex;
    justify-content: space-between !important;
    margin-bottom: 2.8rem;
  }
  .react-modal-sheet-drag-indicator {
    display: none;
  }
`;
