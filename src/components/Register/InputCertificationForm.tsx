import { styled } from 'styled-components';
import { useState, useEffect } from 'react';
import Timer from './Timer';
import sliceMaxLength from '../../utils/sliceMaxLength';
import ErrorMessage from './ErrorMessage';
import { useNavigate } from 'react-router-dom';

const InputCertificationForm = () => {
  const navigate = useNavigate();
  // 임의의 인증번호
  const CERTIFICATION_NUM = 1234;
  // 인증번호와 입력번호의 일치 여부 확인하기 위한 상태
  const [isCorrect, setIsCorrect] = useState(false);
  // 입력한 인증번호 자릿수
  const [certificationLen, setCertificationLen] = useState(0);

  const isError = !isCorrect && certificationLen === 4;

  const [isTimeout, setIsTimeout] = useState(false);

  const handleChangeCertificationInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (parseInt(e.target.value) === CERTIFICATION_NUM) {
      setIsCorrect(true);

      setTimeout(() => navigate('/welcome-signup'), 1000);
    } else {
      setIsCorrect(false);
      setCertificationLen(e.target.value.length);
    }
  };

  useEffect(() => {
    setIsCorrect(isCorrect);
    setCertificationLen(certificationLen);
  }, [isCorrect, certificationLen]);

  return (
    <St.CertificationInputWrapper>
      <St.CertificationInput
        id={isError || isTimeout ? 'errorInput' : 'successInput'}
        disabled={isTimeout ? true : false}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => sliceMaxLength(e, 4, 'onlyNum')}
        placeholder='인증번호를 입력해주세요'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeCertificationInput(e)}
      ></St.CertificationInput>
      <Timer isCorrect={isCorrect} isTimeout={isTimeout} setIsTimeout={setIsTimeout} />

      {(isError || isTimeout) && <ErrorMessage isTimeout={isTimeout} />}
    </St.CertificationInputWrapper>
  );
};

const St = {
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

export default InputCertificationForm;
