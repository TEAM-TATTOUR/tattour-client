import AccountCopy from '../../../components/DirectDeposit/AccountCopy';
import DepositMain from '../../../components/DirectDeposit/DepositMain';

const CustomDirectDepositPage = () => {
  return (
    <>
      <DepositMain chargeAmount={5000} />
      <AccountCopy />
    </>
  );
};

export default CustomDirectDepositPage;
