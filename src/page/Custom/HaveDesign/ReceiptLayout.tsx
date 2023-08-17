import { useState } from 'react';
import Header from '../../../components/Header';
import BackBtn from '../../../common/Header/BackBtn';
import CancelBtn from '../../../common/Header/CancelBtn';
import CustomSizeEscapeModal from '../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import ReceiptDetail from '../../../components/Custom/HaveDesign/ReceiptDetail';
import ReceiptFooter from '../../../components/Custom/HaveDesign/ReceiptFooter';
import PageLayout from '../../../components/PageLayout';
import Submitted from '../../../components/Custom/HaveDesign/Submitted';

const ReceiptLayout = () => {
  const [modalOn, setModalOn] = useState(false);

  const renderReceiptLayoutHeader = () => {
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
      />
    );
  };

  return (
    <PageLayout renderHeader={renderReceiptLayoutHeader} footer={<ReceiptFooter />}>
      <Submitted />
      <ReceiptDetail />
    </PageLayout>
  );
};

export default ReceiptLayout;
