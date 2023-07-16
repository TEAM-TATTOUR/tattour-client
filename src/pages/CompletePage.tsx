import styled from 'styled-components';
import Result from '../common/Result';
import PageLayout from '../components/PageLayout';
import Header from '../components/Header';

const CompletePage = () => {
  const renderCompletePageHeader = () => {
    return <Header title='주문하기' />;
  };

  return (
    <PageLayout renderHeader={renderCompletePageHeader}>
      <Result
        mainText={'결제가 완료되었어요'}
        description={'3일 내에 배송이 시작되며, 문자로 안내드려요'}
      />
      <St.Line />
    </PageLayout>
  );
};

export default CompletePage;

const St = {
  Line: styled.hr`
    height: 1.3rem;

    background-color: ${({ theme }) => theme.colors.bg};
    border-width: 0rem;
  `,
};
