import CustomScrollContainer from '../../common/CustomScrollContainer';
import SmallTattooCard from '../../common/SmallTattooCard';
import useGetLikeSticker from '../../libs/hooks/useGetLikeSticker';

const MyLike = () => {
  const { response, error, loading } = useGetLikeSticker();

  return (
    <CustomScrollContainer title={'LIKE'}>
      {!error &&
        !loading &&
        response.map(
          ({ id, stickerId, mainImageUrl, name, price, discountPrice, discountRate }) => {
            return (
              <SmallTattooCard
                key={id}
                id={stickerId}
                img={mainImageUrl}
                title={name}
                price={discountPrice}
                originalPrice={price}
                discountRate={discountRate}
                isCustom={false}
              />
            );
          },
        )}
    </CustomScrollContainer>
  );
};

export default MyLike;
