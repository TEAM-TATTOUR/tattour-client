import { styled } from 'styled-components';
import CustomSelectSize from '../../../components/Custom/Common/CustomSelectSize';
import Header from '../../../components/Header';
import CancelBtn from '../../../common/Header/CancelBtn';
import ProgressBar from '../../../common/ProgressBar';
import PageLayout from '../../../components/PageLayout';
import NextFooter from '../../../common/Footer/NextFooter';
import { useState } from 'react';
import CustomSizeEscapeModal from '../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import { useLocation } from 'react-router-dom';
import { customInfo } from '../../../types/customInfo';

const CustomSizePage = () => {
  const CUSTOM_VIEW_COUNT = 1;

  const [modalOn, setModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);

  const [size, setSize] = useState('');

  const location = useLocation();

  const haveDesign = location.state ? location.state.haveDesign : null;
  const customId = location.state ? location.state.customId : null;

  console.log('size', location.state);

  const customInfo: customInfo = {
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
          navigateURL='/custom-img'
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
