import { styled } from 'styled-components';
import sliceMaxLength from '../../utils/sliceMaxLength';
import React, { useState } from 'react';
import Toast from '../../common/ToastMessage/Toast';
import Timer from './Timer';
import ErrorMessage from './ErrorMessage';
import { useNavigate } from 'react-router-dom';

const RegisterPhoneNumForm = () => {
  const navigate = useNavigate();
  // 전화번호 입력 체크를 위한 상태
  const [isChanged, setIsChanged] = useState(false);

  // 입력한 전화번호 자릿수
  const [numLength, setNumLength] = useState(0);

  // toast message
  const [toast, setToast] = useState(false);

  const [isVisible, setIsVisible] = useState(false);
  const [isRequired, setIsRequired] = useState(false);
  // 임의의 인증번호
  const CERTIFICATION_NUM = 1234;
  // 인증번호와 입력번호의 일치 여부 확인하기 위한 상태
  const [isCorrect, setIsCorrect] = useState(false);
  // 입력한 인증번호 자릿수
  const [certificationLen, setCertificationLen] = useState(0);

  const isError = !isCorrect && certificationLen === 4;

  const MINUTES_IN_MS = 5 * 1000;

  const [isTimeout, setIsTimeout] = useState(false);

  const [leftTime, setLeftTime] = useState<number>(MINUTES_IN_MS);

  const handleChangeCertificationInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (parseInt(e.target.value) === CERTIFICATION_NUM) {
      setIsCorrect(true);

      setTimeout(() => navigate('/welcome-signup'), 1000);
    } else {
      setIsCorrect(false);
      setCertificationLen(e.target.value.length);
    }
  };

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

  const handleClickSendMessageBtn = () => {
    setToast(true);
    setIsRequired(!isRequired);

    // 전화번호 입력이 된 경우
    if (numLength === 13 && !isVisible) {
      // 인증번호 입력 폼 나옴
      setIsVisible(true);
    }

    // 인증번호 입력 폼이 나온 경우
    else if (isVisible) {
      setIsTimeout(false);
      setLeftTime(MINUTES_IN_MS);
    }
  };

  return (
    <>
      <St.InputContentsWrapper>
        <St.InputContent
          type='tel'
          placeholder='ex) 010-0000-0000'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeInputContent(e)}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => sliceMaxLength(e, 13, 'phoneNum')}
        ></St.InputContent>
        <St.SendMessageBtn
          type='button'
          $ischanged={isChanged}
          $isvisible={isVisible}
          $length={numLength}
          onClick={handleClickSendMessageBtn}
        >
          {isVisible ? '재요청' : '인증하기'}
          {toast && <Toast setToast={setToast} text='인증번호가 발송되었습니다.' />}
        </St.SendMessageBtn>
      </St.InputContentsWrapper>

      {isVisible && (
        <St.CertificationInputWrapper>
          <St.CertificationInput
            id={isError || isTimeout ? 'errorInput' : 'successInput'}
            disabled={isTimeout ? true : false}
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => sliceMaxLength(e, 4, 'onlyNum')}
            placeholder='인증번호를 입력해주세요'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeCertificationInput(e)}
          ></St.CertificationInput>
          <Timer
            isCorrect={isCorrect}
            isTimeout={isTimeout}
            setIsTimeout={setIsTimeout}
            leftTime={leftTime}
            setLeftTime={setLeftTime}
          />

          {(isError || isTimeout) && <ErrorMessage isTimeout={isTimeout} />}
        </St.CertificationInputWrapper>
      )}
    </>
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

    &:focus {
      outline: 0;
    }
  `,

  SendMessageBtn: styled.button<{ $ischanged: boolean; $isvisible: boolean; $length: number }>`
    width: 9.2rem;
    height: 4.5rem;

    border: none;
    border-radius: 0.6rem;

    color: ${({ theme }) => theme.colors.white};

    background-color: ${({ $ischanged, $isvisible, theme, $length }) =>
      ($ischanged && $isvisible) || $length === 13 ? theme.colors.gray7 : theme.colors.gray3};

    ${({ theme }) => theme.fonts.title_semibold_16};
  `,

  CertificationInputWrapper: styled.article`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0rem 2rem;
    margin-top: 1.4rem;
  `,

  CertificationInput: styled.input`
    width: 100%;
    height: 4.5rem;
    padding-left: 2rem;

    border: none;
    border-radius: 0.5rem;

    background-color: ${({ theme }) => theme.colors.bg};

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray2};

      ${({ theme }) => theme.fonts.body_medium_16};
    }

    &:focus {
      outline: 0;
    }

    &#errorInput {
      border: 0.1rem solid ${({ theme }) => theme.colors.red};
    }
  `,
};

export default RegisterPhoneNumForm;
