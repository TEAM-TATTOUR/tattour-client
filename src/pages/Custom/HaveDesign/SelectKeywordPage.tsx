import React, { useState } from 'react';
import SelectKeywordHeading from '../../../components/Custom/HaveDesign/SelectKeywordHeading';
import PageLayout from '../../../components/PageLayout';
import BackBtn from '../../../common/Header/BackBtn';
import CancelBtn from '../../../common/Header/CancelBtn';
import EscapeModal from '../../../common/Modal/EscapeModal/EscapeModal';
import Header from '../../../components/Header';
import ProgressBar from '../../../common/ProgressBar';
import SelectKeyword from '../../../components/Custom/HaveDesign/SelectKeyword';

const SelectKeywordPage = () => {
  const [modalOn, setModalOn] = useState(false);
  const renderSelectKeywordPageHeader = () => {
    return (
      <Header
        leftSection={<BackBtn />}
        title='커스텀 타투'
        rightSection={
          <CancelBtn
            modalOn={modalOn}
            setModalOn={setModalOn}
            targetModal={<EscapeModal setModalOn={setModalOn} />}
          />
        }
        transparent={true}
        progressBar={<ProgressBar curStep={4} maxStep={7} />}
      />
    );
  };

  return (
    <PageLayout renderHeader={renderSelectKeywordPageHeader}>
      <SelectKeywordHeading />
      <SelectKeyword />
      {/* 나중에 공통에서 가져온 푸터 넣을 예정 */}
    </PageLayout>
  );
};

export default SelectKeywordPage;
