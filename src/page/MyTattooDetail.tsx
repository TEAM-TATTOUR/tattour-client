import PageLayout from '../components/PageLayout';
import MyTattooTagSection from '../components/MyTattoo/MyTattooTagSection';
import MyTattooDetailSection from '../components/MyTattoo/MyTattooDetailSection';
import { useNavigate, useParams } from 'react-router-dom';
import { IcCancelDark } from '../assets/icon';
import Header from '../components/Header';
import useGetMyTattooDetail from '../libs/hooks/useGetCustomDetail';

const renderMyTattooDetailHeader = () => {
  const RightButton = () => {
    const navigate = useNavigate();
    const handleClickBack = () => {
      navigate(-1);
    };
    return <IcCancelDark onClick={handleClickBack} />;
  };

  return <Header rightSection={<RightButton />} title='타투 상세'></Header>;
};

const MyTattooDetail = () => {
  const { id } = useParams<{ id: string }>();

  // TODO: 서버에서 데이터 받아오기 전 더미
  // const dummyData = id === '1' ? dummyHaveDesignData : dummyNoDesignData;
  // const haveDesign = id === '1' ? true : false;

  const { response, error, loading } = useGetMyTattooDetail(id as string);

  return (
    <PageLayout renderHeader={renderMyTattooDetailHeader}>
      {!error && !loading && response && (
        <>
          <MyTattooTagSection shippingStatus={response.process} isOpen={response.isPublic} />
          <MyTattooDetailSection
            title={response.name}
            image={response.images}
            mainImage={response.mainImageUrl}
            haveDesign={response.haveDesign}
            size={response.size}
            quantity={response.count}
            requests={response.demand}
            color={response?.isColored}
            topic={response?.description}
          />
        </>
      )}
    </PageLayout>
  );
};

export default MyTattooDetail;
