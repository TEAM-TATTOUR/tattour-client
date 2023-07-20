import { useState } from 'react';
import SelectKeywordHeading from '../../../components/Custom/HaveDesign/SelectKeywordHeading';
import PageLayout from '../../../components/PageLayout';
import CancelBtn from '../../../common/Header/CancelBtn';
import Header from '../../../components/Header';
import ProgressBar from '../../../common/ProgressBar';
import SelectKeyword from '../../../components/Custom/HaveDesign/SelectKeyword';
import CustomSizeEscapeModal from '../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import NextFooter from '../../../common/Footer/NextFooter';
import { useLocation, useNavigate } from 'react-router-dom';
import { IcBackDark } from '../../../assets/icon';

const SelectKeywordPage = () => {
  const [modalOn, setModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const stateList = location.state;

  const renderSelectKeywordPageHeader = () => {
    return (
      <Header
        leftSection={<IcBackDark onClick={() => navigate('/styling-color')} />}
        title='커스텀 타투'
        rightSection={
          <CancelBtn
            modalOn={modalOn}
            setModalOn={setModalOn}
            targetModal={<CustomSizeEscapeModal setModalOn={setModalOn} />}
          />
        }
        transparent={true}
        progressBar={<ProgressBar curStep={4} maxStep={7} />}
      />
    );
  };

  return (
    <PageLayout
      renderHeader={renderSelectKeywordPageHeader}
      footer={
        <NextFooter
          isActiveNext={isActiveNext}
          navigateURL={'/custom-theme'}
          stateList={stateList}
        />
      }
    >
      <SelectKeywordHeading />
      <SelectKeyword setIsActiveNext={setIsActiveNext} />
    </PageLayout>
  );
};

export default SelectKeywordPage;
