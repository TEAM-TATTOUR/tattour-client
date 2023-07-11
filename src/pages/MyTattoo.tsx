import { IcArrowLeftGray, IcCancelDark } from '../assets/icon';
import Header from '../components/Header';
import MyCustom from '../components/MyTattoo/MyCustom';
import MyLike from '../components/MyTattoo/MyLike';
import PageLayout from '../components/PageLayout';

const renderMyTattooHeader = () => {
  return (
    <Header
      leftSection={<IcArrowLeftGray />}
      title='내 타투'
      rightSection={<IcCancelDark />}
    ></Header>
  );
};

const MyTattoo = () => {
  return (
    <PageLayout renderHeader={renderMyTattooHeader}>
      <MyCustom />
      <MyLike />
    </PageLayout>
  );
};

export default MyTattoo;
