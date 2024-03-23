import { lazy } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './page/MainPage';

const DetailPage = lazy(() => import('./page/DetailPage'));
const ListPage = lazy(() => import('./page/ListPage'));
const LoginPage = lazy(() => import('./page/Login/LoginPage'));
const MyTattoo = lazy(()=>import('./page/MyTattoo'));
const MyTattooDetail = lazy(()=>import('./page/MyTattooDetail'));
const CompletePage = lazy(()=>import('./page/Order/CompletePage'));
const OrderPage = lazy(()=>import('./page/Order/OrderPage'));
const OnBoardingPage = lazy(() => import('./page/Custom/Common/OnBoardingPage'));

const LoginCallback = lazy(() => import('./components/Login/LoginCallback'));
const Interceptors = lazy(() => import('./libs/hooks/Interceptors'));
const ScrollToTop = lazy(() => import('./libs/hooks/ScrollTop'));
const CartPage = lazy(() => import('./page/CartPage'));
const CommonCustomPage = lazy(() => import('./page/Custom/Common/CommonCustomPage'));
const HaveDesignCustomPage = lazy(() => import('./page/Custom/HaveDesign/HaveDesignCustomPage'));
const NoDesignCustomPage = lazy(() => import('./page/Custom/NoDesign/NoDesignCustomPage'));
const ErrorPage = lazy(() => import('./page/Error/ErrorPage'));
const ExpirationPage = lazy(()=>import('./page/Expiration/ExpirationPage'));
const MagazinePage = lazy(() => import('./page/MagazinePage'));
const OrderDepositPage = lazy(() => import('./page/Order/OrderDepositPage'));
const SavePage = lazy(() => import('./page/SavePage'));
const SearchPage = lazy(() => import('./page/Search/SearchPage'));
const SearchResultPage = lazy(() => import('./page/Search/SearchResultPage'));

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
