import ModalPortal from '../ModalPortal';
import EscapeModalForm from '../EscapeModal/EscapeModalForm';
import api from '../../../libs/api';
import { useNavigate } from 'react-router-dom';

interface DeleteCartModalProps {
  setModalOn: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
}

const DeleteCartModal = ({ setModalOn, id }: DeleteCartModalProps) => {
  const navigate = useNavigate();

  const handleClickDeleteModal = async () => {
    await api
      .delete(`/cart/${id}`)
      .then(() => {
        console.log('카트 삭제 성공');
        setModalOn(false);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        navigate('/error');
      });
  };
  return (
    <ModalPortal>
      <EscapeModalForm
        onClose={() => setModalOn(false)}
        pageName={'CartPage'}
        title={'선택한 상품을 삭제하시나요?'}
        subTitle={'삭제하시면 결제 대상에서'}
        subTitle2={'해당 상품이 제외돼요'}
        continueBtn={'삭제하기'}
        stopBtn={'그만하기'}
        continueBtnFunc={() => handleClickDeleteModal()}
      />
    </ModalPortal>
  );
};

export default DeleteCartModal;
