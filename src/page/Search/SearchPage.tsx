import { Outlet } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';
import SearchInputForm from '../../components/Search/SearchInputForm';

const SearchPage = () => {
  return (
    <PageLayout>
      <SearchInputForm />
      <Outlet />
    </PageLayout>
  );
};

export default SearchPage;
