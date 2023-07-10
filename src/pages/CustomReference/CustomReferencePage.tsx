import { IcBackLight, IcCloseLight } from '../../assets/icon/index';
import CustomFooter from '../../components/Custom/Common/CustomFooter';
import CustomReference from '../../components/CustomReference/CustomReference';
import CustomReferenceFooter from '../../components/CustomReference/CustomReferenceFooter';
import Header from '../../components/Header';
import PageLayout from '../../components/PageLayout';

const CustomReferencePage = () => {
  const renderCustomReferencePageHeader = () => {
    return (
      <Header leftSection={<IcBackLight />} title='커스텀 타투' rightSection={<IcCloseLight />} />
    );
  };

  return (
    <PageLayout renderHeader={renderCustomReferencePageHeader}>
      <CustomReference />
      <CustomReferenceFooter />
    </PageLayout>
  );
};

export default CustomReferencePage;
