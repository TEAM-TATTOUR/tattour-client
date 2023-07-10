import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';
import RegisterPhoneNum from './components/Register/RegisterPhoneNum';
import CustomImgPage from './pages/Custom/NoDesign/CustomImgPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/input-number' element={<RegisterPhoneNum />} />
        <Route path='/custom-img' element={<CustomImgPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
