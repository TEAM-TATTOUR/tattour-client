import { useState } from 'react';
import BackBtn from '../../../../common/Header/BackBtn';
import CancelBtn from '../../../../common/Header/CancelBtn';
import CheckDepositModal from '../../../../common/Modal/CheckDepositModal/CheckDepositModal';
import CustomSizeEscapeModal from '../../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import DirectDepositFooter from '../../../DirectDeposit/DirectDepositFooter';
import Header from '../../../Header';
import PageLayout from '../../../PageLayout';
import CustomDirectDeposit from './CustomDirectDeposit';

interface DepositLayoutProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  totalPrice: number;
  handleClickCustomDepositBtn: () => Promise<void>;
}

const CustomDirectDepositLayout = ({
  setStep,
  totalPrice,
  handleClickCustomDepositBtn,
}: DepositLayoutProps) => {
  const [modalOn, setModalOn] = useState(false);
  const [depositModalOn, setDepositModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);

  // const location = useLocation();
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
          depositModalHandler={handleClickCustomDepositBtn}
        />
      )}
      <CustomDirectDeposit setIsActiveNext={setIsActiveNext} totalPrice={totalPrice} />
    </PageLayout>
  );
};

export default CustomDirectDepositLayout;
