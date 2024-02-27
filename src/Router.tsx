import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailPage from './page/DetailPage';
import ListPage from './page/ListPage';
import LoginPage from './page/Login/LoginPage';
import MainPage from './page/MainPage';
import MyTattoo from './page/MyTattoo';
import MyTattooDetail from './page/MyTattooDetail';
import CompletePage from './page/Order/CompletePage';
import OrderPage from './page/Order/OrderPage';

import OnBoardingPage from './page/Custom/Common/OnBoardingPage';

import LoginCallback from './components/Login/LoginCallback';
import Interceptors from './libs/hooks/Interceptors';
import ScrollToTop from './libs/hooks/ScrollTop';
import CartPage from './page/CartPage';
import CommonCustomPage from './page/Custom/Common/CommonCustomPage';
import HaveDesignCustomPage from './page/Custom/HaveDesign/HaveDesignCustomPage';
import NoDesignCustomPage from './page/Custom/NoDesign/NoDesignCustomPage';
import ErrorPage from './page/Error/ErrorPage';
import ExpirationPage from './page/Expiration/ExpirationPage';
import MagazinePage from './page/MagazinePage';
import OrderDepositPage from './page/Order/OrderDepositPage';
import SavePage from './page/SavePage';
import SearchPage from './page/Search/SearchPage';
import SearchResultPage from './page/Search/SearchResultPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Interceptors />
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
