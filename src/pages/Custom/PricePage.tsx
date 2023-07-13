import { useState } from 'react';
import BackBtn from '../../common/Header/BackBtn';
import CancelBtn from '../../common/Header/CancelBtn';
import EscapeModal from '../../common/Modal/EscapeModal/EscapeModal';
import ProgressBar from '../../common/ProgressBar';
import CountPrice from '../../components/Custom/CountPrice';
import PriceHeading from '../../components/Custom/PriceHeading';
import Header from '../../components/Header';
import PageLayout from '../../components/PageLayout';
import PriceFooter from './PriceFooter';

const PricePage = () => {
  const [modalOn, setModalOn] = useState(false);
  const renderPricePageHeader = () => {
    return (
      <Header
        leftSection={<BackBtn />}
        title='커스텀 타투'
        rightSection={
          <CancelBtn
            modalOn={modalOn}
            setModalOn={setModalOn}
            targetModal={<EscapeModal setModalOn={setModalOn} />}
          />
        }
        transparent={true}
        progressBar={<ProgressBar curStep={5} maxStep={7} />}
      />
    );
  };

  return (
    <PageLayout renderHeader={renderPricePageHeader}>
      <PriceHeading />
      <CountPrice />
      <MakePublic/>
      <PriceFooter />
    </PageLayout>
  );
};

export default PricePage;
