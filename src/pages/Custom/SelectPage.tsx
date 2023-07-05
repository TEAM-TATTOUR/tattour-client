import { styled } from 'styled-components';

const SelectPage = () => {
  return (
    <St.SelectWrapper>
      <St.SelectInfoContainer>
        <St.InfoMainText>안녕하세요! 어떤 상황에 놓여있나요?</St.InfoMainText>
        <St.InfoSubText>상황에 맞게 제작해드려요</St.InfoSubText>
      </St.SelectInfoContainer>

      <St.SelectBtnContainer>
        <St.SelectBtnContent>
          <a href='/'>
            <St.SelectBtnTitle>이미 그려 둔 도안이 있어요</St.SelectBtnTitle>
            <St.SelectBtnDetail>이미지 파일을 그대로 제작 해드릴게요</St.SelectBtnDetail>
          </a>
        </St.SelectBtnContent>
        <St.SelectBtnContent>
          <a href='/'>
            <St.SelectBtnTitle>커스텀 도안을 제작하고 싶어요</St.SelectBtnTitle>
            <St.SelectBtnDetail>신청서에 맞게 세심하게 제작해드릴게요</St.SelectBtnDetail>
          </a>
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

  SelectInfoContainer: styled.section``,

  InfoMainText: styled.h2``,

  InfoSubText: styled.p``,

  SelectBtnContainer: styled.section``,

  SelectBtnContent: styled.article``,

  SelectBtnTitle: styled.h3``,

  SelectBtnDetail: styled.p``,
};
