import { styled } from 'styled-components';
import CustomSelectSize from '../../../components/Custom/Common/CustomSelectSize';
import Header from '../../../components/Header';
import { IcCancelDark } from '../../../assets/icon';
import CancelBtn from '../../../common/Header/CancelBtn';
import ProgressBar from '../../../common/ProgressBar';
import PageLayout from '../../../components/PageLayout';
import NextFooter from '../../../common/Footer/NextFooter';

const CustomSizePage = () => {
  const renderCustomSizePageHeader = () => {
    return (
      <Header
        leftSection={<St.BlankSection></St.BlankSection>}
        title='커스텀 타투'
        rightSection={<CancelBtn />}
        progressBar={<ProgressBar curStep={1} maxStep={5} />}
      />
    );
  };
  return (
    <PageLayout
      renderHeader={renderCustomSizePageHeader}
      footer={<NextFooter navigateURL='/custom-img' />}
    >
      <CustomSelectSize />
    </PageLayout>
  );
};

export default CustomSizePage;

const St = {
  BlankSection: styled.div`
    width: 2.4rem;
    height: 2.4rem;

    background-color: transparent;
  `,
};
