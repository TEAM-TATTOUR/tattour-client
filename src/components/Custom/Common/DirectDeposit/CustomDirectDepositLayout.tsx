import { useState } from 'react';
import Header from '../../../Header';
import CancelBtn from '../../../../common/Header/CancelBtn';
import CustomSizeEscapeModal from '../../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import PageLayout from '../../../PageLayout';
import CustomDirectDeposit from './CustomDirectDeposit';
import DirectDepositFooter from '../../../DirectDeposit/DirectDepositFooter';
import { useLocation } from 'react-router-dom';
import CheckDepositModal from '../../../../common/Modal/CheckDepositModal/CheckDepositModal';
import BackBtn from '../../../../common/Header/BackBtn';

interface DepositLayoutProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const CustomDirectDepositLayout = ({ setStep }: DepositLayoutProps) => {
  const [modalOn, setModalOn] = useState(false);
  const [depositModalOn, setDepositModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);

  const location = useLocation();

  const renderCustomDirectDepositPageHeader = () => {
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
      />
    );
  };

  const handleClickFooter = () => {
    {
      isActiveNext && setDepositModalOn(true);
    }
  };

  return (
    <PageLayout
      renderHeader={renderCustomDirectDepositPageHeader}
      footer={
        <DirectDepositFooter isActiveNext={isActiveNext} handleClickFooter={handleClickFooter} />
      }
    >
      {depositModalOn && (
        <CheckDepositModal
          setModalOn={setDepositModalOn}
          setIsActiveNext={setIsActiveNext}
          state={location}
        />
      )}
      <CustomDirectDeposit setIsActiveNext={setIsActiveNext} />
    </PageLayout>
  );
};

export default CustomDirectDepositLayout;
