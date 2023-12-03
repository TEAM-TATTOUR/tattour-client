import { useState } from 'react';
import Header from '../../../Header';
import { IcBackDark } from '../../../../assets/icon';
import CancelBtn from '../../../../common/Header/CancelBtn';
import CustomSizeEscapeModal from '../../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import PageLayout from '../../../PageLayout';
import CustomDirectDeposit from './CustomDirectDeposit';

const CustomDirectDepositLayout = () => {
  const [modalOn, setModalOn] = useState(false);

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

  return (
    <PageLayout renderHeader={renderCustomDirectDepositPageHeader}>
      <CustomDirectDeposit />
    </PageLayout>
  );
};

export default CustomDirectDepositLayout;
