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
import NoDesignFooter from '../../../components/Custom/NoDesign/NoDesignFooter';

interface CustomSizePageProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  size: string;
  setSize: React.Dispatch<React.SetStateAction<string>>;
  haveDesign: boolean;
}

const CustomSizePage = ({ setStep, size, setSize, haveDesign }: CustomSizePageProps) => {
  // const CUSTOM_VIEW_COUNT = 1;

  const [modalOn, setModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);

  const navigateURL = haveDesign ? '/haveDesign' : '/noDesign';

  // const [size, setSize] = useState('');

  // const navigate = useNavigate();
  // const location = useLocation();

  // const haveDesign = location.state ? location.state.haveDesign : null;
  // const customId = location.state ? location.state.customId : null;
  // const customImages = location.state ? location.state.customImages : null;
  // const handDrawingImage = location.state ? location.state.handDrawingImage : null;
  // const navigateURL = haveDesign ? '/custom-reference' : '/custom-img';

  // const sizeState =
  //   location.state && location.state.customInfo ? location.state.customInfo.size : null;

  // useEffect(() => {
  //   if (!location.state) navigate('/onboarding');
  // }, [location.state, navigate]);

  // const customInfo = {
  //   viewCount: CUSTOM_VIEW_COUNT,
  //   customId: customId,
  //   size: size,
  // };

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
        <NoDesignFooter isActiveNext={isActiveNext} setStep={setStep} navigateURL={navigateURL} />
      }
    >
      <CustomSelectSize setIsActiveNext={setIsActiveNext} setSize={setSize} size={size} />
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
