import { useState } from 'react';
import { IcBackDark, IcCancelDark } from '../../../assets/icon';
import NextFooter from '../../../common/Footer/NextFooter';
import BackBtn from '../../../common/Header/BackBtn';
import CancelBtn from '../../../common/Header/CancelBtn';
import CustomSizeEscapeModal from '../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import ProgressBar from '../../../common/ProgressBar';
import SelectColor from '../../../components/Custom/HaveDesign/SelectColor';
import Header from '../../../components/Header';
import PageLayout from '../../../components/PageLayout';

const StylingColorPage = () => {
  const [modalOn, setModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);

  const renderStylingColorPageHeader = () => {
    return (
      <Header
        transparent={true}
        leftSection={<BackBtn />}
        title='커스텀 타투'
        rightSection={
          <CancelBtn
            modalOn={modalOn}
            setModalOn={setModalOn}
            targetModal={<CustomSizeEscapeModal setModalOn={setModalOn} />}
          />
        }
        progressBar={<ProgressBar curStep={3} maxStep={7} />}
      />
    );
  };

  return (
    <PageLayout
      renderHeader={renderStylingColorPageHeader}
      footer={<NextFooter isActiveNext={isActiveNext} navigateURL={'/select-keyword'} />}
    >
      <SelectColor setIsActiveNext={setIsActiveNext} />
    </PageLayout>
  );
};

export default StylingColorPage;
