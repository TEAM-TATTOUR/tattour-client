import ScrollContainer from 'react-indiana-drag-scroll';
import { styled } from 'styled-components';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const CustomScrollContainer = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const { pathname } = useLocation();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <St.CustomScrollWrapper>
        <St.CustomScrollHeader>
          <St.CustomScrollTitle>{title}</St.CustomScrollTitle>
        </St.CustomScrollHeader>
        <St.CustomScrollItemWrapper>
          <ScrollContainer innerRef={ref} className='scroll-container'>
            {children}
          </ScrollContainer>
        </St.CustomScrollItemWrapper>
      </St.CustomScrollWrapper>
    </>
  );
};

const St = {
  CustomScrollWrapper: styled.section`
    background-color: ${({ theme }) => theme.colors.white};
  `,

  CustomScrollHeader: styled.header`
    margin-left: 2.2rem;
    display: flex;
  `,

  CustomScrollTitle: styled.h2`
    ${({ theme }) => theme.fonts.title_semibold_16};
  `,

  CustomScrollItemWrapper: styled.div`
    display: flex;
    gap: 1.2rem;
    justify-content: space-between;
    margin-top: 2.2rem;

    .scroll-container {
      display: flex;
      gap: 1rem;

      padding: 0rem 2rem;

      height: 23.3rem;
      width: 100%;
    }
  `,
};

export default CustomScrollContainer;
