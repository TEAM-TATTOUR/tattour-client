import styled from 'styled-components';
import TitleForm from './RegisterTitleForm';
import { TITLE, SUB_TITLE } from '../../constants/TitleInfo';
import { useEffect, useState } from 'react';
import RegisterPhoneNumForm from './RegisterPhoneNumForm';
import InputCertificationForm from './InputCertificationForm';
import ErrorMessage from './ErrorMessage';

const InputNum = () => {
  // 임의의 인증번호
  const CERTIFICATION_NUM = 1234;
  // 전화번호 입력 후, 인증 버튼이 클릭되었는지 여부를 확인하기 위한 상태
  const [isVisible, setIsVisible] = useState(false);
  // 인증번호와 입력번호의 일치 여부 확인하기 위한 상태
  const [isCorrect, setIsCorrect] = useState(false);
  // 입력한 인증번호 자릿수
  const [certificationLen, setCertificationLen] = useState(0);

  const isError = !isCorrect && certificationLen === 4;

  const checkInputNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (parseInt(e.target.value) === CERTIFICATION_NUM) {
      setIsCorrect(true);

      // alert 대신 회원가입 완료 페이지로 넘어가게 하기
      setTimeout(() => alert('success!'), 500);
    } else {
      setIsCorrect(false);
      setCertificationLen(e.target.value.length);
    }
  };

  // 전화번호가 입력되거나, 지워진 경우 상태 업데이트
  useEffect(() => {
    setIsCorrect(isCorrect);
    setCertificationLen(certificationLen);
  }, [isCorrect, certificationLen]);

  return (
    <St.InputNumWrapper>
      <TitleForm title={TITLE[1]} subTitle={SUB_TITLE[1]} />

      <RegisterPhoneNumForm isVisible={isVisible} setIsVisible={setIsVisible} />

      {/* isVisible이 true인 경우에만 인증번호 입력 폼 나옴 */}
      {isVisible && (
        <InputCertificationForm
          checkInputNum={checkInputNum}
          isCorrect={isCorrect}
          isError={isError}
        />
      )}
      {isError && <ErrorMessage />}
    </St.InputNumWrapper>
  );
};

const St = {
  InputNumWrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};

export default InputNum;
