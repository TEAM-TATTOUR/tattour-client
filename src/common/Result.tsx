import { styled } from 'styled-components';
import { IcFinish } from '../assets/icon';

interface ResultProps {
  mainText: string;
  description: string;
}

const Result = ({ mainText, description }: ResultProps) => {
  return (
    <St.SubmittedWrapper>
      <IcFinish />
      <St.TextWrapper>
        <St.SubmittedText>{mainText}</St.SubmittedText>
        <St.SubmittedSubtext>{description}</St.SubmittedSubtext>
      </St.TextWrapper>
    </St.SubmittedWrapper>
  );
};

export default Result;

const St = {
  SubmittedWrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 4.5rem;
    margin-bottom: 5.5rem;
    gap: 1.9rem;
  `,
  TextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 1.2rem;
  `,
  SubmittedText: styled.p`
    ${({ theme }) => theme.fonts.title_semibold_20};
    color: ${({ theme }) => theme.colors.gray9};
  `,
  SubmittedSubtext: styled.p`
    ${({ theme }) => theme.fonts.body_medium_14};
    color: ${({ theme }) => theme.colors.gray3};
  `,
};
