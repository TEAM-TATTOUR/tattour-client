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
      {title && <h1>{title}</h1>}
      {rightSection}
    </St.header>
  );
};

const St = {
  header: styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    height: 56px;
  `,
};

export default Header;
