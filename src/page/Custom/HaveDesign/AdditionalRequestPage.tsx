import { useEffect, useState } from 'react';
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
  const CUSTOM_VIEW_COUNT = 6;

  const [modalOn, setModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);
  const [demand, setDemand] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const haveDesign = location.state ? location.state.haveDesign : null;
  const prevCustomInfo = location.state ? location.state.customInfo : null;
  const handDrawingImage = location.state ? location.state.handDrawingImage : null;
  const customImages = location.state ? location.state.customImages : null;

  useEffect(() => {
    if (!location.state) navigate('/onboarding');
  }, [location.state, navigate]);

  const customInfo = {
    ...prevCustomInfo,
    viewCount: CUSTOM_VIEW_COUNT,
    demand: demand,
  };

  const renderAdditionalRequestPageHeader = () => {
    return (
      <Header
        leftSection={
          <IcBackDark
            onClick={() =>
              navigate('/custom-theme', { state: location.state ? location.state : null })
            }
          />
        }
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
        <NextFooter
          isActiveNext={isActiveNext}
          navigateURL={'/price'}
          haveDesign={haveDesign}
          customInfo={customInfo}
          handDrawingImage={handDrawingImage}
          customImages={customImages}
        />
      }
    >
      <AdditionalRequest setIsActiveNext={setIsActiveNext} setDemand={setDemand} />
    </PageLayout>
  );
};

export default AdditionalRequestPage;
