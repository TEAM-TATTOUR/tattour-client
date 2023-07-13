import { useLocation } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';
import RegisterPhoneNum from '../../components/Register/RegisterPhoneNum';

const RegisterPhoneNumPage = () => {
  const { state } = useLocation();
  
  return (
    <PageLayout>
      <RegisterPhoneNum />
    </PageLayout>
  );
};

export default RegisterPhoneNumPage;
