import React, { useState, useRef, useEffect } from 'react';
import { styled } from 'styled-components';
import SelectCustomBtn from './SelectCustomBtn';
import { IcArrowRightDark } from '../../assets/icon';
import SelectCustomPolicyBottom from './SelectCustomPolicyBottom';

const SelectCustom = ({
  setIsActiveNext,
}: {
  setIsActiveNext: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const CASE_BTN_DATA = [
    {
      id: 'noDesign',
      firstTitle: '내 도안',
      secondTitle: '그대로 만들기',
      firstDetail: '이미지 파일',
      secondDetail: '그대로 제작해드려요',
    },
    {
      id: 'haveDesign',
      firstTitle: '타투어에게',
      secondTitle: '도안 의뢰하기',
      firstDetail: '참고 이미지, 간단 스케치를',
      secondDetail: '통해 제작해드려요',
    },
  ];

  const [activeBtn, setActiveBtn] = useState(''); //선택 된 버튼의 상황
  const btnRef = useRef<HTMLButtonElement[]>([]); //상황 선택 버튼 리스트 ref
  const [haveDesign, setHaveDesign] = useState<boolean>(); //리코일 저장 후 서버 통신 예정

  const [isSheetOpen, setSheetOpen] = useState(false);

  const handleClickSelBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLElement;
    if (!target) return;
    setActiveBtn(target.id);
    target.id === 'haveDesign' ? setHaveDesign(true) : setHaveDesign(false);
    setIsActiveNext(true);
  };

  useEffect(() => {
    //버튼 하나씩만 누를 수 있도록
    btnRef.current.forEach((ref) => {
      if (ref.id === activeBtn) {
        ref.classList.add('isClicked');
      } else {
        ref.classList.remove('isClicked');
      }
    });
  }, [activeBtn]);

  return (
    <St.SelectWrapper>
      <St.SelectInfoContainer>
        <St.InfoMainText>원하는 제작 방식을 선택해주세요</St.InfoMainText>
      </St.SelectInfoContainer>

      <St.SelectBtnContainer>
        {CASE_BTN_DATA.map(({ id, firstTitle, secondTitle, firstDetail, secondDetail }, idx) => {
          return (
            <SelectCustomBtn
              key={id}
              id={id}
              firstTitle={firstTitle}
              secondTitle={secondTitle}
              firstDetail={firstDetail}
              secondDetail={secondDetail}
              ref={(element: HTMLButtonElement) => (btnRef.current[idx] = element)}
              onClick={handleClickSelBtn}
              isSelected={activeBtn === id}
            />
          );
        })}
      </St.SelectBtnContainer>
      <St.SelectCustomPolicyContainer>
        <St.PolicyAgreeTouchArea onClick={() => setSheetOpen(true)}>
          <St.PolicyAgreeMainText>커스텀 도안 환불 정책에 동의합니다</St.PolicyAgreeMainText>
          <IcArrowRightDark />
        </St.PolicyAgreeTouchArea>
        <St.PolicyAgreeSubTextBox>
          <St.PolicyAgreeSubText>
            다음 페이지로 넘어가 신청서 작성을 시작하면 커스텀
          </St.PolicyAgreeSubText>
          <St.PolicyAgreeSubText>도안 정책에 동의하는 것으로 간주합니다</St.PolicyAgreeSubText>
        </St.PolicyAgreeSubTextBox>
        <SelectCustomPolicyBottom isSheetOpen={isSheetOpen} setSheetOpen={setSheetOpen} />
      </St.SelectCustomPolicyContainer>
    </St.SelectWrapper>
  );
};

export default SelectCustom;

const St = {
  SelectWrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    height: calc(100svh - 13rem);
  `,

  SelectTopSectionContainerWrapper: styled.section`
    display: flex;
    flex-direction: column;
  `,

  SelectInfoContainer: styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;

    margin: 5.6rem 0 4rem; //최상단 세로 마진
  `,

  InfoMainText: styled.h2`
    color: ${({ theme }) => theme.colors.gray8};
    ${({ theme }) => theme.fonts.title_semibold_20};
    padding: 0 6rem;
  `,

  SelectBtnContainer: styled.article`
    display: flex;
    gap: 1.5rem;
    justify-content: center;

    width: 100%;
  `,

  SelectCustomPolicyContainer: styled.article`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin: 9.6rem 0 3.8rem 0; //정책 동의 영역과 버튼 사이 마진
    padding-left: 2.4rem;
  `,

  PolicyAgreeTouchArea: styled.article`
    display: flex;
    gap: 0.3rem;

    cursor: pointer;
  `,

  PolicyAgreeMainText: styled.p`
    color: ${({ theme }) => theme.colors.gray4};
    ${({ theme }) => theme.fonts.body_medium_16};
  `,

  PolicyAgreeSubTextBox: styled.div`
    display: flex;
    flex-direction: column;
  `,

  PolicyAgreeSubText: styled.p`
    color: ${({ theme }) => theme.colors.gray2};
    ${({ theme }) => theme.fonts.body_medium_14};
  `,
};
