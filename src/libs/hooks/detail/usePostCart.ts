import { useNavigate } from 'react-router-dom';
import { api } from '../../api';

interface usePostCartProps {
  id: number;
  count: number;
  setCartToast: React.Dispatch<React.SetStateAction<boolean>>;
  setSheetOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const usePostCart = ({ id, count, setCartToast, setSheetOpen }: usePostCartProps) => {
  const navigate = useNavigate();

  const postCart = async () => {
    await api
      .post('/cart', {
        stickerId: id,
        count: count,
      })
      .then(() => {
        setCartToast(true);
        setSheetOpen(false);
      })
      .catch((err) => {
        console.log(err);
        navigate('/error');
      });
  };

  return postCart;
};

export default usePostCart;
