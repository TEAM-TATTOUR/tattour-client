import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const PriceFooter = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate('/receipt');
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
    position: sticky;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 7rem;

    background-color: ${({ theme }) => theme.colors.gray9};
  `,

  FooterButton: styled.button`
    color: ${({ theme }) => theme.colors.pink5};
    ${({ theme }) => theme.fonts.title_semibold_18};
  `,
};

export default PriceFooter;
