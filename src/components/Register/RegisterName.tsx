import styled from 'styled-components';
import { TITLE, SUB_TITLE } from '../../constants/TitleInfo';
import RegisterTitleForm from './RegisterTitleForm';
import sliceMaxLength from '../../utils/sliceMaxLength';
import axios from 'axios';
import { useEffect } from 'react';
import { CLIENT_ID, REDIRECT_URI } from '../../constants/OAuth';

interface RegisterNameProps {
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}

interface KakaoResInfo {
  data: {
    kakao_account: {
      profile: object;
    };
    access_token: string;
  };
}

const RegisterName = ({ setUserName }: RegisterNameProps) => {
  // code: 카카오로부터 받은 인가코드
  const code = new URL(window.location.href).searchParams.get('code');
  const grantType = 'authorization_code';

  useEffect(() => {
    if (code) {
      // 토큰을 받기 위한 코드 (access_token(6시간), refresh_token(2달) 받아올 수 있음)
      axios
        .post(
          `https://kauth.kakao.com/oauth/token?grant_type=${grantType}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${code}`,
          {},
          {
            headers: {
              'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
          },
        )
        .then((res: KakaoResInfo) => {
          console.log(res);
        })
        .catch((Error: object) => {
          console.log(Error);
        });
    }
  }, [code]);

  const handleChangeInputContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  return (
    <St.RegisterNameWrapper>
      <RegisterTitleForm title={TITLE[0]} subTitle={SUB_TITLE[0]} />

      <St.InputContentsWrapper>
        <St.InputContent
          placeholder='ex) 김타투'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeInputContent(e)}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => sliceMaxLength(e, 5, 'onlyString')}
        ></St.InputContent>
      </St.InputContentsWrapper>
    </St.RegisterNameWrapper>
  );
};

const St = {
  RegisterNameWrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  InputContentsWrapper: styled.article`
    width: 100%;
    padding: 0rem 2rem;
  `,

  InputContent: styled.input`
    width: 100%;
    height: 4.5rem;
    padding-left: 2rem;

    border: none;
    border-radius: 0.5rem;

    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.gray5};

    ${({ theme }) => theme.fonts.body_medium_16}

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray2};
    }

    &:focus {
      outline: 0;
    }
  `,
};

export default RegisterName;
