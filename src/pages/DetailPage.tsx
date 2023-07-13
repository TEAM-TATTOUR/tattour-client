import styled from 'styled-components';
import DetailInfo from '../components/Detail/DetailInfo';
import PageLayout from '../components/PageLayout';
import Header from '../components/Header';
import { IcBackDark, IcCancelDark } from '../assets/icon';
import DetailFooter from '../components/Detail/DetailFooter';
import { useState } from 'react';
import DetailBottom from '../components/Detail/DetailBottom';

const DetailPage = () => {
  const [isSheetOpen, setSheetOpen] = useState(false); // bottomsheet를 위한 state

  const renderDetailPageHeader = () => {
    return <Header leftSection={<IcBackDark />} rightSection={<IcCancelDark />} />;
  };

  return (
    <PageLayout
      renderHeader={renderDetailPageHeader}
      footer={<DetailFooter setSheetOpen={setSheetOpen} isSecond={false} />}
    >
      <DetailInfo />
      <DetailBottom isSheetOpen={isSheetOpen} setSheetOpen={setSheetOpen} />
    </PageLayout>
  );
};

export default DetailPage;
