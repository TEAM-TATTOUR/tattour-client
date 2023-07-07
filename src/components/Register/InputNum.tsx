import styled from 'styled-components';
import TitleForm from './TitleForm';
import { TITLE, SUB_TITLE } from '../../constants/TitleInfo';
import { useEffect, useState } from 'react';
import Timer from './Timer';
import InputNumForm from './InputNumForm';

const InputNum = () => {
  // 임의의 인증번호
  const CERTIFICATION_NUM = 1234;
  // 전화번호 입력 체크를 위한 상태
  const [isChanged, setIsChanged] = useState(false);
  // 전화번호 입력 후, 인증 버튼이 클릭되었는지 여부를 확인하기 위한 상태
  const [visible, setVisible] = useState(false);
  // 인증번호와 입력번호의 일치 여부 확인하기 위한 상태
  const [isCorrect, setIsCorrect] = useState(false);

  const [numLength, setNumLength] = useState(0);

  const handleIsChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 전화번호 입력이 되지 않았을 경우
    if (e.target.value.length === 0) {
      // 인증번호 입력 폼은 나오지 않음
      setIsChanged(false);
      setVisible(false);
    } else {
      setIsChanged(true);
    }
  };

  const handleCertification = () => {
    // 전화번호 입력이 된 경우
    if (isChanged) {
      // 인증번호 입력 폼 나옴
      setVisible(true);

      /* 인증 문자가 전송될 부분 */
    }
  };

  const checkInputNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (parseInt(e.target.value) === CERTIFICATION_NUM) {
      setIsCorrect(true);

      // alert 대신 회원가입 완료 페이지로 넘어가게 하기
      setTimeout(() => alert('success!'), 500);
    } else {
      setIsCorrect(false);
      setNumLength(e.target.value.length);
    }
  };

  // 전화번호가 입력되거나, 지워진 경우 상태 업데이트
  useEffect(() => {
    setIsChanged(isChanged);
    setVisible(visible);
    setIsCorrect(isCorrect);
    setNumLength(numLength);
  }, [isChanged, visible, isCorrect, numLength]);

  return (
    <St.InputNumWrapper>
      <TitleForm title={TITLE[1]} subTitle={SUB_TITLE[1]} />

      <InputNumForm
        isChanged={isChanged}
        visible={visible}
        handleCertification={handleCertification}
        handleIsChanged={handleIsChanged}
      />

      {/* visible이 true인 경우에만 인증번호 입력 폼 나옴 */}
      {visible && (
        <St.CertificationInputWrapper id='certificationInput'>
          <St.CertificationInput
            placeholder='인증번호를 입력해주세요'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => checkInputNum(e)}
          ></St.CertificationInput>
          <Timer isCorrect={isCorrect} />
        </St.CertificationInputWrapper>
      )}
      {!isCorrect && numLength === 4 && (
        <St.NotificationWrapper>
          <St.Notification>인증번호가 잘못되었어요.</St.Notification>
        </St.NotificationWrapper>
      )}
    </St.InputNumWrapper>
  );
};

const St = {
  InputNumWrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  CertificationInputWrapper: styled.article`
    display: flex;
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
  `,

  NotificationWrapper: styled.div`
    display: flex;
    justify-content: start;
    width: 100%;
    padding-top: 0.8rem;
    padding-left: 2.2rem;
  `,

  Notification: styled.p`
    color: ${({ theme }) => theme.colors.red};

    ${({ theme }) => theme.fonts.body_medium_14};
  `,
};

export default InputNum;
