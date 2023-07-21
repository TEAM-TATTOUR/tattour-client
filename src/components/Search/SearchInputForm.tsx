import { styled } from 'styled-components';
import { useRef } from 'react';
import { IcBackDark, IcSearchGray } from '../../assets/icon';
import { useNavigate } from 'react-router-dom';

const SearchInputForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleClickBackButton = () => {
    navigate('/');
  };

  const handleSubmitSearchForm = (
    event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLElement>,
  ) => {
    event.preventDefault();
    navigate(`/search/${inputRef.current?.value}`);
  };

  return (
    <St.SearchFormWrapper>
      <IcBackDark onClick={handleClickBackButton} />
      <St.SearchForm onSubmit={handleSubmitSearchForm}>
        <St.SearchInput
          ref={inputRef}
          placeholder={inputRef.current?.value ? inputRef.current?.value : '검색어를 입력해주세요.'}
        />
        <IcSearchGray onClick={handleSubmitSearchForm} />
      </St.SearchForm>
    </St.SearchFormWrapper>
  );
};

const St = {
  SearchFormWrapper: styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5.6rem;
  `,

  SearchForm: styled.form`
    position: relative;

    & > svg {
      position: absolute;
      top: 1.1rem;
      right: 1.6rem;
    }
  `,

  SearchInput: styled.input`
    width: 29.7rem;
    height: 4.5rem;
    margin-left: 1.7rem;
    padding-left: 1.8rem;

    border: none;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.bg};

    ${({ theme }) => theme.fonts.body_medium_16};
    color: ${({ theme }) => theme.colors.gray7};

    &:focus {
      outline: 0;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray2};
    }
  `,
};

export default SearchInputForm;
