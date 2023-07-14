import ModalPortal from '../ModalPortal';
import ChargePointModalForm from './ChargePointModalForm';

interface ChargePointModalProps {
  setModalOn: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChargePointModal = ({ setModalOn }: ChargePointModalProps) => {
  return (
    <ModalPortal>
      <ChargePointModalForm
        onClose={() => setModalOn(false)}
        title={'포인트 충전 완료'}
        subTitle={'신청서 작성 시, 990 포인트의 비용을 지불하셔야 합니다.'}
        topContentsTitle={'보유 포인트'}
        topContents={'5000'}
        unit={'P'}
        bottomContentsTitle={'부족한 포인트'}
        bottomContents={'1000'}
        navigationBtn={'포인트 충전하기'}
        // 포인트가 충분한지 여부
        isEnoughPoint={false}
      />
    </ModalPortal>
  );
};

export default ChargePointModal;
