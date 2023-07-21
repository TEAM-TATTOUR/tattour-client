import BackBtn from '../common/Header/BackBtn';
import Header from '../components/Header';
import MySave from '../components/MyTattoo/MySave';
import PageLayout from '../components/PageLayout';

const renderSaveHeader = () => {
  return <Header leftSection={<BackBtn />} title={'임시저장'}></Header>;
};

const SavePage = () => {
  return (
    <PageLayout renderHeader={renderSaveHeader}>
      <MySave />
    </PageLayout>
  );
};

export default SavePage;
