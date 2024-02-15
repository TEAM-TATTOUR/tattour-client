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
  const renderReceiptLayoutHeader = () => {
    return <Header title='커스텀 타투' transparent={true} />;
  };

  return (
    <PageLayout renderHeader={renderReceiptLayoutHeader} footer={<ReceiptFooter />}>
      <Submitted />
      <ReceiptDetail receiptData={receiptData} haveDesign={haveDesign} />
    </PageLayout>
  );
};

export default ReceiptLayout;
