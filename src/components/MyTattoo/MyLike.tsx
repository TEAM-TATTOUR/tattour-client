import SmallScrollContainer from '../../common/SmallScrollContainer';
import MyLikeItem from './MyLikeItem';

const dummyMyLikeData = [
  {
    id: 1,
    title: '타투 제목',
    price: 2500,
    originalPrice: 4000,
    discountRate: 5,
  },
  {
    id: 2,
    title: '타투 제목',
    price: 2500,
    originalPrice: 4000,
    discountRate: 5,
  },
  {
    id: 3,
    title: '타투 제목',
    price: 2500,
    originalPrice: 4000,
    discountRate: 5,
  },
  {
    id: 4,
    title: '타투 제목',
    price: 2500,
    originalPrice: 4000,
    discountRate: 5,
  },
  {
    id: 5,
    title: '타투 제목',
    price: 2500,
    originalPrice: 4000,
    discountRate: 5,
  },
];

const MyLike = () => {
  return (
    <SmallScrollContainer title={'LIKE'}>
      {dummyMyLikeData.map(({ id, title, price, originalPrice, discountRate }) => {
        return (
          <MyLikeItem
            key={id}
            title={title}
            price={price}
            originalPrice={originalPrice}
            discountRate={discountRate}
          />
        );
      })}
    </SmallScrollContainer>
  );
};

export default MyLike;
