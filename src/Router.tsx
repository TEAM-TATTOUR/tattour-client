import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import OrderPage from './pages/Login/OrderPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/order' element={<OrderPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
