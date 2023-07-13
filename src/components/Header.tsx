import { styled } from 'styled-components';

interface HeaderProps {
  leftSection: React.ReactNode;
  title?: string;
  rightSection?: React.ReactNode;
  transparent?: boolean;
  progressBar?: React.ReactNode;
}

const Header = ({ leftSection, title, rightSection, transparent, progressBar }: HeaderProps) => {
  return (
    <St.header transparent={transparent}>
      {leftSection}
      {title && <St.title>{title}</St.title>}
      {rightSection ? rightSection : <St.BlankSection />}
    </St.header>
  );
};

const St = {
  header: styled.header<{ transparent?: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.8rem;
    width: 100%;
    height: 5.6rem;

    ${({ transparent }) =>
      transparent ? 'background-color: transparent;' : 'background-color: white;'}
  `,

  title: styled.h1`
    font: ${({ theme }) => theme.fonts.title_semibold_18};
  `,

  BlankSection: styled.div`
    width: 2.4rem;
    height: 2.4rem;
  `,
};

export default Header;
