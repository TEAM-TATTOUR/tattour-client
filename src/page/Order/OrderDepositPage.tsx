import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BackBtn from '../../common/Header/BackBtn';
import CancelBtn from '../../common/Header/CancelBtn';
import CheckDepositModal from '../../common/Modal/CheckDepositModal/CheckDepositModal';
import DirectDepositFooter from '../../components/DirectDeposit/DirectDepositFooter';
import Header from '../../components/Header';
import OrderDeposit from '../../components/Order/Deposit/OrderDeposit';
import PageLayout from '../../components/PageLayout';
import { api } from '../../libs/api';
import { orderAmountDetailResProps } from '../../libs/hooks/order/useGetOrdersheet';

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

const OrderDepositPage = () => {
  const [depositModalOn, setDepositModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const { postData, stickerId, count } = location.state as {
    postData: OrderRequest;
    stickerId: number;
    count: number;
    orderAmountDetailRes: orderAmountDetailResProps;
  };

  const renderCustomDirectDepositPageHeader = () => {
    return (
      <Header
        leftSection={<BackBtn />}
        title='무통장 입금'
        rightSection={
          <CancelBtn
            modalOn={depositModalOn}
            setModalOn={setDepositModalOn}
            targetModal={
              <CheckDepositModal
                setModalOn={setDepositModalOn}
                setIsActiveNext={setIsActiveNext}
                depositModalHandler={() => handleClickOrderDepositBtn()}
              />
            }
          />
        }
      />
    );
  };

  const url = stickerId && count ? `/order?stickerId=${stickerId}&count=${count}` : '/order';

  const handleClickFooter = () => {
    {
      isActiveNext && setDepositModalOn(true);
    }
  };

  const fetchData = async () => {
    await api
      .post(url, {
        ...postData,
        contact: postData.contact.replace(/-/g, ''),
      })
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
        navigate('/error');
      });
  };

  const handleClickOrderDepositBtn = () => {
    fetchData();
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
