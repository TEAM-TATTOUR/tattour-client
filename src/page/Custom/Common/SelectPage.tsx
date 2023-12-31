import { styled } from 'styled-components';
import SelectCustom from '../../../components/Custom/Common/SelectCustom';
import Header from '../../../components/Header';
import { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { IcCancelDark } from '../../../assets/icon';
import { useNavigate } from 'react-router-dom';
import SelectCustomFooter from '../../../components/Custom/Common/SelectCustomFooter';
import SelectCustomPolicy from '../../../components/Custom/Common/SelectCustomPolicy';

const SelectPage = () => {
  const navigate = useNavigate();

  const [isActiveNext, setIsActiveNext] = useState(false);
  const [haveDesign, setHaveDesign] = useState(true);

  const renderSelectCustomPageHeader = () => {
    return (
      <Header
        leftSection={<St.BlankSection></St.BlankSection>}
        title='커스텀 타투'
        rightSection={<IcCancelDark onClick={() => navigate('/onboarding')} />}
      />
    );
  };

  return (
    <PageLayout
      renderHeader={renderSelectCustomPageHeader}
      footer={<SelectCustomFooter isActiveNext={isActiveNext} haveDesign={haveDesign} />}
    >
      <SelectCustom setIsActiveNext={setIsActiveNext} setHaveDesign={setHaveDesign} />
      <SelectCustomPolicy />
    </PageLayout>
  );
};

export default SelectPage;

const St = {
  BlankSection: styled.div`
    width: 2.4rem;
    height: 2.4rem;
    background-color: transparent;
  `,
};
