import { styled } from 'styled-components';

interface HaveDesignFooterProps {
  isActiveNext?: boolean;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const HaveDesignFooter = ({ isActiveNext = true, setStep }: HaveDesignFooterProps) => {
  const handleClickFooter = () => {
    {
      isActiveNext && setStep((prev) => prev + 1);
    }
  };

  return (
    <St.HaveDesignFooter $isActiveNext={isActiveNext} onClick={handleClickFooter}>
      <St.FooterText>다음</St.FooterText>
    </St.HaveDesignFooter>
  );
};

export default HaveDesignFooter;

const St = {
  HaveDesignFooter: styled.footer<{ $isActiveNext: boolean }>`
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
