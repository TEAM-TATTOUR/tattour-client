import ModalPortal from '../ModalPortal';
import EscapeModalForm from '../EscapeModal/EscapeModalForm';

interface CheckDepositModalProps {
  setModalOn: React.Dispatch<React.SetStateAction<boolean>>;
  setIsActiveNext: React.Dispatch<React.SetStateAction<boolean>>;
  state: object;
}

const CheckDepositModal = ({ setModalOn, setIsActiveNext, state }: CheckDepositModalProps) => {
  return (
    <ModalPortal>
      <EscapeModalForm
        onClose={() => setModalOn(false)}
        pageName={'DepositPage'}
        title={'입금을 완료하셨나요?'}
        subTitle={'입금을 하지 않으면 주문이 반려될 수 있어요'}
        subTitle2={'해당 계좌로 입금을 진행해주세요'}
        continueBtn={'입금했어요'}
        stopBtn={'돌아가기'}
        setIsActiveNext={setIsActiveNext}
        state={state}
      />
    </ModalPortal>
  );
};

export default CheckDepositModal;
