import { useEffect, useState } from 'react';
import NextFooter from '../../../common/Footer/NextFooter';
import CancelBtn from '../../../common/Header/CancelBtn';
import CustomSizeEscapeModal from '../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import ProgressBar from '../../../common/ProgressBar';
import SelectColor from '../../../components/Custom/HaveDesign/SelectColor';
import Header from '../../../components/Header';
import PageLayout from '../../../components/PageLayout';
import { useLocation, useNavigate } from 'react-router-dom';
import { IcBackDark } from '../../../assets/icon';

const StylingColorPage = () => {
  const CUSTOM_VIEW_COUNT = 3;

  const [modalOn, setModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);
  const [isColored, setIsColored] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const haveDesign = location.state ? location.state.haveDesign : null;
  const prevCustomInfo = location.state ? location.state.customInfo : null;
  const customMainImage = location.state ? location.state.customMainImage : null;
  const customImages = location.state ? location.state.customImages : null;

  const isColoredState =
    location.state && location.state.isColored ? location.state.isColored : null;

  console.log('state image', customImages ? customImages[-1] : null);

  useEffect(() => {
    if (!location.state) navigate('/onboarding');
  }, [location.state, navigate]);

  const customInfo = {
    ...prevCustomInfo,
    viewCount: CUSTOM_VIEW_COUNT,
    isColored: isColored,
  };

  const renderStylingColorPageHeader = () => {
    return (
      <Header
        transparent={true}
        leftSection={
          <IcBackDark
            onClick={() =>
              navigate('/custom-reference', {
                state: location.state ? location.state : null,
              })
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
        progressBar={<ProgressBar curStep={3} maxStep={7} />}
      />
    );
  };

  return (
    <PageLayout
      renderHeader={renderStylingColorPageHeader}
      footer={
        <NextFooter
          isActiveNext={isActiveNext}
          navigateURL={'/select-keyword'}
          haveDesign={haveDesign}
          customInfo={customInfo}
          customMainImage={customMainImage}
          customImages={customImages}
        />
      }
    >
      <SelectColor
        setIsActiveNext={setIsActiveNext}
        setIsColored={setIsColored}
        isColoredState={isColoredState}
      />
    </PageLayout>
  );
};

export default StylingColorPage;
