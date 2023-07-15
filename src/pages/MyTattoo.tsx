import { useNavigate } from 'react-router-dom';
import { IcArrowLeftGray } from '../assets/icon';
import Header from '../components/Header';
import MyCustom from '../components/MyTattoo/MyCustom';
import MyLike from '../components/MyTattoo/MyLike';
import MySave from '../components/MyTattoo/MySave';
import PageLayout from '../components/PageLayout';

const renderMyTattooHeader = () => {
  const LeftButton = () => {
    const navigate = useNavigate();
    const handleClickBack = () => {
      navigate('/');
    };
    return <IcArrowLeftGray onClick={handleClickBack} />;
  };

  return <Header leftSection={<LeftButton />} title='내 타투'></Header>;
};

const MyTattoo = () => {
  return (
    <PageLayout renderHeader={renderMyTattooHeader}>
      <MyCustom />
      <MySave />
      <MyLike />
    </PageLayout>
  );
};

export default MyTattoo;
