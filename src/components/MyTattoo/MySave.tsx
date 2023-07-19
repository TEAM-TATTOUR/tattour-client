import CustomScrollContainer from '../../common/CustomScrollContainer';
import useGetCustomSaveList from '../../libs/hooks/useGetCustomSaveList';
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
  const { response, error, loading } = useGetCustomSaveList();

  return (
    <CustomScrollContainer title={'SAVE'}>
      {!error &&
        !loading &&
        response.map(({ id, name, imageUrl }) => {
          return <MySaveItem key={id} id={id} name={name} imageUrl={imageUrl} />;
        })}
    </CustomScrollContainer>
  );
};

export default MySave;
