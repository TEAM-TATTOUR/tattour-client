import { styled } from 'styled-components';
import CustomSelectSize from '../../../components/Custom/Common/CustomSelectSize';
import Header from '../../../components/Header';
import CancelBtn from '../../../common/Header/CancelBtn';
import ProgressBar from '../../../common/ProgressBar';
import PageLayout from '../../../components/PageLayout';
import NextFooter from '../../../common/Footer/NextFooter';
import { useState } from 'react';
import CustomSizeEscapeModal from '../../../common/Modal/EscapeModal/CustomSizeEscapeModal';

const CustomSizePage = () => {
  const [modalOn, setModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);

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
      footer={<NextFooter isActiveNext={isActiveNext} navigateURL='/custom-img' />}
    >
      <CustomSelectSize setIsActiveNext={setIsActiveNext} />
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
