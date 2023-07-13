import { useState } from 'react';
import BackBtn from '../../common/Header/BackBtn';
import CancelBtn from '../../common/Header/CancelBtn';
import ProgressBar from '../../common/ProgressBar';
import Header from '../../components/Header';
import PageLayout from '../../components/PageLayout';
import PointTransferFooter from '../../components/PointCharge/PointTransferFooter';
import TransferMain from '../../components/PointCharge/TransferMain';
import TransferPolicy from '../../components/PointCharge/TransferPolicy';

const TransferPage = () => {
  const [isActiveNext, setIsActiveNext] = useState(false);

  const renderTransferPageHeader = () => {
    return (
      <Header
        leftSection={<BackBtn />}
        title='포인트 충전'
        rightSection={<CancelBtn />}
        progressBar={<ProgressBar curStep={2} maxStep={2} />}
      />
    );
  };

  return (
    <PageLayout
      renderHeader={renderTransferPageHeader}
      footer={<PointTransferFooter isActiveNext={isActiveNext} />}
    >
      <TransferMain />
      <TransferPolicy setIsActiveNext={setIsActiveNext} />
    </PageLayout>
  );
};

export default TransferPage;
