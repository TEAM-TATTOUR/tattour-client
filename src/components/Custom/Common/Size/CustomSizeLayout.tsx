import { styled } from 'styled-components';
import CustomSelectSize from './CustomSelectSize';
import Header from '../../../Header';
import CancelBtn from '../../../../common/Header/CancelBtn';
import ProgressBar from '../../../../common/ProgressBar';
import PageLayout from '../../../PageLayout';
import { useState } from 'react';
import CustomSizeEscapeModal from '../../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import NoDesignFooter from '../../NoDesign/NoDesignFooter';

interface CustomSizeLayoutProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  size: string;
  setSize: React.Dispatch<React.SetStateAction<string>>;
  haveDesign: boolean;
}

const CustomSizeLayout = ({ setStep, size, setSize, haveDesign }: CustomSizeLayoutProps) => {
  const [modalOn, setModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);

  const navigateURL = haveDesign ? '/haveDesign' : '/noDesign';

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

export default CustomSizeLayout;

const St = {
  BlankSection: styled.div`
    width: 2.4rem;
    height: 2.4rem;

    background-color: transparent;
  `,
};
