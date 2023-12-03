import styled from 'styled-components';
import CustomDepositInfo from './CustomDirectDepositInfo';
import DepositInfo from '../../../DirectDeposit/DepositInfo';
import AccountCopy from '../../../DirectDeposit/AccountCopy';

const CustomDirectDeposit = () => {
  return (
    <St.CustomDirectDepositPageWrapper>
      <DepositInfo chargeAmount={5000}>
        <CustomDepositInfo />
      </DepositInfo>
      <AccountCopy />
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
