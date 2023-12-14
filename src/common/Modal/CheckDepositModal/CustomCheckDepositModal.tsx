import ModalPortal from '../ModalPortal';
import EscapeModalForm from '../EscapeModal/EscapeModalForm';

interface CustomCheckDepositModalProps {
  setModalOn: React.Dispatch<React.SetStateAction<boolean>>;
  setIsActiveNext: React.Dispatch<React.SetStateAction<boolean>>;
  state: object;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const CustomCheckDepositModal = ({
  setModalOn,
  setIsActiveNext,
  state,
  setStep,
}: CustomCheckDepositModalProps) => {
  return (
    <ModalPortal>
      <EscapeModalForm
        onClose={() => setModalOn(false)}
        pageName={'CustomDepositPage'}
        title={'입금을 완료하셨나요?'}
        subTitle={'입금을 하지 않으면 주문이 반려될 수 있어요'}
        subTitle2={'해당 계좌로 입금을 진행해주세요'}
        continueBtn={'입금했어요'}
        stopBtn={'돌아가기'}
        setIsActiveNext={setIsActiveNext}
        state={state}
        setStep={setStep}
      />
    </ModalPortal>
  );
};

export default CustomCheckDepositModal;
