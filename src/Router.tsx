import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SizeCustomPage from './pages/Custom/Common/SizeCustomPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/size-custom' element={<SizeCustomPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
