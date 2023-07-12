import { IcBackDark, IcCancelDark } from '../../assets/icon';
import SelectColor from '../../components/Custom/HaveDesign/SelectColor';
import Header from '../../components/Header';
import PageLayout from '../../components/PageLayout';

const StylingColorPage = () => {
  const renderStylingColorPageHeader = () => {
    return (
      <Header leftSection={<IcBackDark />} title='커스텀 타투' rightSection={<IcCancelDark />} />
    );
  };

  return (
    <PageLayout renderHeader={renderStylingColorPageHeader}>
      <SelectColor />
      {/* <CustomFooter /> */}
      {/* 나중에 다 합치면 푸터 공통 폴더에서 가져와서 사용할 예정 */}
    </PageLayout>
  );
};

export default StylingColorPage;
