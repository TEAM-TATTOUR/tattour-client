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
  // 모달 사용할 때  활용
  const [modalOn, setModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);
  const [customMainImg, setCustomMainImg] = useState(null);
  const [customImg, setCustomImg] = useState([]);

  useEffect(() => {
    return () => {
      states.customMainImage = customMainImg;
      states.customImages = customImg;
    };
  }, [customMainImg, customImg, states]);

  const navigate = useNavigate();
  const location = useLocation();

  const stateList = location.state;

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
          customInfo={stateList}
        />
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
