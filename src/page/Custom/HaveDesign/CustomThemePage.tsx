import { useState } from 'react';
import CustomTheme from '../../../components/Custom/HaveDesign/CustomTheme';
import PageLayout from '../../../components/PageLayout';
import BackBtn from '../../../common/Header/BackBtn';
import Header from '../../../components/Header';
import CancelBtn from '../../../common/Header/CancelBtn';
import CustomSizeEscapeModal from '../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import ProgressBar from '../../../common/ProgressBar';
import NextFooter from '../../../common/Footer/NextFooter';

const CustomThemePage = () => {
  const [modalOn, setModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);

  const renderCustomThemePageHeader = () => {
    return (
      <Header
        leftSection={<BackBtn />}
        title='커스텀 타투'
        rightSection={
          <CancelBtn
            modalOn={modalOn}
            setModalOn={setModalOn}
            targetModal={<CustomSizeEscapeModal setModalOn={setModalOn} />}
          />
        }
        transparent={true}
        progressBar={<ProgressBar curStep={6} maxStep={7} />}
      />
    );
  };
  return (
    <PageLayout
      renderHeader={renderCustomThemePageHeader}
      footer={<NextFooter isActiveNext={isActiveNext} navigateURL={'/additional-request'} />}
    >
      <CustomTheme setIsActiveNext={setIsActiveNext} />
    </PageLayout>
  );
};

export default CustomThemePage;
