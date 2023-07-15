import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/Login/LoginPage';
import RegisterNamePage from './pages/Register/RegisterNamePage';
import RegisterPhoneNumPage from './pages/Register/RegisterPhoneNumPage';
import WelcomePage from './pages/Welcome/WelcomePage';
import SelectPage from './pages/Custom/SelectPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterNamePage />} />
        <Route path='/register-number' element={<RegisterPhoneNumPage />} />
        <Route path='/welcome-signup' element={<WelcomePage />} />
        <Route path='/select' element={<SelectPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
