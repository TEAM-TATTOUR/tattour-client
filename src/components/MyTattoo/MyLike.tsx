import CustomScrollContainer from '../../common/CustomScrollContainer';
import SmallTattooCard from '../../common/SmallTattooCard';
import useGetLikeSticker from '../../libs/hooks/useGetLikeSticker';

const dummyMyLikeData = [
  {
    id: 1,
    img: 'https://github.com/TEAM-TATTOUR/tattour-client/assets/51692363/77a5678f-2704-4340-8877-91a52305aa27',
    title: '타투 제목',
    price: 2500,
    originalPrice: 4000,
    discountRate: 5,
    isCustom: true,
  },
  {
    id: 2,
    img: 'https://github.com/TEAM-TATTOUR/tattour-client/assets/51692363/77a5678f-2704-4340-8877-91a52305aa27',
    title: '타투 제목',
    price: 2500,
    originalPrice: 4000,
    discountRate: 5,
    isCustom: true,
  },
  {
    id: 3,
    img: 'https://github.com/TEAM-TATTOUR/tattour-client/assets/51692363/77a5678f-2704-4340-8877-91a52305aa27',
    title: '타투 제목',
    price: 2500,
    originalPrice: 4000,
    discountRate: 5,
    isCustom: true,
  },
  {
    id: 4,
    img: 'https://github.com/TEAM-TATTOUR/tattour-client/assets/51692363/77a5678f-2704-4340-8877-91a52305aa27',
    title: '타투 제목',
    price: 2500,
    originalPrice: 4000,
    discountRate: 5,
    isCustom: false,
  },
  {
    id: 5,
    img: 'https://github.com/TEAM-TATTOUR/tattour-client/assets/51692363/77a5678f-2704-4340-8877-91a52305aa27',
    title: '타투 제목',
    price: 2500,
    originalPrice: 4000,
    discountRate: 5,
    isCustom: false,
  },
];

const MyLike = () => {
  const { response, error, loading } = useGetLikeSticker();

  return (
    <CustomScrollContainer title={'LIKE'}>
      {!error &&
        !loading &&
        response.map(({ id, mainImageUrl, name, price, discountPrice, discountRate }) => {
          return (
            <SmallTattooCard
              key={id}
              id={id}
              img={mainImageUrl}
              title={name}
              price={discountPrice}
              originalPrice={price}
              discountRate={discountRate}
              isCustom={false}
            />
          );
        })}
    </CustomScrollContainer>
  );
};

export default MyLike;
