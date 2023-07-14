import { styled } from 'styled-components';
import Sheet from 'react-modal-sheet';
import { IcCancelDark } from '../../assets/icon';
interface PrePointPolicyProps {
  isSheetOpen: boolean;
  setSheetOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SelectCustomPolicyBottom = ({ isSheetOpen, setSheetOpen }: PrePointPolicyProps) => {
  return (
    <CustomSheet isOpen={isSheetOpen} onClose={() => setSheetOpen(false)} disableDrag={true}>
      <Sheet.Container>
        <Sheet.Header disableDrag={false}>
          <St.SheetTitle>커스텀 도안 환불 정책</St.SheetTitle>
          <IcCancelDark onClick={() => setSheetOpen(false)} />
        </Sheet.Header>
        <Sheet.Content>
          <Sheet.Scroller>
            <St.SheetText>
              제 1조 - 취소 및 환불 고객은 커스텀 도안 신청을 한 이후에는 신청서를 회수 및 취소할 수
              없습니다. 고객의 구매 취소 요청은 다음 각호와 같이 처리됩니다. 배송요청 상태 : 즉시
              취소처리가 완료되는 것이 원칙이나 이미 작품이 발송이 된 경우 발송된 작품의
              왕복배송비는 고객이 부담 취소처리에 따른 환불 포인트결제 - 취소절차가 완료된 즉시 결제
              취소 1시간 이내 포인트 재충전 제 2조 - 반품 및 환불 고객은 제품 배송완료일로부터 7일
              이내에 반품요청을 할 수 있습니다. 단, 고객의 귀책사유로 제품이 훼손된 경우, 사용이나
              일부 소비로 인해 제품의 가치가 현저히 감소한 경우는 예외로 합니다. 반품에 소요되는
              비용은 반품에 대한 귀책사유가 있는 자에게 귀속(단순변심 : 고객부담, 제품하자 :
              회사부담)되나, 고객이 반품 신청 절차에서 반품 송장번호를 미 기재하거나 반품사유에
              관하여 작가회원에게 정확히 통보하지 않을 경우 반품처리 및 환불이 지연될 수 있습니다.
              반품배송비를 고객이 부담하여야 하는 경우 반품배송비의 추가 결제가 이루어지지 않으면
              환불이 지연될 수 있습니다. 반품에 따른 환불은 반품 제품이 회사에 도착되고 반품사유 및
              반품배송비 부담자가 확인된 이후에 즉시 결제가 취소됩니다. 제 3조 - 교환 및 환불 고객이
              제품 수령 후 교환이나 환불을 요청하는 경우 회사는 관련 법률에 의거하여 반품을 받은 후
              교환이나 환불을 해주어야 하며, 추가로 발생하는 비용은 교환이나 환불의 책임이 있는 측이
              부담합니다. 고객은 제품을 배송 받은 날로부터 관계법령에 의거하여 7일 이내에 교환을
              신청할 수 있으며, 물품하자로 인한 교환의 경우에는 회사가 왕복배송비를 부담하나 고객의
              변심에 의한 경우에는 고객이 부담합니다. 교환신청을 하더라도 작가회원에게 교환할 물품의
              재고가 없는 경우에는 교환이 불가능하며, 이 경우에 해당 교환신청은 반품으로 처리됩니다.
              포인트결제를 통한 구매건의 환불은 원칙적으로 포인트결제 취소를 통해서만 가능합니다.
              **교환 및 환불의 제한 다음 각 호의 경우에는 고객은 환불 또는 교환을 요청할 수 없습니다
              관계 법령에 의한 경우 고객의 귀책사유로 말미암아 작품이 멸실•훼손된 경우 고객의 사용
              또는 일부 소비에 의하여 작품의 가치가 현저히 감소한 경우 시간의 경과에 의하여 재판매가
              곤란할 정도로 작품의 가치가 현저히 감소한 경우 복제가 가능한 작품의 포장을 훼손한 경우
              기타 고객이 환불 또는 교환을 요청할 수 없는 합리적인 사유가 있는 경우
            </St.SheetText>
          </Sheet.Scroller>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={() => setSheetOpen(false)} />
    </CustomSheet>
  );
};

export default SelectCustomPolicyBottom;

const St = {
  SheetTitle: styled.h2`
    ${({ theme }) => theme.fonts.title_semibold_20};
    color: ${({ theme }) => theme.colors.gray7};
  `,
  SheetText: styled.p`
    ${({ theme }) => theme.fonts.body_medium_16};
    color: ${({ theme }) => theme.colors.gray3};

    overflow: auto;
    white-space: pre-wrap;
  `,
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
