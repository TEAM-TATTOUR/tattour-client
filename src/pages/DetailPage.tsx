import styled from 'styled-components';
import DetailInfo from '../components/Detail/DetailInfo';
import DetailBottom from '../components/Detail/DetailBottom';
import PageLayout from '../components/PageLayout';
import Header from '../components/Header';
import { IcBackDark, IcCancelDark } from '../assets/icon';
import DetailFooter from '../components/Detail/DetailFooter';
import { useState } from 'react';

const DetailPage = () => {
  const [isSheetOpen, setSheetOpen] = useState(true);
  const renderDetailPageHeader = () => {
    return <Header leftSection={<IcBackDark />} rightSection={<IcCancelDark />} />;
  };

  return (
    <PageLayout renderHeader={renderDetailPageHeader} footer={<DetailFooter />}>
      <DetailInfo setSheetOpen={setSheetOpen} />
      <DetailBottom isSheetOpen={isSheetOpen} setSheetOpen={setSheetOpen} />
    </PageLayout>
  );
};

export default DetailPage;
