import { useState } from 'react';
import Header from '../../components/Header';
import PageLayout from '../../components/PageLayout';
import DirectDepositFooter from '../../components/DirectDeposit/DirectDepositFooter';
import { useLocation } from 'react-router-dom';
import CheckDepositModal from '../../common/Modal/CheckDepositModal/CheckDepositModal';
import BackBtn from '../../common/Header/BackBtn';
import { IcCancelDark } from '../../assets/icon';
import OrderDeposit from '../../components/Order/Deposit/OrderDeposit';

const OrderDepositPage = () => {
  const [depositModalOn, setDepositModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);

  const location = useLocation();

  const renderCustomDirectDepositPageHeader = () => {
    return (
      <Header
        leftSection={<BackBtn />}
        title='무통장 입금'
        rightSection={
          <IcCancelDark />
        }
      />
    );
  };

  const handleClickFooter = () => {
    {
      isActiveNext && setDepositModalOn(true);
    }
  };

  return (
    <PageLayout
      renderHeader={renderCustomDirectDepositPageHeader}
      footer={
        <DirectDepositFooter isActiveNext={isActiveNext} handleClickFooter={handleClickFooter} />
      }
    >
      {depositModalOn && (
        <CheckDepositModal setModalOn={setDepositModalOn} setIsActiveNext={setIsActiveNext} state={location.state}/>
      )}
      <OrderDeposit setIsActiveNext={setIsActiveNext} state={location.state}/>
    </PageLayout>
  );
};

export default OrderDepositPage;
