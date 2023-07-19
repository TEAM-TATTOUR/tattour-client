import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

interface NextFooterProps {
  isActiveNext?: boolean;
  navigateURL: string;
  stateList: object;
}

const NextFooter = ({ isActiveNext = true, navigateURL, stateList }: NextFooterProps) => {
  const navigate = useNavigate();

  const handleClickFooter = () => {
    {
      isActiveNext && navigate(navigateURL, { state: { stateList } });
    }
  };

  return (
    <St.NextFooter $isActiveNext={isActiveNext} onClick={handleClickFooter}>
      <St.FooterText>다음</St.FooterText>
    </St.NextFooter>
  );
};

export default NextFooter;

const St = {
  NextFooter: styled.footer<{ $isActiveNext: boolean }>`
    position: sticky;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 7rem;

    background-color: ${({ $isActiveNext, theme }) =>
      $isActiveNext ? theme.colors.gray9 : theme.colors.gray3};
  `,

  FooterText: styled.p`
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.title_semibold_18};
  `,
};
