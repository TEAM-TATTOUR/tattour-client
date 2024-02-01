import ModalPortal from '../ModalPortal';
import CheckModalForm from './CheckModalForm';

interface CheckModalProps {
  setModalOn: React.Dispatch<React.SetStateAction<boolean>>;
  chargeAmount: number;
  redirectURL: string;
}

const CheckModal = ({ setModalOn, chargeAmount, redirectURL }: CheckModalProps) => {
  return (
    <ModalPortal>
      <CheckModalForm
        onClose={() => setModalOn(false)}
        title={'한번 더 확인해주세요'}
        subTitle={'정확하게 송금하지 않을 시'}
        subTitle2={'추후에 주문이 취소될 수 있어요'}
        continueBtn={'확인했어요'}
        chargeAmount={chargeAmount}
        redirectURL={redirectURL}
      />
    </ModalPortal>
  );
};

export default CheckModal;
