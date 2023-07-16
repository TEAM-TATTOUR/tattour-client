import styled from 'styled-components';
import Result from '../common/Result';

const CompletePage = () => {
  return (
    <div>
      <Result
        mainText={'결제가 완료되었어요'}
        description={'3일 내에 배송이 시작되며, 문자로 안내드려요'}
      />
    </div>
  );
};

export default CompletePage;
