import styled from 'styled-components';
import CustomDepositInfo from './CustomDirectDepositInfo';
import DepositInfo from '../../../DirectDeposit/DepositInfo';
import AccountCopy from '../../../DirectDeposit/AccountCopy';

const CustomDirectDeposit = ({
  setIsActiveNext,
  totalPrice,
}: {
  setIsActiveNext: React.Dispatch<React.SetStateAction<boolean>>;
  totalPrice: number;
}) => {
  return (
    <St.CustomDirectDepositPageWrapper>
      <DepositInfo depositAmount={totalPrice}>
        <CustomDepositInfo />
      </DepositInfo>
      <AccountCopy setIsActiveNext={setIsActiveNext} />
    </St.CustomDirectDepositPageWrapper>
  );
};

export default CustomDirectDeposit;

const St = {
  CustomDirectDepositPageWrapper: styled.main`
    display: flex;
    flex-direction: column;

    padding: 0 2rem;
  `,
};
