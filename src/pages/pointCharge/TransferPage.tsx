import BackBtn from '../../common/Header/BackBtn';
import CancelBtn from '../../common/Header/CancelBtn';
import ProgressBar from '../../common/ProgressBar';
import Header from '../../components/Header';
import PageLayout from '../../components/PageLayout';
import TransferMain from '../../components/PointCharge/TransferMain';
import TransferPolicy from '../../components/PointCharge/TransferPolicy';

const TransferPage = () => {
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
    <PageLayout renderHeader={renderTransferPageHeader} footer={<></>}>
      <TransferMain />
      <TransferPolicy />
    </PageLayout>
  );
};

export default TransferPage;
