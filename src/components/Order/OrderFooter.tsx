import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { OrderSheetProps } from '../../libs/hooks/order/useGetOrdersheet';

interface OrderRequest {
  stickerId: number;
  productAmount: number;
  shippingFee: number;
  totalAmount: number | undefined;
  recipientName: string;
  contact: string;
  mailingAddress: string;
  baseAddress: string;
  detailAddress: string;
}

const OrderFooter = ({
  isComplete,
  price,
  postData,
  response,
  stickerId,
  count,
}: {
  isComplete: boolean;
  price: number | undefined;
  postData: OrderRequest;
  response: OrderSheetProps | undefined;
  stickerId: number;
  count: number;
  setOrderLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate('/order-deposit', {
      state: {
        postData: postData,
        stickerId: stickerId,
        count: count,
        orderAmountDetailRes: response?.orderAmountDetailRes,
      },
    });
  };

  return (
    <St.footer>
      <St.button
        $isComplete={isComplete}
        type='button'
        onClick={handleClickButton}
        disabled={isComplete ? false : true}
      >
        {price && price.toLocaleString()}원 결제하기
      </St.button>
    </St.footer>
  );
};

export default OrderFooter;

const St = {
  footer: styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    bottom: 0;

    max-width: 43rem;
    width: 100%;
    height: 7rem;
  `,

  button: styled.button<{ $isComplete: boolean }>`
    width: 100%;
    height: 100%;

    background-color: ${({ theme, $isComplete }) =>
      $isComplete ? theme.colors.gray9 : theme.colors.gray3};

    color: ${({ theme, $isComplete }) => ($isComplete ? theme.colors.pink5 : theme.colors.white)};
    ${({ theme }) => theme.fonts.title_semibold_18};
  `,
};
