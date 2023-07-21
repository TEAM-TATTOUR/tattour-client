import { styled } from 'styled-components';
import CustomScrollContainer from '../../common/CustomScrollContainer';
import useGetCustomSaveList from '../../libs/hooks/useGetCustomSaveList';
import MySaveItem from './MySaveItem';

const MySave = () => {
  const { response, error, loading } = useGetCustomSaveList();

  return (
    <>
      <CustomScrollContainer title={'SAVED'}>
        {!error &&
          !loading &&
          response.map(({ id, name, imageUrl }) => {
            return <MySaveItem key={id} id={id} name={name} imageUrl={imageUrl} />;
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
