import { useEffect, useState } from 'react';
import CancelBtn from '../../../common/Header/CancelBtn';
import CustomReference from '../../../components/Custom/HaveDesign/CustomReference';
import Header from '../../../components/Header';
import PageLayout from '../../../components/PageLayout';
import ProgressBar from '../../../common/ProgressBar';
import CustomSizeEscapeModal from '../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import NextFooter from '../../../common/Footer/NextFooter';
import { useLocation, useNavigate } from 'react-router-dom';
import { IcBackDark } from '../../../assets/icon';

const CustomReferencePage = () => {
  const CUSTOM_VIEW_COUNT = 2;

  const navigate = useNavigate();
  const location = useLocation();

  // 모달 사용할 때  활용
  const [modalOn, setModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);
  // const [handDrawingImage, setHandDrawingImage] = useState<File | null>(null);
  // const [customImages, setCustomImages] = useState<FileList | null>(null);

  const haveDesign = location.state ? location.state.haveDesign : null;
  const prevCustomInfo = location.state ? location.state.customInfo : null;

  useEffect(() => {
    if (!location.state) navigate('/onboarding');
  }, [location.state, navigate]);

  const customInfo = {
    ...prevCustomInfo,
    viewCount: CUSTOM_VIEW_COUNT,
  };

  const renderCustomReferencePageHeader = () => {
    return (
      <Header
        transparent={true}
        leftSection={<IcBackDark onClick={() => navigate('/custom-size')} />}
        title='커스텀 타투'
        rightSection={
          <CancelBtn
            modalOn={modalOn}
            setModalOn={setModalOn}
            targetModal={<CustomSizeEscapeModal setModalOn={setModalOn} />}
          />
        }
        progressBar={<ProgressBar curStep={2} maxStep={7} />}
      />
    );
  };

  return (
    <PageLayout
      renderHeader={renderCustomReferencePageHeader}
      footer={
        <NextFooter
          isActiveNext={isActiveNext}
          navigateURL={'/styling-color'}
          haveDesign={haveDesign}
          customInfo={customInfo}
          customImages={customImages}
          handDrawingImage={handDrawingImage}
        />
      }
    >
      <CustomReference
        setIsActiveNext={setIsActiveNext}
        setHandDrawingImage={setHandDrawingImage}
        setCustomImages={setCustomImages}
      />
    </PageLayout>
  );
};

export default CustomReferencePage;
