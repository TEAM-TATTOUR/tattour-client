import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { api } from '../../../../libs/api';

interface SelectCustomFooterProps {
  isActiveNext: boolean;
  haveDesign: boolean;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setCustomId: React.Dispatch<React.SetStateAction<number>>;
}

const SelectCustomFooter = ({
  isActiveNext,
  haveDesign,
  setStep,
  setCustomId,
}: SelectCustomFooterProps) => {
  const navigate = useNavigate();

  // 선택된 커스텀 타투 플로우 케이스 값(haveDesign)이 있을 때, 통신을 해주기 위한 함수
  const fetchCustomApply = async () => {
    try {
      const { data } = await api.post('/custom/apply', {
        haveDesign: haveDesign,
      });
      setCustomId(data.data.customId);
    } catch (err) {
      navigate('/error');
    }
  };

  const handleClickFooter = () => {
    if (!isActiveNext) return;

    // 선택 된 값 있음 === isActiveNext일 때 custom/apply post 통신
    fetchCustomApply();
    setStep((prev) => prev + 1);
  };

  return (
    <St.SelectCustomFooter $isActiveNext={isActiveNext} onClick={handleClickFooter}>
      <St.FooterText>다음</St.FooterText>
    </St.SelectCustomFooter>
  );
};

export default SelectCustomFooter;

const St = {
  SelectCustomFooter: styled.footer<{ $isActiveNext: boolean }>`
    position: fixed;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 43rem;
    height: 7rem;

    background-color: ${({ $isActiveNext, theme }) =>
      $isActiveNext ? theme.colors.gray9 : theme.colors.gray3};
  `,

  FooterText: styled.p`
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.title_semibold_18};
  `,
};
