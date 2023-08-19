import { styled } from 'styled-components';
import React, { SetStateAction, useReducer, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import api from '../../libs/api';
import { reducer } from '../../libs/reducers/registerReducer';
import sliceMaxLength from '../../utils/sliceMaxLength';
import Toast from '../../common/ToastMessage/Toast';
import Timer from './Timer';
import ErrorMessage from './ErrorMessage';

interface RegisterPhoneNumFormProps {
  setStep: React.Dispatch<SetStateAction<number>>;
}

interface resProps {
  data: {
    data: {
      isVerified: boolean;
    };
  };
}

interface usePatchProfileProps {
  phoneNum: string;
}

const RegisterPhoneNumForm = ({ setStep }: RegisterPhoneNumFormProps) => {
  const navigate = useNavigate();
  const MINUTES_IN_MS = 5 * 60 * 1000;
  const [toast, setToast] = useState(false);
  const [isTimeout, setIsTimeout] = useState(false);
  const [inputData, setInputData] = useState({
    phoneNum: '',
    certificationNum: '',
  });
  const { phoneNum, certificationNum } = inputData;
  const { state } = useLocation();
  const userName = state.userName;

  const [registerState, dispatch] = useReducer(reducer, {
    isVisible: false,
    isError: false,
    leftTime: MINUTES_IN_MS,
    resetTime: false,
  });

  // 사용자 정보를 패치하는 함수
  const patchProfile = ({ phoneNum }: usePatchProfileProps) => {
    api
      .patch(
        `/user/profile`,
        {
          name: `${userName}`,
          phoneNumber: `${phoneNum}`,
        },
        {},
      )
      .then(() => {
        setStep(3);
      })
      .catch(() => {
        navigate('/error');
      });
  };

  // 전화번호 입력을 감지하는 함수
  const handleChangeInputContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 전화번호 입력이 되지 않았을 경우
    if (e.target.value.length === 0) {
      dispatch({ type: 'HIDE_CERTIFICATION_FORM' });
    } else {
      setInputData({
        ...inputData,
        // 하이픈 제거
        [e.target.name]: e.target.value.replace(/-/g, ''),
      });
    }
  };

  // 클릭 시, 인증번호를 받을 수 있는 버튼
  const handleClickSendMessageBtn = () => {
    const ACCESS_TOKEN_KEY = 'accesstoken';
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

    // 전화번호가 제대로 입력된 경우에만 인증번호를 받을 수 있음
    if (phoneNum.length === 11) {
      axios
        .post(
          `https://api.tattour.shop/sms/send/verification-code`,
          {
            phoneNumber: `${phoneNum}`,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        )
        .then(() => {
          dispatch({ type: 'SHOW_CERTIFICATION_FORM' });
          setToast(true);
          setIsTimeout(false);
        })
        .catch(() => {
          navigate('/error');
        });
    }
    dispatch({ type: 'HIDE_CERTIFICATION_FORM' });
  };

  // 인증번호 입력을 감지하는 함수
  const handleChangeCertificationInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });

    checkCertificationNum(e);
  };

  // 전화번호 인증을 처리하는 함수
  const checkCertificationNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 인증번호 6자리를 모두 입력했을 경우에만 서버와 소통
    if (e.target.value.length === 6) {
      api
        .get(`/user/phonenumber/verification`, {
          params: {
            verificationCode: `${e.target.value}`,
          },
        })
        .then((res: resProps) => {
          // 인증 성공 여부를 나타내는 변수
          const isVerified = res.data.data.isVerified;

          if (isVerified) {
            dispatch({ type: 'VERIFIED_NOT_FAILED' });
            patchProfile({ phoneNum });
          } else {
            dispatch({ type: 'VERIFIED_FAILED' });
          }
        })
        .catch(() => {
          navigate('/error');
        });
    } else {
      dispatch({ type: 'VERIFIED_NOT_FAILED' });
    }
  };

  return (
    <>
      <St.InputContentsWrapper>
        <St.InputContent
          name='phoneNum'
          type='tel'
          placeholder='ex) 010-0000-0000'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeInputContent(e)}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => sliceMaxLength(e, 13, 'phoneNum')}
        ></St.InputContent>
        <St.SendMessageBtn
          type='button'
          $length={phoneNum.length}
          onClick={handleClickSendMessageBtn}
        >
          {registerState.isVisible && phoneNum.length === 11 ? '재인증' : '인증하기'}
          {toast && <Toast setToast={setToast} text='인증번호가 발송되었습니다.' />}
        </St.SendMessageBtn>
      </St.InputContentsWrapper>

      {registerState.isVisible && phoneNum.length === 11 && (
        <St.CertificationInputWrapper>
          <St.CertificationInput
            name='certificationNum'
            type='number'
            id={
              (registerState.isError && certificationNum.length === 6) || isTimeout
                ? 'errorInput'
                : 'successInput'
            }
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeCertificationInput(e)}
            disabled={isTimeout ? true : false}
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => sliceMaxLength(e, 6, 'onlyNum')}
            placeholder='인증번호를 입력해주세요'
          ></St.CertificationInput>
          <Timer
            isTimeout={isTimeout}
            setIsTimeout={setIsTimeout}
            resetTime={registerState.resetTime}
          />

          {((registerState.isError && certificationNum.length === 6) || isTimeout) && (
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

  SendMessageBtn: styled.button<{ $length: number }>`
    width: 9.2rem;
    height: 4.5rem;

    border: none;
    border-radius: 0.6rem;

    color: ${({ theme }) => theme.colors.white};

    background-color: ${({ theme, $length }) =>
      $length === 11 ? theme.colors.gray7 : theme.colors.gray3};

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

    // input type 'number' 화살표 없애기
    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox  */
    &[type='number'] {
      -moz-appearance: textfield;
    }
  `,
};

export default RegisterPhoneNumForm;
