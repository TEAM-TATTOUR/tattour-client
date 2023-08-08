import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

interface NoDesignFooterProps {
  isActiveNext?: boolean;
  // navigateURL: string;
  // haveDesign?: boolean;
  // customInfo?: customInfoType;
  // handDrawingImage?: File | null;
  // customImages?: FileList | null;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const NoDesignFooter = ({
  isActiveNext = true,
  // navigateURL,
  // haveDesign,
  // customInfo,
  // handDrawingImage,
  // customImages,
  setStep,
}: NoDesignFooterProps) => {
  // const navigate = useNavigate();

  const location = useLocation();
  console.log(location.state);

  const handleClickFooter = () => {
    // {
    //   isActiveNext &&
    //     navigate(navigateURL, {
    //       state: {
    //         haveDesign: haveDesign,
    //         customInfo: customInfo,
    //         handDrawingImage: handDrawingImage,
    //         customImages: customImages,
    //       },
    //     });
    // }
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
