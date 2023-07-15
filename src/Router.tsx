import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/Login/LoginPage';
import MyTattoo from './pages/MyTattoo';
import MyTattooDetail from './pages/MyTattooDetail';
import RegisterNamePage from './pages/Register/RegisterNamePage';
import RegisterPhoneNumPage from './pages/Register/RegisterPhoneNumPage';
import WelcomePage from './pages/Welcome/WelcomePage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/login/oauth2/callback' element={<RegisterNamePage />} />
        <Route path='/register-number' element={<RegisterPhoneNumPage />} />
        <Route path='/welcome-signup' element={<WelcomePage />} />
        <Route path='/my-tattoo' element={<MyTattoo />} />
        <Route path='/my-tattoo/detail/:id' element={<MyTattooDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
