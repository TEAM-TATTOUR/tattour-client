import { styled } from 'styled-components';

interface NoDesignFooterProps {
  isActiveNext?: boolean;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const NoDesignFooter = ({ isActiveNext = true, setStep }: NoDesignFooterProps) => {
  const handleClickFooter = () => {
    {
      isActiveNext && setStep((prev) => prev + 1);
    }
  };

  return (
    <St.NoDesignFooter $isActiveNext={isActiveNext} onClick={handleClickFooter}>
      <St.FooterText>다음</St.FooterText>
    </St.NoDesignFooter>
  );
};

export default NoDesignFooter;

const St = {
  NoDesignFooter: styled.footer<{ $isActiveNext: boolean }>`
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
