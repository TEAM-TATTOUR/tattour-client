import Header from '../components/Header';
import MyCustom from '../components/MyTattoo/MyCustom';
import MyLike from '../components/MyTattoo/MyLike';
import MySave from '../components/MyTattoo/MySave';
import PageLayout from '../components/PageLayout';
import BackBtn from '../common/Header/BackBtn';

const renderMyTattooHeader = () => {
  return <Header leftSection={<BackBtn />} title='내 타투'></Header>;
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
