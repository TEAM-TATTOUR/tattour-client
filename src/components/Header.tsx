import { styled } from 'styled-components';

interface HeaderProps {
  backBtn: React.ReactNode;
  title?: string;
  cancelBtn: React.ReactNode;
  transparent?: boolean;
  progressBar?: React.ReactNode;
}

const Header = ({ backBtn, title, cancelBtn, transparent, progressBar }: HeaderProps) => {
  return (
    <div>
      <St.header transparent={transparent}>
        {backBtn}
        {title && <St.title>{title}</St.title>}
        {cancelBtn}
      </St.header>

      {progressBar}
    </div>
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
};

export default Header;
