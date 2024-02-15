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
    <div>
      <Lottie options={defaultOptions} height='8rem' width='8rem' isClickToPauseDisabled={true} />
    </div>
  );
};

export default LoadingPage;
