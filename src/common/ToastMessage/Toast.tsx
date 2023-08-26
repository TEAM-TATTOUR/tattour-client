import { useEffect } from 'react';
import { styled } from 'styled-components';

interface ToastProps {
  setToast: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
}

const Toast = ({ setToast, text }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [setToast]);

  return (
    <St.ToastWrapper>
      <St.ToastContentsWrapper>
        <St.ToastContents>{text}</St.ToastContents>
      </St.ToastContentsWrapper>
    </St.ToastWrapper>
  );
};

const St = {
  ToastWrapper: styled.div`
    display: flex;
    z-index: 1;
  `,
  ToastContentsWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 18.6rem; */
    width: fit-content;
    height: 5.2rem;
    padding: 1.7rem 1.6rem;

    position: fixed;
    left: 50%;
    bottom: 10rem;
    transform: translate(-50%, 0%);

    border-radius: 0.4rem;

    background-color: ${({ theme }) => theme.colors.gray7};
    opacity: 75%;
  `,
  ToastContents: styled.p`
    color: ${({ theme }) => theme.colors.white};

    ${({ theme }) => theme.fonts.body_semibold_14};
  `,
};

export default Toast;
