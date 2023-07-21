import { useState } from 'react';
import BackBtn from '../../common/Header/BackBtn';
import CancelBtn from '../../common/Header/CancelBtn';
import ProgressBar from '../../common/ProgressBar';
import Header from '../../components/Header';
import PageLayout from '../../components/PageLayout';
import PointTransferFooter from '../../components/PointCharge/PointTransferFooter';
import TransferMain from '../../components/PointCharge/TransferMain';
import ChargePointEscapeModal from '../../common/Modal/EscapeModal/ChargePointEscapeModal';
import TransferPolicy from '../../components/PointCharge/TransferPolicy';
import { useLocation } from 'react-router-dom';
// import TransferPolicy from '../../components/PointCharge/TransferPolicy';

const TransferPage = () => {
  const [modalOn, setModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);

  const location = useLocation();
  const redirectURL = location.state ? location.state.redirectURL : '';
  const chargeAmount = location.state ? location.state.chargeAmount : 0;

  const renderTransferPageHeader = () => {
    return (
      <Header
        leftSection={<BackBtn />}
        title='포인트 충전'
        rightSection={
          <CancelBtn
            modalOn={modalOn}
            setModalOn={setModalOn}
            targetModal={
              <ChargePointEscapeModal redirectURL={redirectURL} setModalOn={setModalOn} />
            }
          />
        }
        progressBar={<ProgressBar curStep={2} maxStep={2} />}
      />
    );
  };

  return (
    <PageLayout
      renderHeader={renderTransferPageHeader}
      footer={
        <PointTransferFooter
          isActiveNext={isActiveNext}
          redirectURL={redirectURL}
          chargeAmount={chargeAmount}
        />
      }
    >
      <TransferMain chargeAmount={chargeAmount} />
      <TransferPolicy setIsActiveNext={setIsActiveNext} />
    </PageLayout>
  );
};

export default TransferPage;
