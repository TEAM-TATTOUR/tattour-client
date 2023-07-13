import BigScrollContainer from '../../common/BigScrollContainer';
import MySaveItem from './MySaveItem';

const dummyMySaveData = [
  {
    id: 1,
    title: '타투 제목',
    haveReferenceImage: true,
  },
  {
    id: 2,
    title: '타투 제목',
    haveReferenceImage: false,
  },
  {
    id: 3,
    title: '타투 제목',
    haveReferenceImage: true,
  },
];

const MySave = () => {
  return (
    <BigScrollContainer title={'SAVE'}>
      {dummyMySaveData.map(({ id, title, haveReferenceImage }) => {
        return <MySaveItem key={id} title={title} haveReferenceImage={haveReferenceImage} />;
      })}
    </BigScrollContainer>
  );
};

export default MySave;
