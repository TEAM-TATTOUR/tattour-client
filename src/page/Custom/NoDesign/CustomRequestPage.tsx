import { useState } from 'react';
import CancelBtn from '../../../common/Header/CancelBtn';
import CustomSizeEscapeModal from '../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import ProgressBar from '../../../common/ProgressBar';
import CustomRequset from '../../../components/Custom/NoDesign/CustomRequset';
import Header from '../../../components/Header';
import PageLayout from '../../../components/PageLayout';
import NextFooter from '../../../common/Footer/NextFooter';
import { useLocation, useNavigate } from 'react-router-dom';
import { IcBackDark } from '../../../assets/icon';

const CustomRequestPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [modalOn, setModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);

  const stateList = location.state;

  const renderCustomRequestPageHeader = () => {
    return (
      <Header
        leftSection={<IcBackDark onClick={() => navigate('/custom-img')} />}
        title='커스텀 타투'
        rightSection={
          <CancelBtn
            modalOn={modalOn}
            setModalOn={setModalOn}
            targetModal={<CustomSizeEscapeModal setModalOn={setModalOn} />}
          />
        }
        progressBar={<ProgressBar curStep={3} maxStep={4} />}
      />
    );
  };
  return (
    <PageLayout
      renderHeader={renderCustomRequestPageHeader}
      footer={
        <NextFooter
          isActiveNext={isActiveNext}
          navigateURL='/custom-quantity'
          stateList={stateList}
        />
      }
    >
      <CustomRequset setIsActiveNext={setIsActiveNext} />
    </PageLayout>
  );
};

export default CustomRequestPage;
