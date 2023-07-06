import styled from 'styled-components';
import TitleForm from './TitleForm';
import { TITLE, SUB_TITLE } from '../../constants/TitleInfo';
import { useEffect, useState } from 'react';

const InputNum = () => {
  // 전화번호 입력 체크를 위한 상태
  const [isChanged, setIsChanged] = useState(false);

  // 전화번호 입력 후, 인증 버튼이 클릭되었는지 여부를 확인하기 위한 상태
  const [visible, setVisible] = useState(false);

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

  // 전화번호가 입력되거나, 지워진 경우 상태 업데이트
  useEffect(() => {
    setIsChanged(isChanged);
    setVisible(visible);
  }, [isChanged, visible]);

  return (
    <St.InputNumWrapper>
      <TitleForm title={TITLE[1]} subTitle={SUB_TITLE[1]} />

      <St.InputContentsWrapper>
        <St.InputContent
          placeholder='전화번호를 입력해주세요'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleIsChanged(e)}
        ></St.InputContent>
        <St.SendMessageBtn
          type='button'
          ischanged={isChanged ? 'true' : 'false'}
          onClick={handleCertification}
        >
          {visible ? '재요청' : '인증하기'}
        </St.SendMessageBtn>
      </St.InputContentsWrapper>

      {/* visible이 true인 경우에만 인증번호 입력 폼 나옴 */}
      {visible && (
        <St.CertificationInputWrapper id='certificationInput'>
          <St.CertificationInput placeholder='인증번호를 입력해주세요'></St.CertificationInput>
        </St.CertificationInputWrapper>
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

  SendMessageBtn: styled.button<{ ischanged?: string }>`
    width: 9.2rem;
    height: 4.5rem;

    border: none;
    border-radius: 0.6rem;

    color: ${({ theme }) => theme.colors.white};

    background-color: ${({ ischanged, theme }) =>
      ischanged === 'true' ? theme.colors.gray7 : theme.colors.gray3};

    ${({ theme }) => theme.fonts.title_semibold_16};
  `,
  CertificationInputWrapper: styled.article`
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
};

export default InputNum;
