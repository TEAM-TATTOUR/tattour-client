import { IcCancelDark } from '../assets/icon';

interface CancelBtnProps {
  modalOn: boolean;
  setModalOn: React.Dispatch<React.SetStateAction<boolean>>;
  targetModal: React.ReactNode;
}

const CancelBtn = ({ modalOn, setModalOn, targetModal }: CancelBtnProps) => {
  const handleClickCancelBtn = () => {
    setModalOn(true);
  };

  return (
    <div>
      <IcCancelDark onClick={handleClickCancelBtn} />
      {modalOn && targetModal}
    </div>
  );
};

export default CancelBtn;
