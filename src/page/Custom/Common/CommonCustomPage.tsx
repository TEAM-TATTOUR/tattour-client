import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SelectCustomLayout from '../../../components/Custom/Common/Select/SelectCustomLayout';
import CustomSizeLayout from '../../../components/Custom/Common/Size/CustomSizeLayout';

const CommonCustomPage = () => {
  const location = useLocation();
  const state = location.state;

  const [step, setStep] = useState(state ? state.step : 0);
  // step 0 : SelectPage - noDesign인지, haveDesign인지 상황 판단 플래그 state
  const [haveDesign, setHaveDesign] = useState(
    state && state.haveDesign !== undefined ? state.haveDesign : true,
  );
  const [customId, setCustomId] = useState<number>(
    state && state.customId !== undefined ? state.customId : 0,
  );

  // step 1: SizePage - 선택한 타투 스티거 사이즈 state
  const [size, setSize] = useState('');

  switch (step) {
    case 0:
      return (
        <SelectCustomLayout
          setStep={setStep}
          setCustomId={setCustomId}
          haveDesign={haveDesign}
          setHaveDesign={setHaveDesign}
        />
      );
    case 1:
      return (
        <CustomSizeLayout
          setStep={setStep}
          size={size}
          setSize={setSize}
          haveDesign={haveDesign}
          customId={customId}
        />
      );
  }
};

export default CommonCustomPage;
