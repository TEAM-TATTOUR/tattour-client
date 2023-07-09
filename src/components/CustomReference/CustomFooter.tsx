import { styled } from 'styled-components';

const CustomFooter = () => {
  return (
    <St.CustomFooter>
      <St.FooterText>다음</St.FooterText>
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
    color: #ffffff;
  `,

  FooterText: styled.p`
    ${({ theme }) => theme.fonts.title_semibold_18}
  `,
};

export default CustomFooter;
