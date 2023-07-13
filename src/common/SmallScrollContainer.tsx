import { styled } from 'styled-components';
import ScrollContainer from 'react-indiana-drag-scroll';

const SmallScrollContainer = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <St.SmallScrollWrapper>
      <header>
        <St.SmallScrollHeaderTitle>{title}</St.SmallScrollHeaderTitle>
      </header>
      <St.SmallScrollItemWrapper>
        <ScrollContainer vertical={false} className='scroll-container'>
          {children}
        </ScrollContainer>
      </St.SmallScrollItemWrapper>
    </St.SmallScrollWrapper>
  );
};

const St = {
  SmallScrollWrapper: styled.section`
    padding-left: 2rem;
    margin-top: 2.8rem;
  `,

  SmallScrollHeaderTitle: styled.h2`
    // title eng bold 18 필요
    font-size: 1.8rem;
    font-weight: bold;
  `,

  SmallScrollItemWrapper: styled.div`
    margin-top: 2.2rem;
    display: flex;
    gap: 1.2rem;
    justify-content: space-between;
    margin-right: 1.2rem;

    .scroll-container {
      display: flex;
      gap: 1.2rem;

      height: 28rem;
      width: 100%;
    }
  `,
};

export default SmallScrollContainer;
