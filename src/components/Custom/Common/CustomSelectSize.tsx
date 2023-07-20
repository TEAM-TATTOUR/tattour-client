import { styled } from 'styled-components';
import CustomSelectSizeBtn from './CustomSelectSizeBtn';
import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface CustomSelectSizeProps {
  setIsActiveNext: React.Dispatch<React.SetStateAction<boolean>>;
  setSize: React.Dispatch<React.SetStateAction<string>>;
}

const CustomSelectSize = ({ setIsActiveNext, setSize }: CustomSelectSizeProps) => {
  const BTN_DATA = [
    { id: 'quarter', title: '5cm 이하', detail: '동전 크기' },
    { id: 'regular', title: 'A4 1/8', detail: '신용카드, 담뱃갑 크기' },
    { id: 'half', title: 'A4 1/4', detail: '엽서, 손바닥 크기' },
    { id: 'double', title: '5cm 이하', detail: '아래팔 한 쪽 면 크기' },
  ];

  const location = useLocation();
  const [selectedBtn, setSelectedBtn] = useState('');
  const sizeBtnRef = useRef<HTMLButtonElement[]>([]);

  // console.log(location.state.customInfo.size, '##');
  const size =
    location.state && location.state.customInfo.size ? location.state.customInfo.size : null;

  // console.log(size, '???');

  const handleClickSelBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLElement;
    if (!target) return;
    setSelectedBtn(target.id);
    setSize(target.id);
    setIsActiveNext(true);
  };

  useEffect(() => {
    //버튼 하나씩만 누를 수 있도록
    sizeBtnRef.current.forEach((ref) => {
      if (ref.id === selectedBtn) {
        ref.classList.add('isSelected');
      } else {
        ref.classList.remove('isSelected');
      }
    });
  }, [selectedBtn]);

  useEffect(() => {
    if (!size) return;
    sizeBtnRef.current.forEach((ref) => {
      if (ref.id === size) {
        console.log('맞');
        ref.classList.add('isSelected');
        setIsActiveNext(true);
      } else {
        ref.classList.remove('isSelected');
      }
    });
  }, [size, setIsActiveNext]);

  return (
    <St.SizeWrapper>
      <St.SizeInfoContainer>
        <St.InfoMainText>크기를 선택해주세요</St.InfoMainText>
        <St.InfoSubTextBox>
          <St.InfoSubText>직접 입력 기능은 추후 업데이트 예정이니, 정확한 크기를</St.InfoSubText>
          <St.InfoSubText>원하시면 [요청사항]에 mm 단위로 크기를 작성해주세요</St.InfoSubText>
        </St.InfoSubTextBox>
      </St.SizeInfoContainer>
      <St.SizeBntContainer>
        {BTN_DATA.map(({ id, title, detail }, idx) => {
          return (
            <CustomSelectSizeBtn
              key={id}
              id={id}
              title={title}
              detail={detail}
              ref={(element: HTMLButtonElement) => (sizeBtnRef.current[idx] = element)}
              onClick={handleClickSelBtn}
              isSelected={selectedBtn === id}
            />
          );
        })}
      </St.SizeBntContainer>
    </St.SizeWrapper>
  );
};

export default CustomSelectSize;

const St = {
  SizeWrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    min-height: calc(100dvh - 13.6rem);
    /* padding: 4.6rem 0 11.9rem 0; */
  `,

  SizeInfoContainer: styled.article`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    margin: 4.6rem 0 3rem 0;
  `,

  InfoMainText: styled.h2`
    color: ${({ theme }) => theme.colors.gray8};
    ${({ theme }) => theme.fonts.title_semibold_20};
  `,

  InfoSubText: styled.p`
    color: ${({ theme }) => theme.colors.gray3};
    ${({ theme }) => theme.fonts.body_medium_14};
  `,

  InfoSubTextBox: styled.div`
    display: flex;
    flex-direction: column;
  `,

  SizeBntContainer: styled.article`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1.5rem;

    width: 33.5rem;
    height: 43.3rem;
    margin-bottom: 4.9rem;
  `,
};
