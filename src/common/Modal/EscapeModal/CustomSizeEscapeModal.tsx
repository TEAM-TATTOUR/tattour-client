import ModalPortal from '../ModalPortal';
import EscapeModalForm from './EscapeModalForm';

interface CustomSizeEscapeModalProps {
  setModalOn: React.Dispatch<React.SetStateAction<boolean>>;
}

const CustomSizeEscapeModal = ({setModalOn} : CustomSizeEscapeModalProps) => {
  return (
    <ModalPortal>
      <EscapeModalForm
        onClose={() => setModalOn(false)}
        pageName={'CustomSizePage'}
        title={'정말 그만두시나요?'}
        subTitle={'신청서는 자동으로 임시저장되어 언제든 이어서 작성할 수 있어요'}
        continueBtn={'취소'}
        stopBtn={'그만하기'}
      />
    </ModalPortal>
  );
};

export default CustomSizeEscapeModal;
