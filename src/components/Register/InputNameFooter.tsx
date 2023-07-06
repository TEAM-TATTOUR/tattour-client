import { styled } from 'styled-components';

const InputNameFooter = () => {
  return (
    <St.Footer>
      <St.FooterContents>다음</St.FooterContents>
    </St.Footer>
  );
};

const St = {
  Footer: styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 7rem;
    position: absolute;
    bottom: 0;

    background-size: auto;
    background-color: ${({ theme }) => theme.colors.gray3};
  `,

  FooterContents: styled.p`
    color: ${({ theme }) => theme.colors.white};

    ${({ theme }) => theme.fonts.title_semibold_18};
  `,
};

export default InputNameFooter;
