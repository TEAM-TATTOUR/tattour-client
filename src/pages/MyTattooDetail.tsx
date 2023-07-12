import PageLayout from '../components/PageLayout';
import MyTattooTagSection from '../components/MyTattoo/MyTattooTagSection';
import MyTattooDetailSection from '../components/MyTattoo/MyTattooDetailSection';
import { useParams } from 'react-router-dom';

enum shippingStatus {
  REQUEST = 'request',
  RECEIVING = 'receiving',
  RECEIPT_COMPLETE = 'receiptComplete',
  RECEIPT_FAILED = 'receiptFailed',
  SHIPPING = 'shipping',
  SHIPPED = 'shipped',
}

interface CustomTattooProps {
  id: number;
  img: string[];
  color?: string;
  topic?: string;
  title: string;
  size: string;
  quantity: number;
  Requests: string;
  isOpen: boolean;
  shippingStatus: string;
}

const dummyHaveDesignData: CustomTattooProps = {
  id: 1,
  img: [
    'https://github.com/TEAM-TATTOUR/tattour-client/assets/51692363/77a5678f-2704-4340-8877-91a52305aa27',
  ],
  title: '타투 제목',
  size: '5cm 이하',
  quantity: 1,
  Requests: '알잘딱깔센ㅇㅋ?',
  isOpen: false,
  shippingStatus: shippingStatus.RECEIVING,
};

const dummyNoDesignData: CustomTattooProps = {
  id: 2,
  img: [
    'https://github.com/TEAM-TATTOUR/tattour-client/assets/51692363/77a5678f-2704-4340-8877-91a52305aa27',
    'https://github.com/TEAM-TATTOUR/tattour-client/assets/51692363/77a5678f-2704-4340-8877-91a52305aa27',
    'https://github.com/TEAM-TATTOUR/tattour-client/assets/51692363/77a5678f-2704-4340-8877-91a52305aa27',
  ],
  title: '타투 제목',
  size: '5cm 이하',
  quantity: 1,
  Requests: '알잘딱깔센ㅇㅋ?',
  isOpen: false,
  shippingStatus: '',
  color: '흑백',
  topic: '백조를 선으로 딴 라인 타투',
};

const MyTattooDetail = () => {
  const { id } = useParams<{ id: string }>();

  // TODO: 서버에서 데이터 받아오기 전 더미
  const dummyData = id === '1' ? dummyHaveDesignData : dummyNoDesignData;
  const haveDesign = id === '1' ? true : false;

  return (
    <PageLayout>
      <MyTattooTagSection shippingStatus={dummyData.shippingStatus} isOpen={dummyData.isOpen} />
      <MyTattooDetailSection
        title={dummyData.title}
        image={dummyData.img}
        haveDesign={haveDesign}
        size={dummyData.size}
        quantity={dummyData.quantity}
        requests={dummyData.Requests}
        color={dummyData.color}
        topic={dummyData.topic}
      />
    </PageLayout>
  );
};

export default MyTattooDetail;
