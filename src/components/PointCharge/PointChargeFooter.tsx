import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

interface PointChargeFooterProps {
  isActiveNext: boolean;
  redirectURL: string;
  chargeAmount: number;
}

const PointChargeFooter = ({ isActiveNext, redirectURL, chargeAmount }: PointChargeFooterProps) => {
  const navigate = useNavigate();

  const handleClickFooter = () => {
    {
      isActiveNext &&
        navigate('/point-transfer', {
          state: {
            redirectURL: redirectURL,
            chargeAmount: chargeAmount,
          },
        });
    }
  };

  return (
    <St.PointChargeFooter $isActiveNext={isActiveNext} onClick={handleClickFooter}>
      <St.FooterText>다음</St.FooterText>
    </St.PointChargeFooter>
  );
};

export default PointChargeFooter;

const St = {
  PointChargeFooter: styled.footer<{ $isActiveNext: boolean }>`
    position: fixed;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 43rem;
    height: 7rem;

    background-color: ${({ $isActiveNext, theme }) =>
      $isActiveNext ? theme.colors.gray9 : theme.colors.gray3};
  `,

  FooterText: styled.p`
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.title_semibold_18};
  `,
};
