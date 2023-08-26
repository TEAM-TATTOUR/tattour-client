import DetailInfo from '../components/Detail/DetailInfo';
import DetailCarousel from '../components/Detail/DetailCarousel';
import PageLayout from '../components/PageLayout';
import Header from '../components/Header';
import DetailFooter from '../components/Detail/DetailFooter';
import { useEffect, useState } from 'react';
import DetailBottom from '../components/Detail/DetailBottom';
import CustomScrollContainer from '../common/CustomScrollContainer';
import SmallTattooCard from '../common/SmallTattooCard';
import { useParams, useNavigate } from 'react-router-dom';
import useGetSticker from '../libs/hooks/detail/useGetSticker';
import useGetRelated from '../libs/hooks/detail/useGetRelated';
import { IcBackDark } from '../assets/icon';

const DetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [isSheetOpen, setSheetOpen] = useState(false);

  const [like, setLike] = useState<boolean | null>(false);

  const renderDetailPageHeader = () => {
    return (
      <Header
        leftSection={
          <IcBackDark
            onClick={() => {
              navigate('/list');
            }}
          />
        }
      />
    );
  };

  const { response, error, loading } = useGetSticker(Number(id));

  const {
    response: relatedResponse,
    error: relatedError,
    loading: relatedLoading,
  } = useGetRelated(Number(id));

  useEffect(() => {
    response && setLike(response.productLiked);
  }, [response]);

  return (
    <PageLayout
      renderHeader={renderDetailPageHeader}
      footer={
        <DetailFooter
          id={Number(id)}
          setSheetOpen={setSheetOpen}
          isSecond={false}
          text='구매하기'
          like={like}
          setLike={setLike}
          count={1}
          shippingFee={3000}
        />
      }
    >
      {!error && !loading && response && (
        <>
          <DetailCarousel isCustom={response.isCustom} images={response.images} />
          <DetailInfo response={response} />
        </>
      )}
      <CustomScrollContainer title='비슷한 제품도 추천드려요'>
        {!relatedError &&
          !relatedLoading &&
          relatedResponse &&
          relatedResponse.map((el) => (
            <SmallTattooCard
              key={el.id}
              id={el.id}
              img={el.imageUrl}
              title={el.name}
              discountRate={el.discountRate}
              price={el.discountPrice}
              originalPrice={el.price}
              isCustom={el.isCustom}
            />
          ))}
      </CustomScrollContainer>
      {!error && !loading && response && (
        <DetailBottom
          id={Number(id)}
          isSheetOpen={isSheetOpen}
          setSheetOpen={setSheetOpen}
          like={like}
          setLike={setLike}
          discountPrice={response.discountPrice}
          shippingCost={response.shippingCost}
        />
      )}
    </PageLayout>
  );
};

export default DetailPage;
