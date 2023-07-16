import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListPage from './pages/ListPage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/Login/LoginPage';
import RegisterPhoneNum from './components/Register/RegisterPhoneNum';
import DetailPage from './pages/DetailPage';
import MyTattoo from './pages/MyTattoo';
import MyTattooDetail from './pages/MyTattooDetail';
import RegisterNamePage from './pages/Register/RegisterNamePage';
import RegisterPhoneNumPage from './pages/Register/RegisterPhoneNumPage';
import WelcomePage from './pages/Welcome/WelcomePage';
import ChargePage from './pages/PointCharge/ChargePage';
import TransferPage from './pages/PointCharge/TransferPage';
import SelectPage from './pages/Custom/SelectPage';
import OrderPage from './pages/OrderPage';
import CustomSizePage from './pages/Custom/Common/CustomSizePage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/list' element={<ListPage />} />
        <Route path='/' element={<MainPage />} />
        <Route path='/order' element={<OrderPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/input-number' element={<RegisterPhoneNum />} />
        <Route path='/detail' element={<DetailPage />} />
        <Route path='/register' element={<RegisterNamePage />} />
        <Route path='/register-number' element={<RegisterPhoneNumPage />} />
        <Route path='/welcome-signup' element={<WelcomePage />} />
        <Route path='/my-tattoo' element={<MyTattoo />} />
        <Route path='/my-tattoo/detail/:id' element={<MyTattooDetail />} />
        <Route path='/point-charge' element={<ChargePage />} />
        <Route path='/point-transfer' element={<TransferPage />} />
        <Route path='/select' element={<SelectPage />} />
        <Route path='/custom-size' element={<CustomSizePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
