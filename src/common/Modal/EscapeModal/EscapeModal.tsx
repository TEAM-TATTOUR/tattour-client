import ModalPortal from '../ModalPortal';
import EscapeModalForm from './EscapeModalForm';

interface EscapeModalProps {
  setModalOn: React.Dispatch<React.SetStateAction<boolean>>;
}

const EscapeModal = ({ setModalOn }: EscapeModalProps) => {
  return (
    <ModalPortal>
      <EscapeModalForm
        onClose={() => setModalOn(false)}
        pageName={'LoginPage'}
        title={'정말 그만두시나요?'}
        subTitle={
          '프로필 설정만 마치면, 회원가입 과정이 모두 끝납니다. 중간에 나가시면 정보가 사라져요.'
        }
        continueBtn={'설정 계속하기'}
        stopBtn={'그만하기'}
      />
    </ModalPortal>
  );
};

export default EscapeModal;
