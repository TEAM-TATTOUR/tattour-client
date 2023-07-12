import ModalPortal from '../ModalPortal';
import EscapeModalForm from '../EscapeModal/EscapeModalForm';

interface ChargePointEscapeModalProps {
  setModalOn: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChargePointEscapeModal = ({ setModalOn }: ChargePointEscapeModalProps) => {
  return (
    <ModalPortal>
      <EscapeModalForm
        onClose={() => setModalOn(false)}
        pageName={'ChargePage'}
        title={'정말 그만두시나요?'}
        subTitle={'지금 그만두시면 포인트 충전을 처음부터 다시 진행해야 해요'}
        continueBtn={'설정 계속하기'}
        stopBtn={'그만하기'}
      />
    </ModalPortal>
  );
};

export default ChargePointEscapeModal;
