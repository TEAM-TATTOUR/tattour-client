import { useEffect, useState } from 'react';
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
  const CUSTOM_VIEW_COUNT = 3;

  const navigate = useNavigate();
  const location = useLocation();
  const [modalOn, setModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);
  const [name, setName] = useState('');
  const [demand, setDemand] = useState('');

  const haveDesign = location.state ? location.state.haveDesign : null;
  const prevCustomInfo = location.state ? location.state.customInfo : null;
  const customMainImage = location.state ? location.state.customMainImage : null;

  //state에 있는 name, demand 값 가져오기 (처음 넘어올 때는 customMainImage 값이 없으므로 에러 방지 필요)
  const writtenName =
    location.state && location.state.customInfo.name ? location.state.customInfo.name : null;
  const writtenDemand =
    location.state && location.state.customInfo.demand ? location.state.customInfo.demand : null;

  useEffect(() => {
    if (!location.state) navigate('/onboarding');
  }, [location.state, navigate]);

  const customInfo = {
    ...prevCustomInfo,
    viewCount: CUSTOM_VIEW_COUNT,
    name: name,
    demand: demand,
  };

  const renderCustomRequestPageHeader = () => {
    return (
      <Header
        leftSection={
          <IcBackDark
            onClick={() =>
              navigate('/custom-img', {
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
          navigateURL='/price'
          haveDesign={haveDesign}
          customInfo={customInfo}
          customMainImage={customMainImage}
        />
      }
    >
      <CustomRequset
        setIsActiveNext={setIsActiveNext}
        setName={setName}
        setDemand={setDemand}
        writtenName={writtenName}
        writtenDemand={writtenDemand}
      />
    </PageLayout>
  );
};

export default CustomRequestPage;
