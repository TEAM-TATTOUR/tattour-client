import { useEffect, useState } from 'react';
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
  const CUSTOM_VIEW_COUNT = 4;

  const [modalOn, setModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);
  const [styles, setStyles] = useState<number[]>([]);
  const [themes, setThemes] = useState<number[]>([]);

  const navigate = useNavigate();
  const location = useLocation();

  const haveDesign = location.state ? location.state.haveDesign : null;
  const prevCustomInfo = location.state ? location.state.customInfo : null;
  const handDrawingImage = location.state ? location.state.handDrawingImage : null;
  const customImages = location.state ? location.state.customImages : null;

  useEffect(() => {
    if (!location.state) navigate('/onboarding');
  }, [location.state, navigate]);

  const customInfo = {
    ...prevCustomInfo,
    viewCount: CUSTOM_VIEW_COUNT,
    styles: styles,
    themes: themes,
  };

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
          haveDesign={haveDesign}
          customInfo={customInfo}
          handDrawingImage={handDrawingImage}
          customImages={customImages}
        />
      }
    >
      <SelectKeywordHeading />
      <SelectKeyword
        setIsActiveNext={setIsActiveNext}
        setStyles={setStyles}
        setThemes={setThemes}
      />
    </PageLayout>
  );
};

export default SelectKeywordPage;
