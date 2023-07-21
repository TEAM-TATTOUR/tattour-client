import ScrollContainer from 'react-indiana-drag-scroll';
import { styled } from 'styled-components';

const CustomScrollContainer = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <St.CustomScrollWrapper>
        <St.CustomScrollHeader>
          <St.CustomScrollTitle>{title}</St.CustomScrollTitle>
        </St.CustomScrollHeader>
        <St.CustomScrollItemWrapper>
          <ScrollContainer className='scroll-container'>{children}</ScrollContainer>
        </St.CustomScrollItemWrapper>
      </St.CustomScrollWrapper>
    </>
  );
};

const St = {
  CustomScrollWrapper: styled.section`
    padding-left: 2rem;

    background-color: ${({ theme }) => theme.colors.white};
  `,

  CustomScrollHeader: styled.header`
    display: flex;
  `,

  CustomScrollTitle: styled.h2`
    // title eng bold 18 필요
    font-size: 1.8rem;
    font-weight: bold;
  `,

  CustomScrollItemWrapper: styled.div`
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
};

export default CustomScrollContainer;
