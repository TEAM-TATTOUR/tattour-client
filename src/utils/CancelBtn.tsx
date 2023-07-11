import { IcCancelDark } from '../assets/icon';

interface CancelBtnProps {
  modalOn: boolean;
  setModalOn: React.Dispatch<React.SetStateAction<boolean>>;
  tagetModal: React.ReactNode;
}

const CancelBtn = ({ modalOn, setModalOn, tagetModal }: CancelBtnProps) => {
  const handleClickCancelBtn = () => {
    setModalOn(true);
  };

  return (
    <div>
      <IcCancelDark onClick={handleClickCancelBtn} />;
      {modalOn && tagetModal}
    </div>
  );
};

export default CancelBtn;
