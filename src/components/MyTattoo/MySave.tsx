import { styled } from 'styled-components';
import CustomScrollContainer from '../../common/CustomScrollContainer';
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
    <>
      <CustomScrollContainer title={'SAVE'}>
        {dummyMySaveData.map(({ id, title }) => {
          return <MySaveItem key={id} title={title} />;
        })}
      </CustomScrollContainer>
      <St.Divide />
    </>
  );
};

const St = {
  Divide: styled.hr`
    width: 100%;
    height: 1.3rem;

    border: none;

    background-color: ${({ theme }) => theme.colors.bg};
  `,
};

export default MySave;
