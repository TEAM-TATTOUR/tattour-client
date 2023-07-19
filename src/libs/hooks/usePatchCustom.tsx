import { useEffect, useState } from 'react';
import api from '../api';
import { AxiosError } from 'axios';

interface CustomResponse {
  data: {
    id: number;
    userId: number;
    stickerId: number;
    themes: string[];
    styles: string[];
    mainImageUrl: string;
    images: string[];
    haveDesign: boolean;
    size: string;
    description: string;
    demand: string;
    count: number;
    isColored: boolean;
    isPublic: boolean;
    isCompleted: boolean;
    process: string;
    viewCount: number;
  };
  code: number;
  message: string;
}

interface RequestCustom {
  customInfo: {
    customId: number;
    size: string;
    isColored: boolean;
    themes: number[];
    styles: number[];
    name: string;
    description: string;
    demand: string;
    count: number;
    isPublic: boolean;
    isCompleted: boolean;
    price: number;
    viewCount: number;
  };
  customMainImage: File;
  customImages: FileList;
}

const usePatchCustom = (body: RequestCustom) => {
  const [response, setResponse] = useState<CustomResponse['data'] | null>(null);
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const formData = new FormData();
    formData.append('customInfo', JSON.stringify(body.customInfo));
    formData.append('customMainImage', body.customMainImage);
    for (let i = 0; i < body.customImages.length; i++) {
      formData.append('customImages', body.customImages[i]);
    }

    await api
      .patch('/custom/update', formData)
      .then((res) => {
        const data: CustomResponse = res.data;
        setResponse(data.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { response, error, loading };
};

export default usePatchCustom;
