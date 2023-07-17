import ModalPortal from '../ModalPortal';
import WelcomeModalForm from './WelcomeModalForm';

interface WelcomeModalProps {
  setModalOn: React.Dispatch<React.SetStateAction<boolean>>;
}

const WelcomeModal = ({ setModalOn }: WelcomeModalProps) => {
  return (
    <ModalPortal>
      <WelcomeModalForm
        onClose={() => setModalOn(false)}
        title={'가입 축하 포인트 지급!'}
        continueBtn={'포인트 쓰러가기'}
      />
    </ModalPortal>
  );
};

export default WelcomeModal;
