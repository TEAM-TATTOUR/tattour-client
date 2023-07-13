import Charge from '../../components/PointCharge/Charge';
import Header from '../../components/Header';
import { styled } from 'styled-components';
import { IcCancelDark } from '../../assets/icon';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';
import ProgressBar from '../../common/ProgressBar';

const ChargePage = () => {
  const navigate = useNavigate();

  const renderChargePageHeader = () => {
    return (
      <Header
        transparent={false}
        leftSection={<St.BlankSection></St.BlankSection>}
        title='포인트 충전'
        rightSection={<IcCancelDark onClick={() => navigate(-1)} />}
        progressBar={<ProgressBar curStep={1} maxStep={3} />}
      />
    );
  };

  return (
    <PageLayout renderHeader={renderChargePageHeader} footer={<></>}>
      <Charge />
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
