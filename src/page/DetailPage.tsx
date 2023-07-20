import DetailInfo from '../components/Detail/DetailInfo';
import DetailCarousel from '../components/Detail/DetailCarousel';
import PageLayout from '../components/PageLayout';
import Header from '../components/Header';
import DetailFooter from '../components/Detail/DetailFooter';
import { useEffect, useState } from 'react';
import DetailBottom from '../components/Detail/DetailBottom';
import CustomScrollContainer from '../common/CustomScrollContainer';
import SmallTattooCard from '../common/SmallTattooCard';
import BackBtn from '../common/Header/BackBtn';
import { useNavigate, useParams } from 'react-router-dom';
import useGetSticker from '../libs/hooks/detail/useGetSticker';
import useGetRelated from '../libs/hooks/detail/useGetRelated';
import { setAccessToken } from '../libs/api';

const DetailPage = () => {
  // setAccessToken(
  //   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhY2Nlc3NfdG9rZW4iLCJpYXQiOjE2ODk3NzA2MTUsImV4cCI6MTY5MDk4MDIxNSwidXNlcklkIjoiMSJ9.8Bts023pv_Sosybuq_ysC8j_OBG7D90yDPbp_hZpv2vNAtpw8oGcKpvWav94TUWzyPZUQ1Mm3viouzFMPnFs5Q',
  // );
  const { id } = useParams();
  // param.id로 서버에서 상품 데이터 get 해오기

  //const navigate = useNavigate();
  const [isSheetOpen, setSheetOpen] = useState(false);

  // 찜 여부 state -> 추후 서버통신
  const [like, setLike] = useState<boolean | null>(false);

  const renderDetailPageHeader = () => {
    return <Header leftSection={<BackBtn />} />;
  };

  // 상세페이지 정보 서버 통신
  const { response, error, loading } = useGetSticker(Number(id));

  // 비슷한 목록 서버 통신
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
          relatedResponse.map((el) => (
            <SmallTattooCard
              key={el.id}
              id={el.id}
              img={el.imageUrl}
              title={el.name}
              discountRate={el.discountRate}
              price={el.price}
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
