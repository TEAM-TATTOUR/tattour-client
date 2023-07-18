import ic_check from '../../assets/icon/ic_check.svg';
import ic_check_selected from '../../assets/icon/ic_check_selected.svg';
import { styled } from 'styled-components';
import { IcArrowRightDark } from '../../assets/icon';
import { useState } from 'react';
import PublicBottomSheet from './PublicBottomSheet';

interface MakePublicProps {
  isPublic: boolean;
  setIsPublic: (value: boolean) => void;
}

const MakePublic: React.FC<MakePublicProps> = ({ isPublic, setIsPublic }) => {
  const [isBottomOpen, setBottomOpen] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPublic(e.target.checked);
  };

  return (
    <St.Wrapper>
      <St.MakePublicWrapper>
        <St.PublicAgreeCheckBox
          type='checkbox'
          id='pointAgree'
          checked={isPublic}
          onChange={handleCheckboxChange}
        />
        <label htmlFor='pointAgree'></label>

        <St.PublicAgreeTouchArea>
          <St.PublicAgreeText>커스텀 도안 공개하고 단가 낮출래요</St.PublicAgreeText>
          <IcArrowRightDark onClick={() => setBottomOpen(true)} />
        </St.PublicAgreeTouchArea>
      </St.MakePublicWrapper>
      <St.PublicAgreeSubtext>
        해당 도안을 다른 타투어도 구매할 수 있게 공개하면 즉시 할인 받을 수 있어요
      </St.PublicAgreeSubtext>
      {isBottomOpen && (
        <PublicBottomSheet isSheetOpen={isBottomOpen} setSheetOpen={setBottomOpen} />
      )}
    </St.Wrapper>
  );
};

export default MakePublic;

const St = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    min-height: calc(100dvh - 63.8rem);
  `,
  MakePublicWrapper: styled.section`
    display: flex;
    align-items: center;

    padding: 0 5.3rem 0 2.4rem;
  `,

  PublicAgreeCheckBox: styled.input`
    display: none;

    & + label {
      display: block;

      width: 2.4rem;
      height: 2.4rem;

      background: url(${ic_check});
    }

    &:checked + label {
      display: block;

      width: 2.4rem;
      height: 2.4rem;

      background: url(${ic_check_selected});
    }
  `,

  PublicAgreeTouchArea: styled.article`
    display: flex;
    gap: 0.3rem;
    margin-left: 1.2rem;
  `,

  PublicAgreeText: styled.p`
    color: ${({ theme }) => theme.colors.gray4};
    ${({ theme }) => theme.fonts.title_semibold_16};
  `,

  PublicAgreeSubtext: styled.p`
    margin: 1rem 0 8rem 6rem;
    width: 22.5rem;

    color: ${({ theme }) => theme.colors.gray2};
    ${({ theme }) => theme.fonts.body_medium_14};
  `,
};
