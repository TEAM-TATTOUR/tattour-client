import { styled } from 'styled-components';
import sliceMaxLength from '../../utils/sliceMaxLength';
import React, { useState } from 'react';
import Toast from '../../common/ToastMessage/Toast';
import Timer from './Timer';
import ErrorMessage from './ErrorMessage';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import api from '../../libs/api';

interface resProps {
  data: {
    data: {
      isVerified: boolean;
    };
  };
}

interface usePatchProfileProps {
  state: string;
  phoneNum: string;
}

const RegisterPhoneNumForm = () => {
  const MINUTES_IN_MS = 5 * 60 * 1000;

  const navigate = useNavigate();
  // 입력한 전화번호 자릿수
  const [numLength, setNumLength] = useState(0);
  // toast message
  const [toast, setToast] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isRequired, setIsRequired] = useState(false);
  // 인증번호와 입력번호의 일치 여부 확인하기 위한 상태
  const [isError, setIsError] = useState(false);
  // 입력한 인증번호 자릿수
  const [certificationLen, setCertificationLen] = useState(1);
  const [isTimeout, setIsTimeout] = useState(false);
  const [leftTime, setLeftTime] = useState<number>(MINUTES_IN_MS);
  const [text, setText] = useState('');
  const [phoneNum, setPhoneNum] = useState('');

  const { state } = useLocation();

  const patchProfile = ({ state, phoneNum }: usePatchProfileProps) => {
    api
      .patch(
        `/user/profile`,
        // post body
        {
          name: `${state}`,
          phoneNumber: `${phoneNum}`,
        },
        // request headers
        {},
      )
      .then(() => {
        navigate('/welcome-signup');
      })
      .catch((Error: object) => {
        console.log(Error);
      });
  };

  const handleChangeInputContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 전화번호 입력이 되지 않았을 경우
    if (e.target.value.length === 0) {
      setIsVisible(false);
      setNumLength(0);
    } else {
      setNumLength(e.target.value.length);
      setPhoneNum(e.target.value.replace(/-/g, ''));
    }
  };

  const handleClickSendMessageBtn = () => {
    const ACCESS_TOKEN_KEY = 'accesstoken';
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

    axios
      .post(
        `https://api.tattour.shop/sms/send/verification-code`,
        // post body
        {
          phoneNumber: `${phoneNum}`,
        },
        // request headers
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      )
      .then(() => {
        // 인증번호 입력 폼 나옴
        setIsVisible(true);

        // 인증번호 입력 폼이 나온 경우
        if (isVisible) {
          setIsTimeout(false);
          setLeftTime(MINUTES_IN_MS);
          setText('');
          setCertificationLen(1);
        }
      })
      .catch((Error: object) => {
        console.log(Error);
      });

    setToast(true);
    setIsRequired(!isRequired);
  };

  const handleChangeCertificationInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    setCertificationLen(e.target.value.length);

    if (e.target.value.length === 6) {
      api
        .get(`/user/phonenumber/verification`, {
          params: {
            verificationCode: `${e.target.value}`,
          },
        })
        .then((res: resProps) => {
          const isVerified = res.data.data.isVerified;          

          if (isVerified) {
            setIsError(false);
            patchProfile({ state, phoneNum });
          } else {
            setIsError(true);
          }
        })
        .catch((Error: object) => {
          console.log(Error);
        });
    } else {
      setIsError(false);
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
          $isvisible={isVisible}
          $length={numLength}
          onClick={handleClickSendMessageBtn}
        >
          {isVisible ? '재인증' : '인증하기'}
          {toast && <Toast setToast={setToast} text='인증번호가 발송되었습니다.' />}
        </St.SendMessageBtn>
      </St.InputContentsWrapper>

      {isVisible && (
        <St.CertificationInputWrapper>
          <St.CertificationInput
            type='number'
            id={(isError && certificationLen === 6) || isTimeout ? 'errorInput' : 'successInput'}
            disabled={isTimeout ? true : false}
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => sliceMaxLength(e, 6, 'onlyNum')}
            placeholder='인증번호를 입력해주세요'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeCertificationInput(e)}
            value={text}
          ></St.CertificationInput>
          <Timer
            isTimeout={isTimeout}
            setIsTimeout={setIsTimeout}
            leftTime={leftTime}
            setLeftTime={setLeftTime}
          />

          {((isError && certificationLen === 6) || isTimeout) && (
            <ErrorMessage isTimeout={isTimeout} />
          )}
        </St.CertificationInputWrapper>
      )}
    </>
  );
};

const St = {
  InputContentsWrapper: styled.article`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0rem 2rem;

    gap: 1.2rem;
  `,

  InputContent: styled.input`
    width: calc(100% - 9.7rem);
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

  SendMessageBtn: styled.button<{ $isvisible: boolean; $length: number }>`
    width: 9.2rem;
    height: 4.5rem;

    border: none;
    border-radius: 0.6rem;

    color: ${({ theme }) => theme.colors.white};

    background-color: ${({ $isvisible, theme, $length }) =>
      $isvisible || $length === 13 ? theme.colors.gray7 : theme.colors.gray3};

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

    color: ${({ theme }) => theme.colors.gray5};

    ${({ theme }) => theme.fonts.body_medium_16};

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
