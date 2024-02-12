import { useEffect, useState } from 'react';
import api from '../../api';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { buttonType } from '../../../page/ListPage';

export interface AllListItemProps {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  discountRate: number;
  discountPrice: number;
  isCustom: boolean;
}

interface AllListResponse {
  data: {
    stickers: AllListItemProps[];
  };
  code: number;
  message: string;
}

const useGetAllList = (buttons: buttonType[]) => {
  const navigate = useNavigate();

  let sort = 'popularity';
  switch (buttons[0].value) {
    case '정렬':
      sort = 'popularity';
      break;
    case '인기 순':
      sort = 'popularity';
      break;
    case '가격 낮은 순':
      sort = 'price_low';
      break;
    case '가격 높은 순':
      sort = 'price_high';
      break;
  }
  const genre = buttons[1].value === buttons[1].default ? null : buttons[1].value;
  const style = buttons[2].value === buttons[2].default ? null : buttons[2].value;
  // ✅배열 구조분해 할당으로 한줄로 줄일 수 있음

  const [response, setResponse] = useState<AllListItemProps[]>([]);
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  const genreQuery = genre ? `&theme=${genre}` : ``;
  const styleQuery = style ? `&style=${style}` : ``;

  const fetchData = async () => {
    await api
      .get(`/stickers?sort=${sort}${genreQuery}${styleQuery}`)
      .then((res) => {
        const data: AllListResponse = res.data;
        setResponse(data.data.stickers);
      })
      .catch((err) => {
        setError(err);
        navigate('/error');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [buttons]);

  return { response, error, loading };
};

export default useGetAllList;
