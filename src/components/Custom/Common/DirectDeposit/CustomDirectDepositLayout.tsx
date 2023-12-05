import { useState } from 'react';
import Header from '../../../Header';
import { IcBackDark } from '../../../../assets/icon';
import CancelBtn from '../../../../common/Header/CancelBtn';
import CustomSizeEscapeModal from '../../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import PageLayout from '../../../PageLayout';
import CustomDirectDeposit from './CustomDirectDeposit';
import DirectDepositFooter from '../../../DirectDeposit/DirectDepositFooter';
import { useNavigate } from 'react-router-dom';

const CustomDirectDepositLayout = () => {
  const [modalOn, setModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);

  const navigate = useNavigate();

  const renderCustomDirectDepositPageHeader = () => {
    return (
      <Header
        leftSection={<IcBackDark />}
        title='커스텀 타투'
        rightSection={
          <CancelBtn
            modalOn={modalOn}
            setModalOn={setModalOn}
            targetModal={<CustomSizeEscapeModal setModalOn={setModalOn} />}
          />
        }
      />
    );
  };

  const handleClickFooter = () => {
    {
      //임시로 navigate로 넣었는데, 이 부분 필요에 따라 수정해주세요
      isActiveNext && navigate('/');
    }
  };

  return (
    <PageLayout
      renderHeader={renderCustomDirectDepositPageHeader}
      footer={
        <DirectDepositFooter isActiveNext={isActiveNext} handleClickFooter={handleClickFooter} />
      }
    >
      <CustomDirectDeposit setIsActiveNext={setIsActiveNext} />
    </PageLayout>
  );
};

export default CustomDirectDepositLayout;
