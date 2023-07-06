import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListPage from './pages/ListPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
