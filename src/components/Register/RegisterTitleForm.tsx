import { styled } from 'styled-components';

interface RegisterTitleFormProps {
  title: string;
  subTitle: string;
}

const RegisterTitleForm = ({ title, subTitle }: RegisterTitleFormProps) => {
  return (
    <St.TitleContentsWrapper>
      <St.Title>{title}</St.Title>
      <St.SubTitle>{subTitle}</St.SubTitle>
    </St.TitleContentsWrapper>
  );
};

const St = {
  TitleContentsWrapper: styled.header`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0rem 2.2rem;

    // progressBar 기준 거리
    margin-top: 5.6rem;
    margin-bottom: 3rem;

    gap: 1.2rem;
  `,

  Title: styled.h2`
    ${({ theme }) => theme.fonts.title_semibold_20};
  `,

  SubTitle: styled.p`
    color: ${({ theme }) => theme.colors.gray3};

    ${({ theme }) => theme.fonts.body_medium_14};
  `,
};

export default RegisterTitleForm;
