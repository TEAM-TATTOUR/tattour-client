import { styled } from 'styled-components';
import ScrollContainer from 'react-indiana-drag-scroll';
import useGetStyleCard, { MainStyleItemProps } from '../../libs/hooks/useGetStyleCard';
import { useNavigate } from 'react-router-dom';

const renderMainStyleDummyImage = () => {
  return (
    <div
      style={{
        width: '15.3rem',
        height: '9.6rem',
        backgroundColor: 'gray',
      }}
    ></div>
  );
};

const MainStyle = () => {
  const { response, error, loading } = useGetStyleCard();

  const navigate = useNavigate();

  const handleClickCard = (name: string) => () => {
    navigate(`/list`, {
      state: {
        type: '스타일',
        name: name,
      },
    });
  };

  return (
    <St.MainStyleSection>
      <St.MainStyleHeader>
        <St.MainStyleTitle>STYLE</St.MainStyleTitle>
      </St.MainStyleHeader>
      <St.MainStyleWrapper>
        <ScrollContainer className='scroll-container' vertical={false} hideScrollbars={true}>
          {!loading &&
            !error &&
            response.map((item) => {
              return (
                <St.MainStyleItem key={item.id} onClick={handleClickCard(item.name)}>
                  {renderMainStyleDummyImage()}
                  <St.MainThemeItemTitle>{item.name}</St.MainThemeItemTitle>
                  <St.MainThemeItemDescription>{item.description}</St.MainThemeItemDescription>
                </St.MainStyleItem>
              );
            })}
        </ScrollContainer>
      </St.MainStyleWrapper>
    </St.MainStyleSection>
  );
};

const St = {
  MainStyleSection: styled.section`
    padding-left: 2rem;
    margin-top: 3.6rem;
  `,

  MainStyleHeader: styled.header`
    display: flex;
    justify-content: start;
    align-items: center;
  `,

  MainStyleTitle: styled.h2`
    ${({ theme }) => theme.fonts.title_eng_bold_20};
  `,

  MainStyleWrapper: styled.div`
    margin-top: 1rem;
    margin-right: 1.2rem;

    .scroll-container {
      display: flex;
      flex-direction: row;
      gap: 1.2rem;
      width: 100%;
    }
  `,

  MainStyleItem: styled.article`
    display: flex;
    flex-direction: column;

    width: 15.3rem;
  `,

  MainThemeItemTitle: styled.span`
    margin-top: 1rem;

    ${({ theme }) => theme.fonts.title_semibold_16};
  `,

  MainThemeItemDescription: styled.span`
    margin-top: 0.2rem;
    margin-bottom: 5rem;

    // detail medium 12 필요
    ${({ theme }) => theme.fonts.detail_medium_12};

    color: ${({ theme }) => theme.colors.gray3};
  `,
};

export default MainStyle;
