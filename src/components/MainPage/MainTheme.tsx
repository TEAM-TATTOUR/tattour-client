import { styled } from 'styled-components';
import ScrollContainer from 'react-indiana-drag-scroll';
import useGetThemeCard from '../../libs/hooks/useGetThemeCard';
import { useNavigate } from 'react-router-dom';

const MainTheme = () => {
  const { response, error, loading } = useGetThemeCard();

  const navigate = useNavigate();

  const handleClickCard = (name: string) => () => {
    navigate(`/list`, {
      state: {
        type: '장르',
        name: name,
      },
    });
  };

  return (
    <St.MainThemeSection>
      <St.MainThemeHeader>
        <St.MainThemeTitle>THEME</St.MainThemeTitle>
      </St.MainThemeHeader>
      <St.MainThemeWrapper>
        <ScrollContainer className='scroll-container' vertical={false} hideScrollbars={true}>
          {!loading &&
            !error &&
            response.map(({ id, name, imageUrl }) => {
              return (
                <St.MainThemeItem key={id} onClick={handleClickCard(name)}>
                  <St.MainThemeItemImage src={imageUrl} />
                </St.MainThemeItem>
              );
            })}
        </ScrollContainer>
      </St.MainThemeWrapper>
    </St.MainThemeSection>
  );
};

const St = {
  MainThemeSection: styled.section`
    padding-left: 2rem;
    margin-top: 2.8rem;
  `,

  MainThemeHeader: styled.header`
    display: flex;
    justify-content: start;
    align-items: center;
  `,

  MainThemeTitle: styled.h2`
    ${({ theme }) => theme.fonts.title_eng_bold_20};
  `,

  MainThemeWrapper: styled.div`
    margin-top: 2.2rem;
    margin-right: 1.2rem;

    .scroll-container {
      display: flex;
      flex-direction: row;
      gap: 1.2rem;
      width: 100%;
    }
  `,

  MainThemeItem: styled.article`
    display: flex;
    flex-direction: column;

    width: 15.3rem;
  `,

  MainThemeItemImage: styled.img`
    width: 15.3rem;
    height: 9.6rem;
  `,

  MainThemeItemTitle: styled.h3`
    margin-top: 1rem;

    ${({ theme }) => theme.fonts.title_semibold_16};
  `,

  MainThemeItemDescription: styled.p`
    margin-top: 0.2rem;
    margin-bottom: 0.8rem;

    // detail medium 12 필요
    ${({ theme }) => theme.fonts.detail_medium_12}

    color: ${({ theme }) => theme.colors.gray3};
  `,
};

export default MainTheme;
