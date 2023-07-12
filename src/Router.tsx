import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListPage from './pages/ListPage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';
import RegisterPhoneNum from './components/Register/RegisterPhoneNum';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/list' element={<ListPage />} />
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/input-number' element={<RegisterPhoneNum />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
