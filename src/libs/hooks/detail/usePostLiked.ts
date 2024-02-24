import { useNavigate } from 'react-router-dom';
import { api } from '../../api';

const usePostLiked = (id: number) => {
  const navigate = useNavigate();

  // 좋아요 추가 통신
  const postLiked = async () => {
    await api
      .post(`/user/productliked/save`, {
        stickerId: id,
      })
      .catch((err) => {
        console.log(err);
        navigate('/error');
      });
  };

  // 좋아요 삭제 통신
  const postDisliked = async () => {
    await api
      .delete(`/user/productliked/sticker/${id}/delete`)
      .then(() => {
        // 좋아요 삭제
        console.log('좋아요 삭제');
      })
      .catch(() => {
        navigate('/error');
      });
  };

  return { postLiked, postDisliked };
};

export default usePostLiked;
