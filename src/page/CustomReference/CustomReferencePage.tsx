import { useEffect, useState } from 'react';
import CancelBtn from '../../common/Header/CancelBtn';
import CustomReference from '../../components/Custom/HaveDesign/CustomReference';
import Header from '../../components/Header';
import PageLayout from '../../components/PageLayout';
import ProgressBar from '../../common/ProgressBar';
import CustomSizeEscapeModal from '../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import NextFooter from '../../common/Footer/NextFooter';
import { useLocation, useNavigate } from 'react-router-dom';
import { IcBackDark } from '../../assets/icon';

const CustomReferencePage = () => {
  const CUSTOM_VIEW_COUNT = 2;

  // 모달 사용할 때  활용
  const [modalOn, setModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);
  const [customMainImage, setCustomMainImage] = useState<File | null>(null);
  const [customImages, setCustomImages] = useState<FileList | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  const haveDesign = location.state ? location.state.haveDesign : null;
  const prevCustomInfo = location.state ? location.state.customInfo : null;

  useEffect(() => {
    if (!location.state) navigate('/onboarding');
  }, [location.state, navigate]);

  const customInfo = {
    viewCount: CUSTOM_VIEW_COUNT,
    customMainImage: customMainImage,
    customImages: customImages,
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
          customInfo={customInfo}
          customMainImage={customMainImage}
          customImages={customImages}
        />
      }
    >
      <CustomReference
        setIsActiveNext={setIsActiveNext}
        setCustomMainImage={setCustomMainImage}
        setCustomImages={setCustomImages}
      />
    </PageLayout>
  );
};

export default CustomReferencePage;
