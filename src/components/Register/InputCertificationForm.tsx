import { styled } from 'styled-components';
import Timer from './Timer';
import sliceMaxLength from '../../utils/sliceMaxLength';

interface InputCertificationFormProps {
  isCorrect: boolean;
  isError: boolean;
  checkInputNum: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputCertificationForm = ({
  isCorrect,
  isError,
  checkInputNum,
}: InputCertificationFormProps) => {
  return (
    <St.CertificationInputWrapper>
      <St.CertificationInput
        id={isError ? 'errorInput' : 'successInput'}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => sliceMaxLength(e, 4)}
        placeholder='인증번호를 입력해주세요'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => checkInputNum(e)}
      ></St.CertificationInput>
      <Timer isCorrect={isCorrect} />
    </St.CertificationInputWrapper>
  );
};

const St = {
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

    &#errorInput {
      border: 0.1rem solid ${({ theme }) => theme.colors.red};
    }
  `,
};

export default InputCertificationForm;
