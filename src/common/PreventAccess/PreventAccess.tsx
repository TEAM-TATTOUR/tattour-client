import styled from 'styled-components';
import { IcError } from '../../assets/icon';
import { useNavigate } from 'react-router-dom';
import { removeAccessToken } from '../../libs/api';

interface PreventAccessProps {
  title: string;
  btnContents: string;
}

const PreventAccess = ({ title, btnContents }: PreventAccessProps) => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate('/');
    removeAccessToken();
  };

  return (
    <St.ContentsWrapper>
      <IcError />
      <St.Title>{title}</St.Title>
      <St.Button onClick={handleClickButton}>{btnContents}</St.Button>
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
