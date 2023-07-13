import styled from 'styled-components';
import { IcError } from '../../assets/icon';
import { useNavigate } from 'react-router-dom';

interface PreventAccessProps {
  title: string;
  btn_contents: string;
  // 에러 페이지에서 쓰일건지, 만료 페이지에서 쓰일건지 구분
  isError?: boolean;
}

const PreventAccess = ({ title, btn_contents, isError }: PreventAccessProps) => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    isError ? window.location.reload() : navigate('/');
  };

  return (
    <St.ContentsWrapper>
      <IcError />
      <St.Title>{title}</St.Title>
      <St.Button onClick={handleClickButton}>{btn_contents}</St.Button>
    </St.ContentsWrapper>
  );
};

const St = {
  ContentsWrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    gap: 1.9rem;
  `,

  Title: styled.p`
    color: ${({ theme }) => theme.colors.gray8};
    ${({ theme }) => theme.fonts.title_semibold_18};
  `,

  Button: styled.button`
    width: fit-content;
    padding: 1.2rem 1.8rem;

    border-radius: 0.6rem;
    background-color: ${({ theme }) => theme.colors.pink1};

    color: ${({ theme }) => theme.colors.pink5};
    ${({ theme }) => theme.fonts.title_semibold_16};
  `,
};

export default PreventAccess;
