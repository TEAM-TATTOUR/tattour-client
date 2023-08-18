import { useState } from 'react';
import SelectCustomLayout from '../../../components/Custom/Common/Select/SelectCustomLayout';
import CustomSizePage from './CustomSizePage';

const CommonCustomPage = () => {
  const [step, setStep] = useState(0);

  // step 0 : SelectPage - noDesign인지, haveDesgin인지 상황 판단 플래그 state
  const [haveDesign, setHaveDesign] = useState(true);
  const [customId, setCustomId] = useState<number>();

  console.log(customId, '\n', haveDesign);

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
        <CustomSizePage setStep={setStep} size={size} setSize={setSize} haveDesign={haveDesign} />
      );
  }
};

export default CommonCustomPage;
