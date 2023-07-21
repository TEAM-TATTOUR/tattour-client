import { styled } from 'styled-components';
import CustomScrollContainer from '../../common/CustomScrollContainer';
import MyCustomItem from './MyCustomItem';
import useGetMyCustom from '../../libs/hooks/useGetMyCustom';

const MyCustom = () => {
  const { response, error, loading } = useGetMyCustom();

  return (
    <>
      <CustomScrollContainer title={'MY CUSTOM'}>
        {!error &&
          !loading &&
          response.map(({ id, name, imageUrl }) => {
            return <MyCustomItem key={id} name={name} imageUrl={imageUrl} />;
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
