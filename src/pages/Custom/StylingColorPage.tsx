import { IcBackLight, IcCloseLight } from '../../assets/icon';
import SelectColor from '../../components/Custom/HaveDesign/SelectColor';
import Header from '../../components/Header';
import PageLayout from '../../components/PageLayout';

const StylingColorPage = () => {
  const renderStylingColorPageHeader = () => {
    return (
      <Header leftSection={<IcBackLight />} title='커스텀 타투' rightSection={<IcCloseLight />} />
    );
  };

  return (
    <PageLayout renderHeader={renderStylingColorPageHeader}>
      <SelectColor />
      {/* <CustomFooter /> */}
    </PageLayout>
  );
};

export default StylingColorPage;
