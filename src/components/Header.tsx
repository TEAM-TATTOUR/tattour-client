import { styled } from 'styled-components';

interface HeaderProps {
  leftSection: React.ReactElement | React.ReactNode;
  title?: string;
  rightSection: React.ReactElement | React.ReactNode;
}

const Header = ({ leftSection, title, rightSection }: HeaderProps) => {
  return (
    <St.header>
      {leftSection}
      {title && <St.title>{title}</St.title>}
      {rightSection}
    </St.header>
  );
};

const St = {
  header: styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.8rem;
    width: 100%;
    height: 5.6rem;
  `,

  title: styled.h1`
    font: ${({ theme }) => theme.fonts.title_semibold_18};
  `,
};

export default Header;
