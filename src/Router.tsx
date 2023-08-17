import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListPage from './page/ListPage';
import MainPage from './page/MainPage';
import LoginPage from './page/Login/LoginPage';
import DetailPage from './page/DetailPage';
import MyTattoo from './page/MyTattoo';
import MyTattooDetail from './page/MyTattooDetail';
import ChargePage from './page/PointCharge/ChargePage';
import TransferPage from './page/PointCharge/TransferPage';
import SelectPage from './page/Custom/Common/SelectPage';
import CompletePage from './page/Order/CompletePage';
import OrderPage from './page/Order/OrderPage';
import SelectKeywordPage from './page/Custom/HaveDesign/SelectKeywordPage';
import OnBoardingPage from './page/Custom/Common/OnBoardingPage';
import CustomSizePage from './page/Custom/Common/CustomSizePage';
import CustomImgLayout from './components/Custom/NoDesign/Img/CustomImgLayout';
import CustomRequestLayout from './components/Custom/NoDesign/Request/CustomRequestLayout';
import CustomThemePage from './page/Custom/HaveDesign/CustomThemePage';
import AdditionalRequestPage from './page/Custom/HaveDesign/AdditionalRequestPage';
import PricePage from './page/Custom/PricePage';
import ReceiptPage from './page/Custom/HaveDesign/ReceiptPage';
import StylingColorPage from './page/Custom/HaveDesign/StylingColorPage';
import CustomReferencePage from './page/Custom/HaveDesign/CustomReferencePage';
import SearchPage from './page/Search/SearchPage';
import SearchResultPage from './page/Search/SearchResultPage';
import ScrollToTop from './libs/hooks/ScrollTop';
import LoginCallback from './components/Login/LoginCallback';
import SavePage from './page/SavePage';
import NoDesignCustomPage from './page/Custom/NoDesign/NoDesignCustomPage';
import HaveDesignCustomPage from './page/Custom/HaveDesign/HaveDesignCustomPage';

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
        <Route path='/select' element={<SelectPage />} />
        <Route path='/styling-color' element={<StylingColorPage />} />
        <Route path='/select-keyword' element={<SelectKeywordPage />} />
        <Route path='/onboarding' element={<OnBoardingPage />} />
        <Route path='/custom-size' element={<CustomSizePage />} />
        <Route path='/custom-img' element={<CustomImgLayout />} />
        <Route path='/custom-request' element={<CustomRequestLayout />} />
        <Route path='/custom-theme' element={<CustomThemePage />} />
        <Route path='/additional-request' element={<AdditionalRequestPage />} />
        <Route path='/price' element={<PricePage />} />
        <Route path='/receipt' element={<ReceiptPage />} />
        <Route path='/complete' element={<CompletePage />} />
        <Route path='/custom-reference' element={<CustomReferencePage />} />
        <Route path='/save' element={<SavePage />} />
        <Route path='/haveDesign' element={<HaveDesignCustomPage />} />
        <Route path='/noDesign' element={<NoDesignCustomPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
