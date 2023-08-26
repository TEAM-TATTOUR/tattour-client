import { useState } from 'react';
import BackBtn from '../../../../common/Header/BackBtn';
import CancelBtn from '../../../../common/Header/CancelBtn';
import CustomSizeEscapeModal from '../../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import Header from '../../../Header';
import PageLayout from '../../../PageLayout';
import ReceiptDetail from './ReceiptDetail';
import ReceiptFooter from './ReceiptFooter';
import Submitted from './Submitted';
import { resCustomInfoType } from '../../../../types/customInfoType';

interface ReceiptLayoutProps {
  receiptData: resCustomInfoType | undefined;
  haveDesign: boolean;
}

const ReceiptLayout = ({ receiptData, haveDesign }: ReceiptLayoutProps) => {
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
      <ReceiptDetail receiptData={receiptData} haveDesign={haveDesign} />
    </PageLayout>
  );
};

export default ReceiptLayout;
