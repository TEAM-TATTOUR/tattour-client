import { useState } from 'react';
import CustomTheme from '../../../components/Custom/HaveDesign/CustomTheme';
import CustomThemeFooter from '../../../components/Custom/HaveDesign/CustomThemeFooter';
import PageLayout from '../../../components/PageLayout';
import BackBtn from '../../../common/Header/BackBtn';
import Header from '../../../components/Header';
import CancelBtn from '../../../common/Header/CancelBtn';
import CustomSizeEscapeModal from '../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import ProgressBar from '../../../common/ProgressBar';

const CustomThemePage = () => {
  const [modalOn, setModalOn] = useState(false);

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
    <PageLayout renderHeader={renderCustomThemePageHeader} footer={<CustomThemeFooter />}>
      <CustomTheme />
    </PageLayout>
  );
};

export default CustomThemePage;
