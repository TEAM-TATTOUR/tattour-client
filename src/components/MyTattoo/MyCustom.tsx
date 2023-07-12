import ScrollContainer from 'react-indiana-drag-scroll';
import { styled } from 'styled-components';
import { LabelCustomSmall } from '../../assets/icon';

const renderDummyImageComponent = () => {
  return (
    <div
      style={{
        width: '15.3rem',
        height: '16.3rem',
        backgroundColor: 'gray',
      }}
    ></div>
  );
};

const dummyMyCustomData = [
  {
    id: 1,
    title: '타투 제목',
    isDraft: true,
  },
  {
    id: 2,
    title: '타투 제목',
    isDraft: true,
  },
  {
    id: 3,
    title: '타투 제목',
    isDraft: true,
  },
];

const MyCustom = () => {
  return (
    <>
      <St.MyCustomWrapper>
        <St.MyCustomHeader>
          <St.MyCustomTitle>MY CUSTOM</St.MyCustomTitle>
        </St.MyCustomHeader>
        <St.MyCustomItemWrapper>
          <ScrollContainer vertical={false} className='scroll-container'>
            {dummyMyCustomData.map(({ id, title, isDraft }) => {
              return (
                <St.MyCustomItem key={id}>
                  <LabelCustomSmall />
                  {renderDummyImageComponent()}
                  <St.MyCustomItemTitle>{title}</St.MyCustomItemTitle>
                  {isDraft && (
                    <St.MyCustomItemDraftTag>
                      <St.MyCustomItemDraftTagText>임시저장</St.MyCustomItemDraftTagText>
                    </St.MyCustomItemDraftTag>
                  )}
                </St.MyCustomItem>
              );
            })}
          </ScrollContainer>
        </St.MyCustomItemWrapper>
      </St.MyCustomWrapper>
      <St.Divide />
    </>
  );
};

const St = {
  MyCustomWrapper: styled.section`
    margin-top: 2.2rem;
    padding-left: 2rem;

    background-color: ${({ theme }) => theme.colors.white};
  `,

  MyCustomHeader: styled.header`
    display: flex;
  `,

  MyCustomTitle: styled.h2`
    // title eng bold 18 필요
    font-size: 1.8rem;
    font-weight: bold;
  `,

  MyCustomItemWrapper: styled.div`
    display: flex;
    gap: 1.2rem;
    justify-content: space-between;
    margin-top: 2.2rem;
    margin-right: 1.2rem;

    .scroll-container {
      display: flex;
      gap: 1.2rem;

      height: 28rem;
      width: 100%;
    }
  `,

  MyCustomItem: styled.article`
    position: relative;

    & > svg {
      position: absolute;
    }
  `,

  MyCustomItemTitle: styled.h3`
    margin-top: 1.3rem;
    ${({ theme }) => theme.fonts.body_medium_14};
    color: ${({ theme }) => theme.colors.gray7};
  `,

  MyCustomItemDraftTag: styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6.4rem;
    height: 2.6rem;
    border-radius: 0.5rem;
    margin-top: 0.9rem;

    background-color: ${({ theme }) => theme.colors.gray0};
  `,

  MyCustomItemDraftTagText: styled.span`
    ${({ theme }) => theme.fonts.body_medium_14};
    color: ${({ theme }) => theme.colors.gray3};
  `,

  Divide: styled.hr`
    width: 100%;
    height: 1.3rem;

    border: none;

    background-color: ${({ theme }) => theme.colors.bg};
  `,
};

export default MyCustom;
