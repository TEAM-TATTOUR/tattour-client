import { styled } from 'styled-components';

const SelectSizeCustom = () => {
  return (
    <St.SizeWrapper>
      <St.SizeInfoContainer>
        <St.InfoMainText>원하는 타투 크기를 골라주세요</St.InfoMainText>
        <St.InfoSubText>고민되는 크기를 선택해주세요!</St.InfoSubText>
      </St.SizeInfoContainer>
      <St.SizeBntContainer>
        <St.SizeBtn type='button'>
          <St.SizeBtnImgBox></St.SizeBtnImgBox>
          <St.SizeBtnTextBox>
            <St.SizeBtnTitle>5cm 이하</St.SizeBtnTitle>
            <St.SizeBtnDetail>동전크기</St.SizeBtnDetail>
          </St.SizeBtnTextBox>
        </St.SizeBtn>
        <St.SizeBtn type='button'>
          <St.SizeBtnImgBox></St.SizeBtnImgBox>
          <St.SizeBtnTextBox>
            <St.SizeBtnTitle>5cm 이하</St.SizeBtnTitle>
            <St.SizeBtnDetail>동전크기</St.SizeBtnDetail>
          </St.SizeBtnTextBox>
        </St.SizeBtn>
        <St.SizeBtn type='button'>
          <St.SizeBtnImgBox></St.SizeBtnImgBox>
          <St.SizeBtnTextBox>
            <St.SizeBtnTitle>5cm 이하</St.SizeBtnTitle>
            <St.SizeBtnDetail>동전크기</St.SizeBtnDetail>
          </St.SizeBtnTextBox>
        </St.SizeBtn>
        <St.SizeBtn type='button'>
          <St.SizeBtnImgBox></St.SizeBtnImgBox>
          <St.SizeBtnTextBox>
            <St.SizeBtnTitle>5cm 이하</St.SizeBtnTitle>
            <St.SizeBtnDetail>동전크기</St.SizeBtnDetail>
          </St.SizeBtnTextBox>
        </St.SizeBtn>
      </St.SizeBntContainer>
    </St.SizeWrapper>
  );
};

export default SelectSizeCustom;

const St = {
  SizeWrapper: styled.section`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100vh;
  `,

  SizeInfoContainer: styled.article`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    margin: 5.6rem 0 4rem 0;
  `,

  InfoMainText: styled.h2`
    color: ${({ theme }) => theme.colors.gray8};
    ${({ theme }) => theme.fonts.title_semibold_18};
  `,

  InfoSubText: styled.p`
    color: ${({ theme }) => theme.colors.gray3};
    ${({ theme }) => theme.fonts.body_medium_14};
  `,

  SizeBntContainer: styled.article`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1.5rem;

    width: 33.5rem;
    height: 43.3rem;
  `,

  SizeBtn: styled.button`
    display: flex;
    flex-direction: column;

    width: 16rem;
    height: 20.9rem;
    padding: 0;
  `,
  SizeBtnImgBox: styled.div`
    height: 16rem;
    width: 100%;

    border-radius: 0.5rem 0.5rem 0 0;

    background-color: ${({ theme }) => theme.colors.gray1};
  `,

  SizeBtnTextBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;

    width: 100%;
    height: 6.5rem;

    border-radius: 0 0 0.5rem 0.5rem;

    background-color: ${({ theme }) => theme.colors.bg};
  `,

  SizeBtnTitle: styled.span`
    margin-top: 1rem;

    color: ${({ theme }) => theme.colors.gray5};
    ${({ theme }) => theme.fonts.body_medium_16};
  `,

  SizeBtnDetail: styled.span`
    margin-bottom: 1.5rem;

    color: ${({ theme }) => theme.colors.gray3};
    ${({ theme }) => theme.fonts.detail_medium_12};
  `,
};
