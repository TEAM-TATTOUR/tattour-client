import AccountCopy from '../../../components/DirectDeposit/AccountCopy';
import DepositInfo from '../../../components/DirectDeposit/DepositInfo';

const CustomDirectDepositPage = () => {
  return (
    <>
      <DepositInfo chargeAmount={5000}>
        <div>신청서를~</div>
      </DepositInfo>
      <AccountCopy />
    </>
  );
};

export default CustomDirectDepositPage;
