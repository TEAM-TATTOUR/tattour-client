import { styled } from 'styled-components';

interface HeaderProps {
  leftSection: React.ReactElement | React.ReactNode;
  title?: string;
  rightSection: React.ReactElement | React.ReactNode;
  isTransparent?: boolean;
}

const Header = ({ leftSection, title, rightSection, isTransparent }: HeaderProps) => {
  return (
    <St.header isTransparent={isTransparent}>
      {leftSection}
      {title && <St.title>{title}</St.title>}
      {rightSection}
    </St.header>
  );
};

const St = {
  header: styled.header<{ isTransparent?: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.8rem;
    width: 100%;
    height: 5.6rem;

    background-color: ${({ theme }) => theme.colors.white};
    ${({ isTransparent }) => isTransparent && `background-color: transparent;`}
  `,

  title: styled.h1`
    font: ${({ theme }) => theme.fonts.title_semibold_18};
  `,
};

export default Header;
