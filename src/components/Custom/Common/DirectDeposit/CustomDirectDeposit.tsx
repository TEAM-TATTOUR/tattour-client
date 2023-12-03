import styled from 'styled-components';
import CustomDepositInfo from './CustomDirectDepositInfo';
import DepositInfo from '../../../DirectDeposit/DepositInfo';
import AccountCopy from '../../../DirectDeposit/AccountCopy';

const CustomDirectDeposit = ({
  setIsActiveNext,
}: {
  setIsActiveNext: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <St.CustomDirectDepositPageWrapper>
      <DepositInfo depositAmount={5000}>
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