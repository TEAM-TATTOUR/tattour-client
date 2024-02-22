import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IcCancelDark } from '../../assets/icon';
import BackBtn from '../../common/Header/BackBtn';
import CheckDepositModal from '../../common/Modal/CheckDepositModal/CheckDepositModal';
import DirectDepositFooter from '../../components/DirectDeposit/DirectDepositFooter';
import Header from '../../components/Header';
import OrderDeposit from '../../components/Order/Deposit/OrderDeposit';
import PageLayout from '../../components/PageLayout';

const OrderDepositPage = () => {
  const [depositModalOn, setDepositModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);

  const location = useLocation();

  const renderCustomDirectDepositPageHeader = () => {
    return <Header leftSection={<BackBtn />} title='무통장 입금' rightSection={<IcCancelDark />} />;
  };

  const handleClickFooter = () => {
    {
      isActiveNext && setDepositModalOn(true);
    }
  };

  const handleClickOrderDepositBtn = () => {
    //@구 여기에 orderPage에서 무통장 입금 후 '송금했어요' 버튼 눌렀을 때의 액션(navigate, data fetching)을 작성 해주시면 됩니다.
  };

  return (
    <PageLayout
      renderHeader={renderCustomDirectDepositPageHeader}
      footer={
        <DirectDepositFooter isActiveNext={isActiveNext} handleClickFooter={handleClickFooter} />
      }
    >
      {depositModalOn && (
        <CheckDepositModal
          setModalOn={setDepositModalOn}
          setIsActiveNext={setIsActiveNext}
          depositModalHandler={() => handleClickOrderDepositBtn()}
        />
      )}
      <OrderDeposit setIsActiveNext={setIsActiveNext} state={location.state} />
    </PageLayout>
  );
};

export default OrderDepositPage;
