import { useState } from 'react';
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

  const { haveDesign, customInfo: prevCustomInfo, customMainImage } = location.state;

  const customInfo = {
    ...prevCustomInfo,
    viewCount: CUSTOM_VIEW_COUNT,
    name: name,
    demand: demand,
  };

  console.log(location.state);

  const renderCustomRequestPageHeader = () => {
    return (
      <Header
        leftSection={
          <IcBackDark
            onClick={() =>
              navigate('/custom-img', {
                state: location.state,
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
      <CustomRequset setIsActiveNext={setIsActiveNext} setName={setName} setDemand={setDemand} />
    </PageLayout>
  );
};

export default CustomRequestPage;
