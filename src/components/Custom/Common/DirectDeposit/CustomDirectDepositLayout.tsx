import { useState } from 'react';
import Header from '../../../Header';
import { IcBackDark } from '../../../../assets/icon';
import CancelBtn from '../../../../common/Header/CancelBtn';
import CustomSizeEscapeModal from '../../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import PageLayout from '../../../PageLayout';
import CustomDirectDeposit from './CustomDirectDeposit';
import DirectDepositFooter from '../../../DirectDeposit/DirectDepositFooter';
import { useNavigate } from 'react-router-dom';
import CheckDepositModal from '../../../../common/Modal/CheckDepositModal/CheckDepositModal';

const CustomDirectDepositLayout = () => {
  const [modalOn, setModalOn] = useState(false);
  const [depositModalOn, setDepositModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);

  const navigate = useNavigate();

  const renderCustomDirectDepositPageHeader = () => {
    return (
      <Header
        leftSection={<IcBackDark />}
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
        <CheckDepositModal setModalOn={setDepositModalOn} setIsActiveNext={setIsActiveNext} />
      )}
      <CustomDirectDeposit setIsActiveNext={setIsActiveNext} />
    </PageLayout>
  );
};

export default CustomDirectDepositLayout;
