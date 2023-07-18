import DetailInfo from '../components/Detail/DetailInfo';
import DetailCarousel from '../components/Detail/DetailCarousel';
import PageLayout from '../components/PageLayout';
import Header from '../components/Header';
import DetailFooter from '../components/Detail/DetailFooter';
import { useState } from 'react';
import DetailBottom from '../components/Detail/DetailBottom';
import CustomScrollContainer from '../common/CustomScrollContainer';
import SmallTattooCard from '../common/SmallTattooCard';
import BackBtn from '../common/Header/BackBtn';
import { useNavigate, useParams } from 'react-router-dom';

const DUMMY_DATA = [
  {
    id: 0,
    img: 'https://github.com/TEAM-TATTOUR/tattour-client/assets/81505421/2abceb46-6f33-4def-a8ce-32eeae662286',
    title: '고양이 리본 타투',
    discountRate: 5,
    price: 2500,
    originalPrice: 4000,
    isCustom: true,
  },
  {
    id: 1,
    img: 'https://github.com/TEAM-TATTOUR/tattour-client/assets/81505421/2abceb46-6f33-4def-a8ce-32eeae662286',
    title: '고양이 리본 타투',
    discountRate: 5,
    price: 2500,
    originalPrice: 4000,
    isCustom: false,
  },
  {
    id: 2,
    img: 'https://github.com/TEAM-TATTOUR/tattour-client/assets/81505421/2abceb46-6f33-4def-a8ce-32eeae662286',
    title: '고양이 리본 타투',
    discountRate: 5,
    price: 2500,
    originalPrice: 4000,
    isCustom: true,
  },
  {
    id: 3,
    img: 'https://github.com/TEAM-TATTOUR/tattour-client/assets/81505421/2abceb46-6f33-4def-a8ce-32eeae662286',
    title: '고양이 리본 타투',
    discountRate: 5,
    price: 2500,
    originalPrice: 4000,
    isCustom: false,
  },
  {
    id: 4,
    img: 'https://github.com/TEAM-TATTOUR/tattour-client/assets/81505421/2abceb46-6f33-4def-a8ce-32eeae662286',
    title: '고양이 리본 타투',
    discountRate: 5,
    price: 2500,
    originalPrice: 4000,
    isCustom: true,
  },
  {
    id: 5,
    img: 'https://github.com/TEAM-TATTOUR/tattour-client/assets/81505421/2abceb46-6f33-4def-a8ce-32eeae662286',
    title: '고양이 리본 타투',
    discountRate: 5,
    price: 2500,
    originalPrice: 4000,
    isCustom: false,
  },
  {
    id: 6,
    img: 'https://github.com/TEAM-TATTOUR/tattour-client/assets/81505421/2abceb46-6f33-4def-a8ce-32eeae662286',
    title: '고양이 리본 타투',
    discountRate: 5,
    price: 2500,
    originalPrice: 4000,
    isCustom: true,
  },
];

const DetailPage = () => {
  //let { param } = useParams();
  // param.id로 서버에서 상품 데이터 get 해오기
  const param = { id: 1 }; // 나중에 주석처리 하기

  // const navigate = useNavigate();
  const [isSheetOpen, setSheetOpen] = useState(false);
  // const [isCustom, setCustom] = useState(true); // 해당 상품이 custom인지 여부
  const isCustom = true;

  // 찜 여부 state -> 추후 서버통신
  const [like, setLike] = useState(false);

  const renderDetailPageHeader = () => {
    return <Header leftSection={<BackBtn />} />;
  };

  return (
    <PageLayout
      renderHeader={renderDetailPageHeader}
      footer={
        <DetailFooter
          setSheetOpen={setSheetOpen}
          isSecond={false}
          text='구매하기'
          like={like}
          setLike={setLike}
        />
      }
    >
      <DetailCarousel isCustom={isCustom} />
      <DetailInfo id={param.id} />
      <CustomScrollContainer title='비슷한 제품도 추천드려요'>
        {DUMMY_DATA.map((el) => (
          <SmallTattooCard
            key={el.id}
            img={el.img}
            title={el.title}
            discountRate={el.discountRate}
            price={el.price}
            originalPrice={el.originalPrice}
            isCustom={el.isCustom}
          />
        ))}
      </CustomScrollContainer>
      <DetailBottom
        isSheetOpen={isSheetOpen}
        setSheetOpen={setSheetOpen}
        like={like}
        setLike={setLike}
      />
    </PageLayout>
  );
};

export default DetailPage;
