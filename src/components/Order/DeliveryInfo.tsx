import styled from 'styled-components';

interface DeliveryInfoProps {
  handleModal: () => void;
  addressRef: React.MutableRefObject<HTMLInputElement | null>;
  postcodeRef: React.MutableRefObject<HTMLInputElement | null>;
  setComplete: React.Dispatch<React.SetStateAction<boolean>>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  detailAddress: string;
  setDetailAddress: React.Dispatch<React.SetStateAction<string>>;
}
const DeliveryInfo = ({
  handleModal,
  addressRef,
  postcodeRef,
  input,
  setInput,
  phone,
  setPhone,
  detailAddress,
  setDetailAddress,
}: DeliveryInfoProps) => {
  // 자동 하이픈
  const sliceMaxLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value
      .replace(/[^0-9]/g, '')
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
      .replace(/(-{1,2})$/g, '');
  };

  return (
    <St.Wrapper>
      <St.Title>배송 정보</St.Title>
      <St.InfoList>
        <St.Info>
          <label htmlFor='receiver'>수령인</label>
          <input
            type='text'
            id='receiver'
            name='receiver'
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </St.Info>
        <St.Info>
          <label htmlFor='phone'>연락처</label>
          <input
            type='tel'
            id='phone'
            name='phone'
            maxLength={13}
            value={phone}
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => sliceMaxLength(e)} // 자동 하이픈
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </St.Info>
        <St.Info>
          <label>배송지</label>
          <St.AddressBox>
            <input type='text' name='postcode' placeholder='우편번호' ref={postcodeRef} disabled />
            <St.SearchBtn type='button' onClick={handleModal}>
              우편번호 검색
            </St.SearchBtn>
            <St.InputAddress
              type='text'
              name='address'
              placeholder='주소'
              ref={addressRef}
              disabled
            />
            <St.InputDetail
              type='text'
              name='detail'
              placeholder='상세주소'
              value={detailAddress}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setDetailAddress(e.target.value);
              }}
            />
          </St.AddressBox>
        </St.Info>
      </St.InfoList>
    </St.Wrapper>
  );
};

export default DeliveryInfo;

const St = {
  Wrapper: styled.section`
    padding: 2.8rem 2rem 3.6rem 2rem;
  `,
  Title: styled.h2`
    margin-left: 0.2rem;

    ${({ theme }) => theme.fonts.title_semibold_18};
    color: ${({ theme }) => theme.colors.gray8};
  `,
  InfoList: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    margin-top: 2.2rem;
  `,
  Info: styled.li`
    & > label {
      display: block;
      margin-bottom: 1rem;

      ${({ theme }) => theme.fonts.body_medium_14};
      color: ${({ theme }) => theme.colors.gray3};
    }
    & input {
      width: 100%;
      padding: 1.2rem 2rem;
      background-color: ${({ theme }) => theme.colors.bg};
      border-width: 0rem;
      border-radius: 0.5rem;
      ${({ theme }) => theme.fonts.body_medium_16};
      color: ${({ theme }) => theme.colors.gray5};

      &::placeholder {
        color: ${({ theme }) => theme.colors.gray2};
      }

      &:focus {
        outline: 0;
      }
    }
  `,
  InputAddress: styled.input`
    grid-column: 1 / 3;
  `,
  InputDetail: styled.input`
    grid-column: 1 / 3;
  `,
  AddressBox: styled.div`
    display: grid;
    grid-template-columns: auto 10.8rem;
    gap: 1.2rem;
  `,
  SearchBtn: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.gray7};
    border-radius: 0.6rem;

    ${({ theme }) => theme.fonts.body_semibold_14};
    color: ${({ theme }) => theme.colors.white};
  `,
};
