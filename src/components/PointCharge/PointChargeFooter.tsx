import { styled } from 'styled-components';

const PointChargeFooter = () => {
  return (
    <St.PointChargeFooter>
      <St.FooterText>다음</St.FooterText>
    </St.PointChargeFooter>
  );
};

export default PointChargeFooter;

const St = {
  PointChargeFooter: styled.footer`
    position: absolute;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 7rem;

    background-color: ${({ theme }) => theme.colors.gray9};
  `,

  FooterText: styled.p`
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.title_semibold_18};
  `,
};
