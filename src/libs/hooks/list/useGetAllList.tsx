import { useEffect, useState } from 'react';
import { api } from '../../api';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

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

const useGetAllList = (buttonName: string[]) => {
  const navigate = useNavigate();

  let sort = 'popularity';
  switch (buttonName[0]) {
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
  const genre = buttonName[1] === '장르' ? null : buttonName[1];
  const style = buttonName[2] === '스타일' ? null : buttonName[2];
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
  }, [buttonName]);

  return { response, error, loading };
};

export default useGetAllList;
