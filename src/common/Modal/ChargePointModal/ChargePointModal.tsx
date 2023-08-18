import React, { useEffect, useState } from 'react';
import ModalPortal from '../ModalPortal';
import ChargePointModalForm from './ChargePointModalForm';
import useGetUserProfile from '../../../libs/hooks/useGetUserProfile';

interface ChargePointModalProps {
  setModalOn: React.Dispatch<React.SetStateAction<boolean>>;
  haveDesign: boolean;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setCustomId: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const ChargePointModal = ({
  setModalOn,
  haveDesign,
  setStep,
  setCustomId,
}: ChargePointModalProps) => {
  const { response, error, loading } = useGetUserProfile();

  const [currPoint, setCurrPoint] = useState(0);

  // const currPoint = response?.point;
  const REGISTER_FEE = 990;

  const [calculatedPoint, setCalculatedPoint] = useState(0);
  const [bottomContentsTitle, setBottomContentsTitle] = useState('');
  const [navigationBtn, setNavigationBtn] = useState('');
  const [isEnoughPoint, setIsEnoughPoint] = useState(false);

  useEffect(() => {
    if (response) setCurrPoint(response.point);
  }, [response]);

  useEffect(() => {
    if (currPoint > REGISTER_FEE) {
      setCalculatedPoint(currPoint - REGISTER_FEE);
      setBottomContentsTitle('결제 후 남는 포인트');
      setNavigationBtn(`${REGISTER_FEE}P 내고 신청하기`);
      setIsEnoughPoint(true);
      return;
    } else if (currPoint < REGISTER_FEE) {
      setCalculatedPoint(REGISTER_FEE - currPoint);
      setBottomContentsTitle('부족한 포인트');
      setNavigationBtn('포인트 충전하기');
      setIsEnoughPoint(false);
      return;
    }
  }, [currPoint, setCurrPoint]);

  return (
    !error &&
    !loading && (
      <ModalPortal>
        <ChargePointModalForm
          onClose={() => setModalOn(false)}
          title={`신청서를 완성하기 위해\n결제가 필요해요`}
          topContentsTitle={'보유 포인트'}
          topContents={currPoint.toLocaleString()}
          unit={'P'}
          bottomContentsTitle={bottomContentsTitle}
          bottomContents={calculatedPoint.toLocaleString()}
          navigationBtn={navigationBtn}
          // 포인트가 충분한지 여부
          isEnoughPoint={isEnoughPoint}
          haveDesign={haveDesign}
          setStep={setStep}
          setCustomId={setCustomId}
        />
      </ModalPortal>
    )
  );
};

export default ChargePointModal;
