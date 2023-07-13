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
    <div>
      <St.header transparent={transparent} $fixed={fixed}>
        {leftSection}
        {title && <St.title>{title}</St.title>}
        {rightSection}
      </St.header>

      {progressBar}
    </div>
  );
};

const St = {
  header: styled.header<{ transparent?: boolean; $fixed?: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.8rem;
    width: 100%;
    height: 5.6rem;

    position: ${({ $fixed }) => ($fixed ? 'fixed' : 'static')};
    z-index: ${({ $fixed }) => ($fixed ? 10 : 0)};
    ${({ transparent }) =>
      transparent ? 'background-color: transparent;' : 'background-color: white;'};
  `,

  title: styled.h1`
    font: ${({ theme }) => theme.fonts.title_semibold_18};
  `,
};

export default Header;
