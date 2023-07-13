import BigScrollContainer from '../../common/BigScrollContainer';
import MySaveItem from './MySaveItem';

const dummyMySaveData = [
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

const MySave = () => {
  return (
    <BigScrollContainer title={'SAVE'}>
      {dummyMySaveData.map(({ id, title }) => {
        return <MySaveItem key={id} title={title} />;
      })}
    </BigScrollContainer>
  );
};

export default MySave;
