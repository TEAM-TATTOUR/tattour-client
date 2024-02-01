import styled from 'styled-components';
import DepositInfo from '../../DirectDeposit/DepositInfo';
import AccountCopy from '../../DirectDeposit/AccountCopy';
import OrderDepositInfo from './OrderDepositInfo';

interface OrderDepositProps {
  setIsActiveNext: React.Dispatch<React.SetStateAction<boolean>>;
  state: {
    orderAmountDetailRes: {
      totalAmount: number;
    };
  };
}

const OrderDeposit = ({ setIsActiveNext, state }: OrderDepositProps) => {
  const { totalAmount } = state.orderAmountDetailRes;
  return (
    <St.CustomDirectDepositPageWrapper>
      <DepositInfo depositAmount={totalAmount}>
        <OrderDepositInfo />
      </DepositInfo>
      <AccountCopy setIsActiveNext={setIsActiveNext} />
    </St.CustomDirectDepositPageWrapper>
  );
};

export default OrderDeposit;

const St = {
  CustomDirectDepositPageWrapper: styled.main`
    display: flex;
    flex-direction: column;

    padding: 0 2rem;
  `,
};
