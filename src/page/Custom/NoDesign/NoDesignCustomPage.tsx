import { useState } from 'react';
import CustomImgPage from './CustomImgPage';
import CustomRequestPage from './CustomRequestPage';

const NoDesignCustomPage = () => {
  const [step, setStep] = useState(0);

  switch (step) {
    case 0:
      return <CustomImgPage setStep={setStep} />;
    case 1:
      return <CustomRequestPage />;
  }
};

export default NoDesignCustomPage;
