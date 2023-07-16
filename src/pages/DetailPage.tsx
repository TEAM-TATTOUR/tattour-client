import styled from 'styled-components';
import DetailInfo from '../components/Detail/DetailInfo';
import DetailCarousel from '../components/Detail/DetailCarousel';
import PageLayout from '../components/PageLayout';
import Header from '../components/Header';
import { IcBackDark, IcCancelDark } from '../assets/icon';
import DetailFooter from '../components/Detail/DetailFooter';
import { useState } from 'react';
import DetailBottom from '../components/Detail/DetailBottom';
import CustomScrollContainer from '../common/CustomScrollContainer';
import SmallTattooCard from '../common/SmallTattooCard';
import BackBtn from '../common/Header/BackBtn';
import CancelBtn from '../common/Header/CancelBtn';

const DUMMY_DATA = [
  {
    img: 'https://github.com/TEAM-TATTOUR/tattour-client/assets/81505421/2abceb46-6f33-4def-a8ce-32eeae662286',
    title: '고양이 리본 타투',
    discountRate: 5,
    price: 2500,
    originalPrice: 4000,
    isCustom: true,
  },
  {
    img: 'https://github.com/TEAM-TATTOUR/tattour-client/assets/81505421/2abceb46-6f33-4def-a8ce-32eeae662286',
    title: '고양이 리본 타투',
    discountRate: 5,
    price: 2500,
    originalPrice: 4000,
    isCustom: false,
  },
  {
    img: 'https://github.com/TEAM-TATTOUR/tattour-client/assets/81505421/2abceb46-6f33-4def-a8ce-32eeae662286',
    title: '고양이 리본 타투',
    discountRate: 5,
    price: 2500,
    originalPrice: 4000,
    isCustom: true,
  },
  {
    img: 'https://github.com/TEAM-TATTOUR/tattour-client/assets/81505421/2abceb46-6f33-4def-a8ce-32eeae662286',
    title: '고양이 리본 타투',
    discountRate: 5,
    price: 2500,
    originalPrice: 4000,
    isCustom: false,
  },
  {
    img: 'https://github.com/TEAM-TATTOUR/tattour-client/assets/81505421/2abceb46-6f33-4def-a8ce-32eeae662286',
    title: '고양이 리본 타투',
    discountRate: 5,
    price: 2500,
    originalPrice: 4000,
    isCustom: true,
  },
  {
    img: 'https://github.com/TEAM-TATTOUR/tattour-client/assets/81505421/2abceb46-6f33-4def-a8ce-32eeae662286',
    title: '고양이 리본 타투',
    discountRate: 5,
    price: 2500,
    originalPrice: 4000,
    isCustom: false,
  },
  {
    img: 'https://github.com/TEAM-TATTOUR/tattour-client/assets/81505421/2abceb46-6f33-4def-a8ce-32eeae662286',
    title: '고양이 리본 타투',
    discountRate: 5,
    price: 2500,
    originalPrice: 4000,
    isCustom: true,
  },
];

const DetailPage = () => {
  const [isSheetOpen, setSheetOpen] = useState(false); // bottomsheet를 위한 state
  const [like, setLike] = useState(false); // 찜 여부 state

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
      <DetailCarousel />
      <DetailInfo />
      <CustomScrollContainer title='비슷한 제품도 추천드려요'>
        {DUMMY_DATA.map((el, index) => (
          <SmallTattooCard
            key={index}
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
