import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { IcBackDark } from '../../../assets/icon';
import CancelBtn from '../../../common/Header/CancelBtn';
import CustomSizeEscapeModal from '../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import ProgressBar from '../../../common/ProgressBar';
import CountPrice from '../CountPrice';
import MakePublic from '../MakePublic';
import PriceFooter from '../PriceFooter';
import PriceHeading from '../PriceHeading';
import Header from '../../Header';
import PageLayout from '../../PageLayout';

const PriceLayout = () => {
  const [modalOn, setModalOn] = useState(false);
  const [isPublic, setIsPublic] = useState(false);
  const [count, setCount] = useState(1);
  const [isCompletedState, setIsCompletedState] = useState(false);

  const handleCompletedState = () => {
    setIsCompletedState(true);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const haveDesign = location.state ? location.state.haveDesign : null;
  const prevCustomInfo = location.state ? location.state.customInfo : null;
  const handDrawingImage = location.state ? location.state.handDrawingImage : null;
  const customImages = location.state ? location.state.customImages : null;
  const size = location.state ? location.state.customInfo.size : null;
  const price = location.state ? location.state.customInfo.price : null;
  const isCompleted = location.state ? location.state.customInfo.isCompleted : null;

  const CUSTOM_VIEW_COUNT = haveDesign ? 7 : 4;
  const backNavigateURL = haveDesign ? '/haveDesign' : '/noDesign';

  // useEffect(() => {
  //   if (!location.state) navigate('/onboarding');
  // }, [location.state, navigate]);

  const customInfo = {
    ...prevCustomInfo,
    haveDesign: haveDesign,
    viewCount: CUSTOM_VIEW_COUNT,
    handDrawingImage: handDrawingImage,
    customImages: customImages,
    count: count,
    price: price,
    isCompleted: isCompleted,
  };

  const renderPriceLayoutHeader = () => {
    return (
      <Header
        leftSection={
          <IcBackDark
            onClick={() =>
              navigate(backNavigateURL, {
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
        transparent={true}
        progressBar={<ProgressBar curStep={CUSTOM_VIEW_COUNT} maxStep={CUSTOM_VIEW_COUNT} />}
      />
    );
  };

  return (
    <PageLayout
      renderHeader={renderPriceLayoutHeader}
      footer={
        <PriceFooter
          haveDesign={haveDesign}
          customInfo={customInfo}
          handDrawingImage={handDrawingImage}
          customImages={customImages}
          isCompleted={isCompleted}
          handleCompletedState={handleCompletedState}
          isCompletedState={isCompletedState}
        />
      }
    >
      <St.TopWrapper>
        <PriceHeading />
        <CountPrice isPublic={isPublic} setCount={setCount} size={size} />
      </St.TopWrapper>
      <MakePublic isPublic={isPublic} setIsPublic={setIsPublic} />
    </PageLayout>
  );
};

export default PriceLayout;

const St = {
  TopWrapper: styled.section`
    display: flex;
    flex-direction: column;

    height: calc(100dvh - 25.7rem);
  `,
};
