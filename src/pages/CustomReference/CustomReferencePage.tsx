import { useState } from 'react';
import { IcBackLight, IcCloseLight } from '../../assets/icon/index';
import CustomReference from '../../components/Custom/HaveDesign/CustomReference';
import CustomReferenceFooter from '../../components/Custom/HaveDesign/CustomReferenceFooter';
import Header from '../../components/Header';
import PageLayout from '../../components/PageLayout';

const CustomReferencePage = () => {
  // const [canvasData, setCanvasData] = useState(null);

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
