import { IcBackLight, IcCloseLight } from '../../assets/icon/index';
import CustomFooter from '../../components/Custom/Common/CustomFooter';
import CustomReference from '../../components/Custom/Design/CustomReference';
import Header from '../../components/Header';
import PageLayout from '../../components/PageLayout';

const CustomReferencePage = () => {
  const renderCustomReferencePageHeader = () => {
    return (
      <Header leftSection={<IcBackLight />} title='커스텀 타투' rightSection={<IcCloseLight />} />
    );
  };

  return (
    <PageLayout renderHeader={renderCustomReferencePageHeader} footer={<CustomFooter />}>
      <CustomReference />
    </PageLayout>
  );
};

export default CustomReferencePage;
