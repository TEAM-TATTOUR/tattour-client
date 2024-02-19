import { useEffect, useState } from 'react';
import { api } from '../../api';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { buttonType } from '../../../page/ListPage';
import { FILTER_DEFAULT, SORT_TAGS } from '../../../constants/ListInfo';

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
    case FILTER_DEFAULT.SORT:
      sort = 'popularity';
      break;
    case SORT_TAGS[0]:
      sort = 'popularity';
      break;
    case SORT_TAGS[1]:
      sort = 'price_low';
      break;
    case SORT_TAGS[2]:
      sort = 'price_high';
      break;
  }
  // ✅ reduce 메소드로 줄일 수 있음
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
