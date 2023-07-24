import { useEffect, useState } from 'react';
import CustomTheme from '../../../components/Custom/HaveDesign/CustomTheme';
import PageLayout from '../../../components/PageLayout';
import Header from '../../../components/Header';
import CancelBtn from '../../../common/Header/CancelBtn';
import CustomSizeEscapeModal from '../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import ProgressBar from '../../../common/ProgressBar';
import NextFooter from '../../../common/Footer/NextFooter';
import { useLocation, useNavigate } from 'react-router-dom';
import { IcBackDark } from '../../../assets/icon';

const CustomThemePage = () => {
  const CUSTOM_VIEW_COUNT = 5;

  const [modalOn, setModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const haveDesign = location.state ? location.state.haveDesign : null;
  const prevCustomInfo = location.state ? location.state.customInfo : null;
  const handDrawingImage = location.state ? location.state.handDrawingImage : null;
  const customImages = location.state ? location.state.customImages : null;

  // const customNameState = location.state && location.state.name ? location.state.name : null;
  // const customDescriptionState =
  //   location.state && location.state.description ? location.state.description : null;

  useEffect(() => {
    if (!location.state) navigate('/onboarding');
  }, [location.state, navigate]);

  const customInfo = {
    ...prevCustomInfo,
    viewCount: CUSTOM_VIEW_COUNT,
    name: name,
    description: description,
  };

  const renderCustomThemePageHeader = () => {
    return (
      <Header
        leftSection={
          <IcBackDark
            onClick={() =>
              navigate('/select-keyword', { state: location.state ? location.state : null })
            }
          />
        }
        title='커스텀 타투'
        rightSection={
          <CancelBtn
            modalOn={modalOn}
            setModalOn={setModalOn}
            targetModal={<CustomSizeEscapeModal setModalOn={setModalOn} />}
          />
        }
        transparent={true}
        progressBar={<ProgressBar curStep={5} maxStep={7} />}
      />
    );
  };
  return (
    <PageLayout
      renderHeader={renderCustomThemePageHeader}
      footer={
        <NextFooter
          isActiveNext={isActiveNext}
          navigateURL={'/additional-request'}
          haveDesign={haveDesign}
          customInfo={customInfo}
          handDrawingImage={handDrawingImage}
          customImages={customImages}
        />
      }
    >
      <CustomTheme
        setIsActiveNext={setIsActiveNext}
        setName={setName}
        setDescription={setDescription}
      />
    </PageLayout>
  );
};

export default CustomThemePage;
