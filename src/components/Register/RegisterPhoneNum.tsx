import styled from 'styled-components';
import TitleForm from './RegisterTitleForm';
import { TITLE, SUB_TITLE } from '../../constants/TitleInfo';
import { useState } from 'react';
import RegisterPhoneNumForm from './RegisterPhoneNumForm';
import InputCertificationForm from './InputCertificationForm';

const InputNum = () => {
  // 전화번호 입력 후, 인증 버튼이 클릭되었는지 여부를 확인하기 위한 상태
  const [isVisible, setIsVisible] = useState(false);
  return (
    <St.InputNumWrapper>
      <TitleForm title={TITLE[1]} subTitle={SUB_TITLE[1]} />

      <RegisterPhoneNumForm isVisible={isVisible} setIsVisible={setIsVisible} />

      {/* isVisible이 true인 경우에만 인증번호 입력 폼 나옴 */}
      {isVisible && <InputCertificationForm />}
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
