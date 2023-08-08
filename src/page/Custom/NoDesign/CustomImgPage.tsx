import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IcBackDark } from '../../../assets/icon';
import CancelBtn from '../../../common/Header/CancelBtn';
import CustomSizeEscapeModal from '../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import ProgressBar from '../../../common/ProgressBar';
import CustomImg from '../../../components/Custom/NoDesgin/CustomImg';
import NoDesignFooter from '../../../components/Custom/NoDesign/NoDesignFooter';
import Header from '../../../components/Header';
import PageLayout from '../../../components/PageLayout';

const CustomImgPage = ({ setStep }: { setStep: React.Dispatch<React.SetStateAction<number>> }) => {
  // const CUSTOM_VIEW_COUNT = 2;

  const navigate = useNavigate();
  const [modalOn, setModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);
  const [customImages, setCustomImages] = useState<FileList>();
  const location = useLocation();

  // const haveDesign = location.state ? location.state.haveDesgin : null;
  // const prevCustomInfo = location.state ? location.state.customInfo : null;

  // state에 있는 img 파일 값 가져오기 (처음 넘어올 때는  값이 없으므로 에러 방지 필요)
  const attachedImg =
    location.state && location.state.customImages ? location.state.customImages : null;

  // useEffect(() => {
  //   if (!location.state) navigate('/onboarding');
  // }, [location.state, navigate]);

  // const customInfo = {
  //   ...prevCustomInfo,
  //   viewCount: CUSTOM_VIEW_COUNT,
  // };

  const renderCustomImgPageHeader = () => {
    return (
      <Header
        leftSection={
          <IcBackDark
            onClick={() => {
              navigate('/custom-size', {
                state: location.state ? location.state : null,
              });
            }}
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
      footer={<NoDesignFooter isActiveNext={isActiveNext} setStep={setStep} />}
    >
      <CustomImg
        setIsActiveNext={setIsActiveNext}
        setCustomImages={setCustomImages}
        attachedImg={attachedImg}
      />
    </PageLayout>
  );
};

export default CustomImgPage;
