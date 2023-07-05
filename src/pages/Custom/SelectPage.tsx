import { styled } from 'styled-components';

const SelectPage = () => {
  return (
    <St.SelectWrapper>
      <St.SelectInfoContainer>
        <St.InfoMainText>어떤 상황에 놓여있나요?</St.InfoMainText>
        <St.InfoSubText>상황에 맞게 제작해 드려요</St.InfoSubText>
      </St.SelectInfoContainer>

      <St.SelectBtnContainer>
        <St.SelectBtnContent>
          <St.SelectBtnTitle type='exist'>이미 그려 둔 도안이 있어요</St.SelectBtnTitle>
          <St.SelectBtnDetail type='exist'>이미지 파일을 그대로 제작 해드릴게요</St.SelectBtnDetail>
        </St.SelectBtnContent>

        <St.SelectBtnContent>
          <St.SelectBtnTitle type='make'>커스텀 도안을 제작하고 싶어요</St.SelectBtnTitle>
          <St.SelectBtnDetail type='make'>신청서에 맞게 세심하게 제작해드릴게요</St.SelectBtnDetail>
        </St.SelectBtnContent>
      </St.SelectBtnContainer>
    </St.SelectWrapper>
  );
};

export default SelectPage;

const St = {
  SelectWrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;
  `,

  SelectInfoContainer: styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 4rem;

    gap: 1.2rem;
  `,

  InfoMainText: styled.h2`
    color: ${({ theme }) => theme.colors.gray8};

    ${({ theme }) => theme.fonts.title_semibold_20};
  `,

  InfoSubText: styled.p`
    color: ${({ theme }) => theme.colors.gray3};

    ${({ theme }) => theme.fonts.body_medium_14};
  `,

  SelectBtnContainer: styled.article`
    display: flex;
    gap: 1.5rem;

    & > a {
      text-decoration: none;
    }
  `,

  SelectBtnContent: styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;

    width: 16rem;
    height: 16.8rem;
    padding: 0 2.7rem;

    background-color: ${({ theme }) => theme.colors.bg};

    border-radius: 0.5rem;

    cursor: pointer;
  `,

  SelectBtnTitle: styled.h3<{ type: string }>`
    width: ${({ type }) => (type === 'exist' ? 8.6 : 10)}rem;

    color: ${({ theme }) => theme.colors.gray7};

    ${({ theme }) => theme.fonts.title_semibold_16};

    text-align: center;
    white-space: pre-line;
  `,

  SelectBtnDetail: styled.p<{ type: string }>`
    width: ${({ type }) => (type === 'exist' ? 10.6 : 11.6)}rem;

    color: ${({ theme }) => theme.colors.gray3};

    ${({ theme }) => theme.fonts.detail_medium_12};

    text-align: center;
    white-space: pre-line;
  `,
};
