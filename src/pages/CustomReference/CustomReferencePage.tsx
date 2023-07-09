import CustomFooter from '../../components/CustomReference/CustomFooter';
import Header from '../../components/Header';
import PageLayout from '../../components/PageLayout';
import { IcBackLight, IcCloseLight } from '../../assets/icon/index';
import CustomReference from '../../components/CustomReference/CustomReference';

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
