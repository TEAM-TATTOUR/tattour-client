import { useEffect, useState } from 'react';
import BackBtn from '../../common/Header/BackBtn';
import CancelBtn from '../../common/Header/CancelBtn';
import CustomReference from '../../components/Custom/HaveDesign/CustomReference';
import Header from '../../components/Header';
import PageLayout from '../../components/PageLayout';
import ProgressBar from '../../common/ProgressBar';
import CustomSizeEscapeModal from '../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import NextFooter from '../../common/Footer/NextFooter';
import { useLocation } from 'react-router-dom';

const CustomReferencePage = () => {
  // 모달 사용할 때  활용
  const [modalOn, setModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);
  const [customMainImg, setCustomMainImg] = useState(null);
  const [customImg, setCustomImg] = useState([]);

  const location = useLocation();
  const states = location.state;

  useEffect(() => {
    return () => {
      states.customMainImage = customMainImg;
      states.customImages = customImg;
    };
  }, [customMainImg, customImg, states]);

  const renderCustomReferencePageHeader = () => {
    return (
      <Header
        transparent={true}
        leftSection={<BackBtn />}
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
        <NextFooter isActiveNext={isActiveNext} navigateURL={'/styling-color'} stateList={} />
      }
    >
      <CustomReference
        setIsActiveNext={setIsActiveNext}
        setCustomMainImg={setCustomMainImg}
        setCustomImg={setCustomImg}
      />
    </PageLayout>
  );
};

export default CustomReferencePage;
