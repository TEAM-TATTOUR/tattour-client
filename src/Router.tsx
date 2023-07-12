import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';
import RegisterPhoneNum from './components/Register/RegisterPhoneNum';
import ChargePage from './pages/PointCharge/ChargePage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/input-number' element={<RegisterPhoneNum />} />
        <Route path='/point-charge' element={<ChargePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
