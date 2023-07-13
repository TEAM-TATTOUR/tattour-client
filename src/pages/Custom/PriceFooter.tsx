import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const PriceFooter = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate('/');
  };

  return (
    <St.CustomFooter>
      <St.FooterButton type='button' onClick={handleClickButton}>
        접수 완료하기
      </St.FooterButton>
    </St.CustomFooter>
  );
};

const St = {
  CustomFooter: styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;

    width: 100%;
    height: 7rem;

    background-color: #0c0d11;
  `,

  FooterButton: styled.button`
    width: 100%;
    height: 100%;

    color: ${({ theme }) => theme.colors.pink5};
    ${({ theme }) => theme.fonts.title_semibold_18};
  `,
};

export default PriceFooter;
