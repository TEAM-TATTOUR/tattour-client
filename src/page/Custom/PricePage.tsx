import { useState } from 'react';
import CancelBtn from '../../common/Header/CancelBtn';
import ProgressBar from '../../common/ProgressBar';
import CountPrice from '../../components/Custom/CountPrice';
import PriceHeading from '../../components/Custom/PriceHeading';
import Header from '../../components/Header';
import PageLayout from '../../components/PageLayout';
import PriceFooter from '../../components/Custom/PriceFooter';
import MakePublic from '../../components/Custom/MakePublic';
import CustomSizeEscapeModal from '../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import { styled } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { IcBackDark } from '../../assets/icon';

const PricePage = () => {
  const [modalOn, setModalOn] = useState(false);
  const [isPublic, setIsPublic] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const haveDesign = location.state ? location.state.haveDesign : null;
  const prevCustomInfo = location.state ? location.state.customInfo : null;
  const customMainImage = location.state ? location.state.customInfo : null;

  // const { haveDesign, customInfo: prevCustomInfo, customMainImage, customImages } = location.state; //가져와야 할 값들 -> 확인 후 지워주세요!

  const CUSTOM_VIEW_COUNT = haveDesign ? 7 : 4;
  const backNavigateURL = haveDesign ? '/additional-request' : '/custom-request';

  const customInfo = {
    ...prevCustomInfo,
    viewCount: CUSTOM_VIEW_COUNT,
  };

  console.log(customInfo, customMainImage); //오류 발생 방지 용 console 나중에 footer로 넘겨주고 지워주세요!

  const renderPricePageHeader = () => {
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
    <PageLayout renderHeader={renderPricePageHeader}>
      <St.TopWrapper>
        <PriceHeading />
        <CountPrice isPublic={isPublic} />
      </St.TopWrapper>
      <MakePublic isPublic={isPublic} setIsPublic={setIsPublic} />
      <PriceFooter />
    </PageLayout>
  );
};

export default PricePage;

const St = {
  TopWrapper: styled.section`
    display: flex;
    flex-direction: column;

    min-height: calc(100dvh - 35.1rem);
  `,
};
