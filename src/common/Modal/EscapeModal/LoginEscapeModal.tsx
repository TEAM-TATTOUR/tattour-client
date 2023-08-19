import ModalPortal from '../ModalPortal';
import EscapeModalForm from '../EscapeModal/EscapeModalForm';

interface LoginEscapeModalProps {
  setModalOn: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginEscapeModal = ({ setModalOn }: LoginEscapeModalProps) => {
  return (
    <ModalPortal>
      <EscapeModalForm
        onClose={() => setModalOn(false)}
        pageName={'LoginPage'}
        title={'정말 그만두시나요?'}
        subTitle={'지금 그만두시면 회원가입을'}
        subTitle_2={'처음부터 다시 진행해야 해요'}
        continueBtn={'계속하기'}
        stopBtn={'그만하기'}
      />
    </ModalPortal>
  );
};

export default LoginEscapeModal;
