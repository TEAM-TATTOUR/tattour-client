import styled from 'styled-components';
import Lottie from 'react-lottie';
import tattour_loading from '../assets/video/tattour_loading.json';

const LoadingPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: tattour_loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <St.Wrapper>
      <Lottie
        options={defaultOptions}
        height='9.6rem'
        width='9.6rem'
        isClickToPauseDisabled={true}
      />
    </St.Wrapper>
  );
};

export default LoadingPage;

const St = {
  Wrapper: styled.div`
    display: flex;
    justify-content: center;

    position: fixed;
    top: 0;
    width: 100%;
    height: 100dvh;

    padding-top: 23rem;
  `,
};
