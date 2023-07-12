import { IcBackDark } from '../../assets/icon';
import { useNavigate } from 'react-router-dom';

const BackBtn = () => {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate(-1);
  };

  return <IcBackDark onClick={handleClickBack} />;
};

export default BackBtn;
