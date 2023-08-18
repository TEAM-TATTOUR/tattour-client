import { useState } from 'react';
import SelectPage from './SelectPage';
import CustomSizePage from './CustomSizePage';

const CommonCustomPage = () => {
  const [step, setStep] = useState(0);

  // step 0 : SelectPage - noDesign인지, haveDesgin인지 상황 판단 플래그 state
  const [haveDesign, setHaveDesign] = useState(true);
  const [customId, setCustomId] = useState<number>();

  console.log(customId, '\n', haveDesign);

  switch (step) {
    case 0:
      return (
        <SelectPage
          setStep={setStep}
          setCustomId={setCustomId}
          haveDesign={haveDesign}
          setHaveDesign={setHaveDesign}
        />
      );
    case 1:
      return <CustomSizePage />;
  }
};

export default CommonCustomPage;
