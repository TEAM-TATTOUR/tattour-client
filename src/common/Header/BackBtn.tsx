import { SetStateAction } from 'react';
import { IcBackDark } from '../../assets/icon';
import { useNavigate } from 'react-router-dom';

interface BackBtnProps {
  step?: number;
  setStep?: React.Dispatch<SetStateAction<number>>;
}

const BackBtn = ({ step, setStep }: BackBtnProps) => {
  const navigate = useNavigate();

  const handleClickBack = () => {
    step && setStep ? setStep(step - 1) : navigate(-1);
  };

  return <IcBackDark onClick={handleClickBack} />;
};

export default BackBtn;
