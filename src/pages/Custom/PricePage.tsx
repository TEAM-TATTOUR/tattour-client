import { useState } from 'react';
import BackBtn from '../../common/Header/BackBtn';
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

const PricePage = () => {
  const [modalOn, setModalOn] = useState(false);
  const [isPublic, setIsPublic] = useState(false);

  const renderPricePageHeader = () => {
    return (
      <Header
        leftSection={<BackBtn />}
        title='커스텀 타투'
        rightSection={
          <CancelBtn
            modalOn={modalOn}
            setModalOn={setModalOn}
            targetModal={<CustomSizeEscapeModal setModalOn={setModalOn} />}
          />
        }
        transparent={true}
        progressBar={<ProgressBar curStep={7} maxStep={7} />}
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
