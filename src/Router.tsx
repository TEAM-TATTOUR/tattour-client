import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListPage from './page/ListPage';
import MainPage from './page/MainPage';
import LoginPage from './page/Login/LoginPage';
import DetailPage from './page/DetailPage';
import MyTattoo from './page/MyTattoo';
import MyTattooDetail from './page/MyTattooDetail';
import ChargePage from './page/PointCharge/ChargePage';
import TransferPage from './page/PointCharge/TransferPage';
// import SelectCustomLayout from './components/Custom/Common/Select/SelectCustomLayout';
import CompletePage from './page/Order/CompletePage';
import OrderPage from './page/Order/OrderPage';

import OnBoardingPage from './page/Custom/Common/OnBoardingPage';
// import CustomSizeLayout from './components/Custom/Common/Size/CustomSizeLayout';
// import CustomImgLayout from './components/Custom/NoDesign/Img/CustomImgLayout';
// import CustomRequestLayout from './components/Custom/NoDesign/Request/CustomRequestLayout';

// import CustomReferenceLayout from './components/Custom/HaveDesign/Reference/CustomReferenceLayout';
// import AdditionalRequestLayout from './components/Custom/HaveDesign/AdditionalRequest/AdditionalRequestLayout';
// import CustomThemeLayout from './components/Custom/HaveDesign/CustomTheme/CustomThemeLayout';
// import SelectKeywordLayout from './components/Custom/HaveDesign/SelectKeyword/SelectKeywordLayout';
// import StylingColorLayout from './components/Custom/HaveDesign/SelectColor/StylingColorLayout';
// import PricePage from './components/Custom/Common/PriceLayout';
// import ReceiptLayout from './components/Custom/Common/Receipt/ReceiptLayout';

import SearchPage from './page/Search/SearchPage';
import SearchResultPage from './page/Search/SearchResultPage';
import ScrollToTop from './libs/hooks/ScrollTop';
import LoginCallback from './components/Login/LoginCallback';
import SavePage from './page/SavePage';
import NoDesignCustomPage from './page/Custom/NoDesign/NoDesignCustomPage';
import HaveDesignCustomPage from './page/Custom/HaveDesign/HaveDesignCustomPage';
import CommonCustomPage from './page/Custom/Common/CommonCustomPage';

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
        {/* <Route path='/select' element={<SelectCustomLayout />} /> */}
        {/* <Route path='/styling-color' element={<StylingColorLayout />} /> */}
        {/* <Route path='/select-keyword' element={<SelectKeywordLayout />} /> */}
        <Route path='/onboarding' element={<OnBoardingPage />} />
        {/* <Route path='/custom-size' element={<CustomSizeLayout />} /> */}
        {/* <Route path='/custom-img' element={<CustomImgLayout />} /> */}
        {/* <Route path='/custom-request' element={<CustomRequestLayout />} /> */}
        {/* <Route path='/custom-theme' element={<CustomThemeLayout />} /> */}
        {/* <Route path='/additional-request' element={<AdditionalRequestLayout />} /> */}
        {/* <Route path='/price' element={<PricePage />} /> */}
        {/* <Route path='/receipt' element={<ReceiptLayout />} /> */}
        <Route path='/complete' element={<CompletePage />} />
        {/* <Route path='/custom-reference' element={<CustomReferenceLayout />} /> */}
        <Route path='/save' element={<SavePage />} />
        <Route path='/haveDesign' element={<HaveDesignCustomPage />} />
        <Route path='/noDesign' element={<NoDesignCustomPage />} />
        <Route path='/custom' element={<CommonCustomPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
