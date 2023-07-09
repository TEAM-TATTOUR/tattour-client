import { styled } from 'styled-components';
import sliceMaxLength from '../../utils/sliceMaxLength';
import { useState, useEffect } from 'react';

interface RegisterPhoneNumFormProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegisterPhoneNumForm = ({ isVisible, setIsVisible }: RegisterPhoneNumFormProps) => {
  // 전화번호 입력 체크를 위한 상태
  const [isChanged, setIsChanged] = useState(false);

  // 입력한 전화번호 자릿수
  const [numLength, setNumLength] = useState(0);

  // 전화번호 입력 여부를 체크하는 함수
  const handleChangeInputContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 전화번호 입력이 되지 않았을 경우
    if (e.target.value.length === 0) {
      // 인증번호 입력 폼은 나오지 않음
      setIsChanged(false);
      setIsVisible(false);
      setNumLength(0);
    } else {
      setIsChanged(true);
      setNumLength(e.target.value.length);
    }
  };

  // 인증번호 폼을 나오게 하는 함수
  const handleCertification = () => {
    // 전화번호 입력이 된 경우
    if (isChanged) {
      // 인증번호 입력 폼 나옴
      setIsVisible(true);

      /* 인증 문자가 전송될 부분 */
    }
  };

  useEffect(() => {
    setIsChanged(isChanged);
    setIsVisible(isVisible);
  }, [isChanged, isVisible, setIsVisible]);

  return (
    <St.InputContentsWrapper>
      <St.InputContent
        placeholder='전화번호를 입력해주세요'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeInputContent(e)}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => sliceMaxLength(e, 13)}
      ></St.InputContent>
      <St.SendMessageBtn
        type='button'
        ischanged={isChanged ? 'true' : 'false'}
        isvisible={isVisible ? 'true' : 'false'}
        length={numLength}
        onClick={handleCertification}
      >
        {isVisible ? '재요청' : '인증하기'}
      </St.SendMessageBtn>
    </St.InputContentsWrapper>
  );
};

const St = {
  InputContentsWrapper: styled.article`
    display: flex;
    width: 100%;
    padding: 0rem 2rem;

    gap: 1.2rem;
  `,

  InputContent: styled.input`
    width: 23.1rem;
    height: 4.5rem;
    padding-left: 2rem;

    border: none;
    border-radius: 0.5rem;

    color: ${({ theme }) => theme.colors.gray5};
    background-color: ${({ theme }) => theme.colors.bg};

    ${({ theme }) => theme.fonts.body_medium_16};

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray2};
      ${({ theme }) => theme.fonts.body_medium_16};
    }
  `,

  SendMessageBtn: styled.button<{ ischanged: string; isvisible: string; length: number }>`
    width: 9.2rem;
    height: 4.5rem;

    border: none;
    border-radius: 0.6rem;

    color: ${({ theme }) => theme.colors.white};

    background-color: ${({ ischanged, isvisible, theme, length }) =>
      (ischanged && isvisible === 'true') || length === 13
        ? theme.colors.gray7
        : theme.colors.gray3};

    ${({ theme }) => theme.fonts.title_semibold_16};
  `,
};

export default RegisterPhoneNumForm;
