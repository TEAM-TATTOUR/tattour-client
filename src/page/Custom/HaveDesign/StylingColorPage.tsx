import { useState } from 'react';
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
  const [modalOn, setModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const stateList = location.state;

  const renderStylingColorPageHeader = () => {
    return (
      <Header
        transparent={true}
        leftSection={<IcBackDark onClick={() => navigate('/custom-reference')} />}
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
          stateList={stateList}
        />
      }
    >
      <SelectColor setIsActiveNext={setIsActiveNext} />
    </PageLayout>
  );
};

export default StylingColorPage;
