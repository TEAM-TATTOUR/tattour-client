import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListPage from './page/ListPage';
import MainPage from './page/MainPage';
import LoginPage from './page/Login/LoginPage';
import DetailPage from './page/DetailPage';
import MyTattoo from './page/MyTattoo';
import MyTattooDetail from './page/MyTattooDetail';
import ChargePage from './page/PointCharge/ChargePage';
import TransferPage from './page/PointCharge/TransferPage';
import CompletePage from './page/Order/CompletePage';
import OrderPage from './page/Order/OrderPage';

import OnBoardingPage from './page/Custom/Common/OnBoardingPage';

import SearchPage from './page/Search/SearchPage';
import SearchResultPage from './page/Search/SearchResultPage';
import ScrollToTop from './libs/hooks/ScrollTop';
import LoginCallback from './components/Login/LoginCallback';
import SavePage from './page/SavePage';
import NoDesignCustomPage from './page/Custom/NoDesign/NoDesignCustomPage';
import HaveDesignCustomPage from './page/Custom/HaveDesign/HaveDesignCustomPage';
import CommonCustomPage from './page/Custom/Common/CommonCustomPage';
import ErrorPage from './page/Error/ErrorPage';
import MagazinePage from './page/MagazinePage';
import CartPage from './page/CartPage';
import ExpirationPage from './page/Expiration/ExpirationPage';
import OrderDepositPage from './page/Order/OrderDepositPage';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/list' element={<ListPage />} />
        <Route path='/' element={<MainPage />} />
        <Route path='/order' element={<OrderPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/detail/:id' element={<DetailPage />} />
        <Route path='/login/oauth2/callback' element={<LoginCallback />} />
        <Route path='/my-tattoo' element={<MyTattoo />} />
        <Route path='/my-tattoo/detail/:id' element={<MyTattooDetail />} />
        <Route path='/search' element={<SearchPage />}>
          <Route path=':keyword' element={<SearchResultPage />} />
        </Route>
        <Route path='/point-charge' element={<ChargePage />} />
        <Route path='/point-transfer' element={<TransferPage />} />
        <Route path='/onboarding' element={<OnBoardingPage />} />
        <Route path='/complete' element={<CompletePage />} />
        <Route path='/save' element={<SavePage />} />
        <Route path='/haveDesign' element={<HaveDesignCustomPage />} />
        <Route path='/noDesign' element={<NoDesignCustomPage />} />
        <Route path='/custom' element={<CommonCustomPage />} />
        <Route path='/error' element={<ErrorPage />} />
        <Route path='/expired' element={<ExpirationPage />} />
        <Route path='/article/:id' element={<MagazinePage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/order-deposit' element={<OrderDepositPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
