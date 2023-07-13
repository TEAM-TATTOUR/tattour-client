import ScrollContainer from 'react-indiana-drag-scroll';
import { styled } from 'styled-components';

const BigScrollContainer = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <>
      <St.BigScrollWrapper>
        <St.BigScrollHeader>
          <St.BigScrollTitle>{title}</St.BigScrollTitle>
        </St.BigScrollHeader>
        <St.BigScrollItemWrapper>
          <ScrollContainer vertical={false} className='scroll-container'>
            {children}
          </ScrollContainer>
        </St.BigScrollItemWrapper>
      </St.BigScrollWrapper>
      <St.Divide />
    </>
  );
};

const St = {
  BigScrollWrapper: styled.section`
    margin-top: 2.2rem;
    padding-left: 2rem;

    background-color: ${({ theme }) => theme.colors.white};
  `,

  BigScrollHeader: styled.header`
    display: flex;
  `,

  BigScrollTitle: styled.h2`
    // title eng bold 18 필요
    font-size: 1.8rem;
    font-weight: bold;
  `,

  BigScrollItemWrapper: styled.div`
    display: flex;
    gap: 1.2rem;
    justify-content: space-between;
    margin-top: 2.2rem;
    margin-right: 1.2rem;

    .scroll-container {
      display: flex;
      gap: 1.2rem;

      height: 23.3rem;
      width: 100%;
    }
  `,

  Divide: styled.hr`
    width: 100%;
    height: 1.3rem;

    border: none;

    background-color: ${({ theme }) => theme.colors.bg};
  `,
};

export default BigScrollContainer;
