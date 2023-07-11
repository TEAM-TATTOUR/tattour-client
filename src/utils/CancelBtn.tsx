import { IcCancelDark } from '../assets/icon';

interface CancelBtnProps {
  modalOn: boolean;
  setModalOn: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const CancelBtn = ({ modalOn, setModalOn, children }: CancelBtnProps) => {
  const handleClickCancelBtn = () => {
    setModalOn(true);
  };

  return (
    <div>
      <IcCancelDark onClick={handleClickCancelBtn} />;{modalOn && children}
    </div>
  );
};

export default CancelBtn;
