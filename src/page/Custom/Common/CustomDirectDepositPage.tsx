import styled from 'styled-components';
import DepositInfo from '../../../components/DirectDeposit/Common/DepositInfo';
import AccountCopy from '../../../components/DirectDeposit/Common/AccountCopy';
import CustomDepositInfo from '../../../components/DirectDeposit/Custom/CustomDepositInfo';

const CustomDirectDepositPage = () => {
  return (
    <St.CustomDirectDepositPageWrapper>
      <DepositInfo chargeAmount={5000}>
        <CustomDepositInfo />
      </DepositInfo>
      <AccountCopy />
    </St.CustomDirectDepositPageWrapper>
  );
};

export default CustomDirectDepositPage;

const St = {
  CustomDirectDepositPageWrapper: styled.main`
    display: flex;
    flex-direction: column;

    padding: 0 2rem;
  `,
};
