import ModalPortal from '../ModalPortal';
import EscapeModalForm from '../EscapeModal/EscapeModalForm';

interface DeleteCartModalProps {
  setModalOn: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteCartModal = ({ setModalOn }: DeleteCartModalProps) => {
  return (
    <ModalPortal>
      <EscapeModalForm
        onClose={() => setModalOn(false)}
        pageName={'CartPage'}
        title={'선택한 상품을 삭제하시나요?'}
        subTitle={'삭제하시면 결제 대상에서'}
        subTitle2={'해당 상품이 제외돼요'}
        continueBtn={'삭제하기'}
        stopBtn={'그만하기'}
      />
    </ModalPortal>
  );
};

export default DeleteCartModal;
