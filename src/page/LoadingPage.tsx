import Lottie from 'lottie-react';
import * as animationData from '../assets/video/tattour_loading.json';

const LoadingPage = () => {
  return (
    <div>
      <Lottie animationData={animationData} />
    </div>
  );
};

export default LoadingPage;
