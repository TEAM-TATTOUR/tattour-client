import { styled } from 'styled-components';
import CustomScrollContainer from '../../common/CustomScrollContainer';
import MyCustomItem from './MyCustomItem';
import useGetCustomIncomplete from '../../libs/hooks/useGetCustomIncomplete';

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
  // const { response, error, loading } = useGetCustomIncomplete();

  return (
    <>
      <CustomScrollContainer title={'MY CUSTOM'}>
        {dummyMyCustomData.map(({ id, title }) => {
          return <MyCustomItem key={id} title={title} />;
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

export default MyCustom;
