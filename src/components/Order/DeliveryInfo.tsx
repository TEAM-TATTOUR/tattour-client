import styled from 'styled-components';
import { useEffect, useState } from 'react';

interface DeliveryInfoProps {
  handleModal: () => void;
  addressRef: React.MutableRefObject<null>;
  postcodeRef: React.MutableRefObject<null>;
  setComplete: React.Dispatch<React.SetStateAction<boolean>>;
  input: string;
  setInput: string;
  phone: string;
  setPhone: string;
  detailAddress: string;
  setDetailAddress: string;
}
const DeliveryInfo = ({
  handleModal,
  addressRef,
  postcodeRef,
  setComplete,
  input,
  setInput,
  phone,
  setPhone,
  detailAddress,
  setDetailAddress,
}: DeliveryInfoProps) => {
  const sliceMaxLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 자동 하이픈
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
            placeholder='김타투'
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
            placeholder='010-0000-0000'
            maxLength='13'
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
              onChange={(e) => {
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
      margin: 2rem 0rem 1rem 0rem;

      ${({ theme }) => theme.fonts.body_medium_14};
      color: ${({ theme }) => theme.colors.gray3};
    }
    & input {
      width: 100%;
      padding: 1.2rem 2rem;
      margin-top: 1rem;
      background-color: ${({ theme }) => theme.colors.bg};
      border-width: 0rem;
      border-radius: 0.5rem;
      ${({ theme }) => theme.fonts.body_medium_16};

      &::placeholder {
        color: ${({ theme }) => theme.colors.gray2};
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
    grid-template-columns: 2fr 1fr;
    gap: 1.2rem;
  `,
  SearchBtn: styled.button`
    padding: 1.3rem 1.6rem;
    margin-top: 1rem;

    background-color: ${({ theme }) => theme.colors.gray7};
    border-radius: 0.6rem;

    ${({ theme }) => theme.fonts.body_semibold_14};
    color: ${({ theme }) => theme.colors.white};
  `,
};
