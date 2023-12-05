import styled from 'styled-components';

const PayMethodInfo = () => {
  return (
    <div>
      <St.PriceContainer>
        <St.Title>결제 수단</St.Title>
        <St.Text>무통장 입금</St.Text>
        <St.Description>
          현재 결제 수단은 무통장 입금만 가능해요
          <br />
          추후 업데이트에 다른 결제 수단이 추가될 예정이에요
        </St.Description>
      </St.PriceContainer>
    </div>
  );
};

export default PayMethodInfo;

const St = {
  PriceContainer: styled.article`
    padding: 2.8rem 2.2rem 3.4rem 2.2rem;
  `,
  Title: styled.h2`
    margin-bottom: 2.3rem;

    ${({ theme }) => theme.fonts.title_semibold_18};
    color: ${({ theme }) => theme.colors.gray8};
  `,
  Text: styled.p`
    margin-bottom: 1.6rem;
    ${({ theme }) => theme.fonts.body_medium_16};
  `,
  Description: styled.p`
    ${({ theme }) => theme.fonts.body_medium_14};
    color: ${({ theme }) => theme.colors.gray2};
  `,
};
