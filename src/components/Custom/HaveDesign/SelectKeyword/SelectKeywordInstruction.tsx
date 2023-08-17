import { styled } from 'styled-components';

const SelectKeywordInstruction = () => {
  return (
    <St.InstructionWrapper>
      <St.Title>원하는 키워드를 선택해주세요</St.Title>
      <St.SubTitle>최대 3개까지 선택할 수 있어요</St.SubTitle>
    </St.InstructionWrapper>
  );
};

export default SelectKeywordInstruction;

const St = {
  InstructionWrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1.2rem;

    margin: 5.6rem 0 4rem 2.2rem;
  `,
  Title: styled.h2`
    ${({ theme }) => theme.fonts.title_semibold_20};
    color: ${({ theme }) => theme.colors.gray8};
  `,
  SubTitle: styled.p`
    ${({ theme }) => theme.fonts.body_medium_14};
    color: ${({ theme }) => theme.colors.gray3};
  `,
};
