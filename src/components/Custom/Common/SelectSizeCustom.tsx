import { styled } from 'styled-components';
import SelectSizeCustomBtn from './SelectSizeCustomBtn';
import { useState, useRef, useEffect } from 'react';

const SelectSizeCustom = () => {
  const [selectedBtn, setSelectedBtn] = useState('');
  const sizeBtnRef = useRef<HTMLButtonElement[]>([]);

  const handleClickSelBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLElement;
    setSelectedBtn(target.id);
  };

  useEffect(() => {
    //버튼 하나씩만 누를 수 있도록
    sizeBtnRef.current.forEach((ref) => {
      if (ref.id === selectedBtn) {
        console.log(ref);
        ref.classList.add('isSelected');
      } else {
        ref.classList.remove('isSelected');
      }
    });
  }, [selectedBtn]);

  console.log(selectedBtn, '???');

  return (
    <St.SizeWrapper>
      <St.SizeInfoContainer>
        <St.InfoMainText>원하는 타투 크기를 골라주세요</St.InfoMainText>
        <St.InfoSubText>고민되는 크기를 선택해주세요!</St.InfoSubText>
      </St.SizeInfoContainer>
      <St.SizeBntContainer>
        <SelectSizeCustomBtn
          id='size 1'
          title='5cm 이하'
          detail='동전 크기'
          ref={(element: HTMLButtonElement) => (sizeBtnRef.current[0] = element)}
          onClick={handleClickSelBtn}
          selectedBtn={selectedBtn}
        />
        <SelectSizeCustomBtn
          id='size 2'
          title='A4 1/8'
          detail='신용카드, 담뱃값 크기'
          ref={(element: HTMLButtonElement) => (sizeBtnRef.current[1] = element)}
          onClick={handleClickSelBtn}
          selectedBtn={selectedBtn}
        />
        <SelectSizeCustomBtn
          id='size 3'
          title='A4 1/4'
          detail='엽서, 손바닥 크기'
          ref={(element: HTMLButtonElement) => (sizeBtnRef.current[2] = element)}
          onClick={handleClickSelBtn}
          selectedBtn={selectedBtn}
        />
        <SelectSizeCustomBtn
          id='size 4'
          title='A4 1/2'
          detail='아래팔 한 쪽 면 크기'
          ref={(element: HTMLButtonElement) => (sizeBtnRef.current[3] = element)}
          onClick={handleClickSelBtn}
          selectedBtn={selectedBtn}
        />
      </St.SizeBntContainer>
    </St.SizeWrapper>
  );
};

export default SelectSizeCustom;

const St = {
  SizeWrapper: styled.section`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100vh;
  `,

  SizeInfoContainer: styled.article`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    margin: 5.6rem 0 4rem 0;
  `,

  InfoMainText: styled.h2`
    color: ${({ theme }) => theme.colors.gray8};
    ${({ theme }) => theme.fonts.title_semibold_18};
  `,

  InfoSubText: styled.p`
    color: ${({ theme }) => theme.colors.gray3};
    ${({ theme }) => theme.fonts.body_medium_14};
  `,

  SizeBntContainer: styled.article`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1.5rem;

    width: 33.5rem;
    height: 43.3rem;
  `,
};
