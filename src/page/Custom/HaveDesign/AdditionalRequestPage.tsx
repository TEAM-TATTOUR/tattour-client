import { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import Header from '../../../components/Header';
import CancelBtn from '../../../common/Header/CancelBtn';
import CustomSizeEscapeModal from '../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import ProgressBar from '../../../common/ProgressBar';
import AdditionalRequest from '../../../components/Custom/HaveDesign/AdditionalRequest';
import NextFooter from '../../../common/Footer/NextFooter';
import { useLocation, useNavigate } from 'react-router-dom';
import { IcBackDark } from '../../../assets/icon';

const AdditionalRequestPage = () => {
  const [modalOn, setModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const stateList = location.state;

  const renderAdditionalRequestPageHeader = () => {
    return (
      <Header
        leftSection={<IcBackDark onClick={() => navigate('/custom-theme')} />}
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
      renderHeader={renderAdditionalRequestPageHeader}
      footer={
        <NextFooter isActiveNext={isActiveNext} navigateURL={'/price'} stateList={stateList} />
      }
    >
      <AdditionalRequest setIsActiveNext={setIsActiveNext} />
    </PageLayout>
  );
};

export default AdditionalRequestPage;
