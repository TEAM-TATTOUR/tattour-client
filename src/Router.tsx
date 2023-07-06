import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OnBoardingPage from './pages/Custom/OnBoardingPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/onBoarding' element={<OnBoardingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
