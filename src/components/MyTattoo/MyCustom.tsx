import BigScrollContainer from '../../common/BigScrollContainer';
import MyCustomItem from './MyCustomItem';

const dummyMyCustomData = [
  {
    id: 1,
    title: '타투 제목',
  },
  {
    id: 2,
    title: '타투 제목',
  },
  {
    id: 3,
    title: '타투 제목',
  },
];

const MyCustom = () => {
  return (
    <BigScrollContainer title={'MY CUSTOM'}>
      {dummyMyCustomData.map(({ id, title }) => {
        return <MyCustomItem key={id} title={title} />;
      })}
    </BigScrollContainer>
  );
};

export default MyCustom;
