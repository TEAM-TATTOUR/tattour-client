import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SelectPage from './pages/Custom/SelectPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/select' element={<SelectPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
