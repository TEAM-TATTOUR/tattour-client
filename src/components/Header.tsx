import { styled } from 'styled-components';

interface HeaderProps {
  leftSection: React.ReactNode;
  title?: string;
  rightSection?: React.ReactNode;
  transparent?: boolean;
  progressBar?: React.ReactNode;
  fixed?: boolean;
}

const Header = ({
  leftSection,
  title,
  rightSection,
  transparent,
  progressBar,
  fixed,
}: HeaderProps) => {
  return (
    <St.header transparent={transparent} $fixed={fixed}>
      <St.SectionWrapper>
        {leftSection}
        {title && <St.title>{title}</St.title>}
        {rightSection}
      </St.SectionWrapper>

      {progressBar}
    </St.header>
  );
};

const St = {
  header: styled.header<{ transparent?: boolean; $fixed?: boolean }>`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;

    position: ${({ $fixed }) => ($fixed ? 'fixed' : 'static')};
    top: 0;
    left: 0;
    z-index: ${({ $fixed }) => ($fixed ? 10 : 0)};
    ${({ transparent }) =>
      transparent ? 'background-color: transparent;' : 'background-color: white;'};
  `,

  title: styled.h1`
    ${({ theme }) => theme.fonts.title_semibold_18};
  `,

  SectionWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 1.8rem;
    height: 5.6rem;
  `,

  ProgressBar: styled.div``,
};

export default Header;
