import { styled } from 'styled-components';
import CustomSelectSize from '../../../components/Custom/Common/CustomSelectSize';
import Header from '../../../components/Header';
import CancelBtn from '../../../common/Header/CancelBtn';
import ProgressBar from '../../../common/ProgressBar';
import PageLayout from '../../../components/PageLayout';
import NextFooter from '../../../common/Footer/NextFooter';
import { useEffect, useState } from 'react';
import CustomSizeEscapeModal from '../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import { useLocation, useNavigate } from 'react-router-dom';

const CustomSizePage = () => {
  const CUSTOM_VIEW_COUNT = 1;

  const [modalOn, setModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);

  const [size, setSize] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const haveDesign = location.state ? location.state.haveDesign : null;
  const customId = location.state ? location.state.customId : null;
  const navigateURL = haveDesign ? '/custom-reference' : '/custom-img';

  useEffect(() => {
    if (!location.state) navigate('/onboarding');
  }, [location.state, navigate]);

  console.log('size', location.state);

  const customInfo = {
    viewCount: CUSTOM_VIEW_COUNT,
    customId: customId,
    size: size,
  };

  const renderCustomSizePageHeader = () => {
    return (
      <Header
        leftSection={<St.BlankSection></St.BlankSection>}
        title='커스텀 타투'
        rightSection={
          <CancelBtn
            modalOn={modalOn}
            setModalOn={setModalOn}
            targetModal={<CustomSizeEscapeModal setModalOn={setModalOn} />}
          />
        }
        progressBar={<ProgressBar curStep={1} maxStep={4} />}
      />
    );
  };
  return (
    <PageLayout
      renderHeader={renderCustomSizePageHeader}
      footer={
        <NextFooter
          isActiveNext={isActiveNext}
          navigateURL={navigateURL}
          haveDesign={haveDesign}
          customInfo={customInfo}
        />
      }
    >
      <CustomSelectSize setIsActiveNext={setIsActiveNext} setSize={setSize} />
    </PageLayout>
  );
};

export default CustomSizePage;

const St = {
  BlankSection: styled.div`
    width: 2.4rem;
    height: 2.4rem;

    background-color: transparent;
  `,
};
