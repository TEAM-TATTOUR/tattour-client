import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { SetStateAction } from 'react';
import { api } from '../../libs/api';

interface RegisterNameFooterProps {
  userName: string;
  setStep: React.Dispatch<SetStateAction<number>>;
}

const RegisterNameFooter = ({ userName, setStep }: RegisterNameFooterProps) => {
  const navigate = useNavigate();

  const patchProfile = () => {
    api
      .patch(
        `/user/profile`,
        {
          name: `${userName}`,
          phoneNumber: `0`,
        },
        {},
      )
      .then(() => {
        setStep(2);
      })
      .catch(() => {
        navigate('/error');
      });
  };

  const handleClickFooter = () => {
    if (userName) {
      patchProfile();
    }
  };

  return (
    <St.Footer onClick={handleClickFooter} $userName={userName}>
      <St.FooterContents>다음</St.FooterContents>
    </St.Footer>
  );
};

const St = {
  Footer: styled.footer<{ $userName: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;

    max-width: 43rem;
    width: 100%;
    height: 7rem;

    background-size: auto;
    background-color: ${({ theme, $userName }) =>
      $userName ? theme.colors.gray9 : theme.colors.gray3};
  `,

  FooterContents: styled.p`
    color: ${({ theme }) => theme.colors.white};

    ${({ theme }) => theme.fonts.title_semibold_18};
  `,
};

export default RegisterNameFooter;
