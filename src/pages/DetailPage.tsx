import styled from 'styled-components';
import DetailInfo from '../components/Detail/DetailInfo';
import DetailCarousel from '../components/Detail/DetailCarousel';
import PageLayout from '../components/PageLayout';
import Header from '../components/Header';
import { IcBackDark, IcCancelDark } from '../assets/icon';
import DetailFooter from '../components/Detail/DetailFooter';

const DetailPage = () => {
  const renderDetailPageHeader = () => {
    return <Header leftSection={<IcBackDark />} rightSection={<IcCancelDark />} />;
  };

  return (
    <PageLayout renderHeader={renderDetailPageHeader} footer={<DetailFooter />}>
      <DetailCarousel />
      <DetailInfo />
    </PageLayout>
  );
};

export default DetailPage;
