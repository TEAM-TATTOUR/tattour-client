import { styled } from 'styled-components';

const CustomRequset = () => {
  return (
    <St.CustomRequestWrapper>
      <St.RequestNameContainer>
        <St.RequestNameTitle>이 타투의 이름을 지어주세요!</St.RequestNameTitle>
        <St.RequestNameDetail>
          추후 아카이브 또는 공개 시에 해당 이름이 노출됩니다
        </St.RequestNameDetail>
        <St.RequestNameInput placeholder='ex. 우리 가족 타투, 백조 타투, 힙한 하트' autoFocus />
        <St.RequestInputCount>(0/10)</St.RequestInputCount>
      </St.RequestNameContainer>
      <St.RequestEtcContainer>
        <St.RequestEtcTitle>추가 요청 사항</St.RequestEtcTitle>
        <St.RequestEtcTextArea
          placeholder='ex. 라인 1mm로 사진보다 얇게 그려주세요 &#13;&#10; &nbsp; &nbsp;  도안을 붉은색 (FF6B6B)으로 바꿔주세요'
        />
        <St.RequestInputCount>(0/50)</St.RequestInputCount>
      </St.RequestEtcContainer>
    </St.CustomRequestWrapper>
  );
};

export default CustomRequset;

const St = {
  CustomRequestWrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,

  RequestNameContainer: styled.article`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    position: relative;

    margin: 5.6rem 2rem 0 2.2rem;
  `,

  RequestNameTitle: styled.h2`
    color: ${({ theme }) => theme.colors.gray8};
    ${({ theme }) => theme.fonts.title_semibold_20};
  `,

  RequestNameDetail: styled.p`
    margin-bottom: 0.8rem;

    color: ${({ theme }) => theme.colors.gray3};
    ${({ theme }) => theme.fonts.body_medium_14};
  `,

  RequestNameInput: styled.input`
    width: 29.5rem;
    height: 2.1rem;

    padding: 1.2rem 2rem;

    background-color: ${({ theme }) => theme.colors.bg};

    box-sizing: content-box;
    border: none;
    border-radius: 0.5rem;

    &::placeholder {
      height: fit-content;

      color: ${({ theme }) => theme.colors.gray2};
      ${({ theme }) => theme.fonts.body_medium_16};
    }

    &:focus {
      box-shadow: 0 0 0 0.1rem ${({ theme }) => theme.colors.gray2};
      outline: 0;
    }
  `,

  RequestEtcContainer: styled.article`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    position: relative;

    margin: 1.9rem 2rem 0 2.2rem;
  `,

  RequestEtcTitle: styled.h2`
    color: ${({ theme }) => theme.colors.gray8};
    ${({ theme }) => theme.fonts.title_semibold_20};
  `,

  RequestEtcTextArea: styled.textarea`
    width: 29.5rem;
    height: 14.6rem;

    padding: 1.2rem 2rem;

    background-color: ${({ theme }) => theme.colors.bg};

    box-sizing: content-box;
    border: none;
    border-radius: 0.5rem;

    resize: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray2};
      ${({ theme }) => theme.fonts.body_medium_16};
    }

    &:focus {
      outline: 0.1rem solid ${({ theme }) => theme.colors.gray2};
      border-radius: 0.5rem;
    }
  `,

  RequestInputCount: styled.p`
    position: absolute;
    right: 0;
    bottom: -2.1rem;

    color: ${({ theme }) => theme.colors.gray2};
    ${({ theme }) => theme.fonts.detail_medium_12};
  `,
};
