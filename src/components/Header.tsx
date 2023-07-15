import { styled } from 'styled-components';

interface HeaderProps {
  leftSection: React.ReactNode;
  title?: string;
  rightSection: React.ReactNode;
  transparent?: boolean;
}

const Header = ({ leftSection, title, rightSection, transparent }: HeaderProps) => {
  return (
    <>
      <St.header transparent={transparent}>
        {leftSection}
        {title && <St.title>{title}</St.title>}
        {rightSection}
      </St.header>
      {/* 여기에 프로그레스바 추가 (아래처럼 쓰면 됨)*/}
      {/* <ProgressBar curStep={2} maxStep={5} /> */}
    </>
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
    ${({ theme }) => theme.fonts.title_semibold_18};
  `,
};

export default Header;
