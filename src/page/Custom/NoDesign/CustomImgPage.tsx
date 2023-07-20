import { useState } from 'react';
import CustomImg from '../../../components/Custom/NoDesgin/CustomImg';
import Header from '../../../components/Header';
import CustomSizeEscapeModal from '../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import CancelBtn from '../../../common/Header/CancelBtn';
import ProgressBar from '../../../common/ProgressBar';
import PageLayout from '../../../components/PageLayout';
import NextFooter from '../../../common/Footer/NextFooter';
import { IcBackDark } from '../../../assets/icon';
import { useLocation, useNavigate } from 'react-router-dom';

const CustomImgPage = () => {
  const CUSTOM_VIEW_COUNT = 2;

  const navigate = useNavigate();
  const [modalOn, setModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);
  const [customMainImage, setCustomMainImage] = useState<File>();
  const location = useLocation();

  const haveDesign = location.state ? location.state.haveDesgin : null;
  const prevCustomInfo = location.state ? location.state.customInfo : null;

  const customInfo = {
    ...prevCustomInfo,
    viewCount: CUSTOM_VIEW_COUNT,
  };

  console.log('img', location.state);

  const renderCustomImgPageHeader = () => {
    return (
      <Header
        leftSection={
          <IcBackDark
            onClick={() =>
              navigate('/custom-size', {
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
        progressBar={<ProgressBar curStep={2} maxStep={4} />}
      />
    );
  };

  return (
    <PageLayout
      renderHeader={renderCustomImgPageHeader}
      footer={
        <NextFooter
          isActiveNext={isActiveNext}
          navigateURL='/custom-request'
          haveDesign={haveDesign}
          customInfo={customInfo}
          customMainImage={customMainImage}
        />
      }
    >
      <CustomImg setIsActiveNext={setIsActiveNext} setCustomMainImage={setCustomMainImage} />
    </PageLayout>
  );
};

export default CustomImgPage;
