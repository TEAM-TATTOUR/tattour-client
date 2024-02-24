import styled from 'styled-components';
import { IcCancelDark } from '../../assets/icon';
import { REFUND_ORDER_POLICY } from '../../assets/data/REFUND_ORDER_POLICY';
import { CustomSheet } from '../../common/BottomSheet';
import { useEffect } from 'react';

interface RefundBottomProps {
  isSheetOpen: boolean;
  setSheetOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const RefundBottom = ({ isSheetOpen, setSheetOpen }: RefundBottomProps) => {
  useEffect(() => {
    console.log('RefundButtom 리렌더링');
  });
  return (
    <CustomSheet isOpen={isSheetOpen} onClose={() => setSheetOpen(false)} disableDrag={true}>
      <CustomSheet.Container className='text-bottom-sheet'>
        <CustomSheet.Header disableDrag={false}>
          <St.Title>환불 정책</St.Title>
          <IcCancelDark onClick={() => setSheetOpen(false)} />
        </CustomSheet.Header>
        <CustomSheet.Content>
          <CustomSheet.Scroller>
            <St.Text>{REFUND_ORDER_POLICY}</St.Text>
          </CustomSheet.Scroller>
        </CustomSheet.Content>
      </CustomSheet.Container>
      <CustomSheet.Backdrop onTap={() => setSheetOpen(false)} />
    </CustomSheet>
  );
};

export default RefundBottom;

const St = {
  Title: styled.h2`
    margin-bottom: 2.8rem;
    ${({ theme }) => theme.fonts.title_semibold_20};
    color: ${({ theme }) => theme.colors.gray7};
  `,
  Text: styled.p`
    ${({ theme }) => theme.fonts.body_medium_14};
    color: ${({ theme }) => theme.colors.gray3};

    white-space: pre-wrap;
  `,
};

const CustomSheet = styled(Sheet)`
  display: flex;
  justify-content: center;

  .react-modal-sheet-backdrop {
    background-color: rgba(0, 0, 0, 0.6) !important;
  }
  .react-modal-sheet-container {
    padding: 2.5rem 2.4rem 0rem 2.4rem;
    // 모달 높이 낮추기
    height: calc(100% - 10.6rem) !important;
    left: initial !important;
    max-width: 43rem;

    border-radius: 1rem 1rem 0rem 0rem !important;
  }

  .react-modal-sheet-container > div {
    display: flex;
    justify-content: space-between !important;
  }

  .react-modal-sheet-scroller {
    padding-bottom: 6rem;
  }

  .react-modal-sheet-drag-indicator {
    display: none;
  }
`;
