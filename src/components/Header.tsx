import { styled } from 'styled-components';

interface HeaderProps {
  leftSection: React.ReactNode;
  title?: string;
  rightSection: React.ReactNode;
  transparent: boolean;
}

const Header = ({ leftSection, title, rightSection, transparent }: HeaderProps) => {
  return (
    <St.header $transparent={transparent}>
      {leftSection}
      {title && <St.title>{title}</St.title>}
      {rightSection}
    </St.header>
  );
};

const St = {
  header: styled.header<{ $transparent: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.8rem;
    width: 100%;
    height: 5.6rem;

    position: fixed;
    z-index: 10;

    background-color: ${({ theme, $transparent }) =>
      $transparent ? `transparent` : theme.colors.white};
  `,

  title: styled.h1`
    font: ${({ theme }) => theme.fonts.title_semibold_18};
  `,
};

export default Header;
