import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Charge from '../../components/PointCharge/Charge';
import Header from '../../components/Header';
import PageLayout from '../../components/PageLayout';
import ProgressBar from '../../common/ProgressBar';
import PointChargeFooter from '../../components/PointCharge/PointChargeFooter';

import { IcCancelDark } from '../../assets/icon';

const ChargePage = () => {
  const navigate = useNavigate();
  const [isActiveNext, setIsActiveNext] = useState(false);

  const renderChargePageHeader = () => {
    return (
      <Header
        leftSection={<St.BlankSection></St.BlankSection>}
        title='포인트 충전'
        rightSection={<IcCancelDark onClick={() => navigate(-1)} />}
        progressBar={<ProgressBar curStep={1} maxStep={2} />}
      />
    );
  };

  return (
    <PageLayout
      renderHeader={renderChargePageHeader}
      footer={<PointChargeFooter isActiveNext={isActiveNext} />}
    >
      <Charge setIsActiveNext={setIsActiveNext} />
      <PointChargeFooter isActiveNext={isActiveNext} />
    </PageLayout>
  );
};

export default ChargePage;

const St = {
  BlankSection: styled.div`
    width: 2.4rem;
    height: 2.4rem;

    background-color: transparent;
  `,
};
