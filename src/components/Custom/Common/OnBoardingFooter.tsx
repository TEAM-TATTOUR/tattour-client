import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import TempSaveModal from '../../../common/Modal/TempSaveModal/TempSaveModal';
import { useNavigate } from 'react-router-dom';
import api from '../../../libs/api';
import { AxiosError } from 'axios';

export interface CustomSaveItemProps {
  id: number;
  name: string;
  imageUrl: string;
}

interface CustomSaveResponse {
  data: {
    customs: CustomSaveItemProps[];
  };
  code: number;
  message: string;
}

const OnBoardingFooter = ({ isLogin }: { isLogin: boolean }) => {
  const navgiate = useNavigate();

  const [modalOn, setModalOn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [response, setResponse] = useState<CustomSaveItemProps[]>([]);
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    await api
      .get('/user/custom/incomplete')
      .then((res) => {
        const data: CustomSaveResponse = res.data;
        setResponse(data.data.customs);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!isLogin) return;
    fetchData();
  }, [isLogin]);

  useEffect(() => {
    if (response?.length === 0) {
      setIsModalOpen(false);
    } else {
      setIsModalOpen(true);
    }
  }, [response]);

  const handleClickFooter = () => {
    isModalOpen ? setModalOn(true) : navgiate('/custom');
  };

  return (
    !error &&
    !loading && (
      <>
        <St.OnBoardingFooter onClick={handleClickFooter}>
          <St.FooterText>신청서 작성하기</St.FooterText>
        </St.OnBoardingFooter>
        {isModalOpen && modalOn && <TempSaveModal setModalOn={setModalOn} />}
      </>
    )
  );
};

export default OnBoardingFooter;

const St = {
  OnBoardingFooter: styled.footer`
    position: sticky;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 7rem;

    background-color: ${({ theme }) => theme.colors.gray9};
    z-index: 2;
  `,

  FooterText: styled.p`
    color: ${({ theme }) => theme.colors.pink5};
    ${({ theme }) => theme.fonts.title_semibold_18};
  `,
};
