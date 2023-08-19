import ModalPortal from '../ModalPortal';
import CheckModalForm from './CheckModalForm';

interface CheckModalProps {
  setModalOn: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpenCompleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  chargeAmount: number;
}

const CheckModal = ({ setModalOn, chargeAmount, setIsOpenCompleteModal }: CheckModalProps) => {
  return (
    <ModalPortal>
      <CheckModalForm
        onClose={() => setModalOn(false)}
        title={'한번 더 확인해주세요'}
        subTitle={'정확하게 송금하지 않을 시'}
        subTitle_2={'추후에 주문이 취소될 수 있어요'}
        continueBtn={'확인했어요'}
        chargeAmount={chargeAmount}
        setIsOpenCompleteModal={setIsOpenCompleteModal}
      />
    </ModalPortal>
  );
};

export default CheckModal;
