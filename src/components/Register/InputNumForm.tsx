import { styled } from 'styled-components';

interface InputNumFormProps {
  isChanged: boolean;
  visible: boolean;
  handleIsChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCertification: () => void;
  checkMaxLength: (e: React.ChangeEvent<HTMLInputElement>, maxLength: number) => void;
}

const InputNumForm = ({
  isChanged,
  visible,
  handleIsChanged,
  handleCertification,
  checkMaxLength,
}: InputNumFormProps) => {
  return (
    <St.InputContentsWrapper>
      <St.InputContent
        placeholder='전화번호를 입력해주세요'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleIsChanged(e)}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => checkMaxLength(e, 13)}
      ></St.InputContent>
      <St.SendMessageBtn
        type='button'
        ischanged={isChanged ? 'true' : 'false'}
        visible={visible ? 'true' : 'false'}
        onClick={handleCertification}
      >
        {visible ? '재요청' : '인증하기'}
      </St.SendMessageBtn>
    </St.InputContentsWrapper>
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
  `,

  SendMessageBtn: styled.button<{ ischanged: string; visible: string }>`
    width: 9.2rem;
    height: 4.5rem;

    border: none;
    border-radius: 0.6rem;

    color: ${({ theme }) => theme.colors.white};

    background-color: ${({ ischanged, visible, theme }) =>
      ischanged && visible === 'true' ? theme.colors.gray7 : theme.colors.gray3};

    ${({ theme }) => theme.fonts.title_semibold_16};
  `,
};

export default InputNumForm;
