import styled from 'styled-components';
import { IcCheckSmallGray } from '../../../../assets/icon';

const CustomDepositInfo = () => {
  return (
    <St.CustomInfoMsgHeader>
      <St.CustomInfoMsgTitle>신청서를 완성하기 위해 결제가 필요해요</St.CustomInfoMsgTitle>
      <St.CustomInfoMsgDetailContainer>
        <St.CustomInfoMsgDetailBox>
          <IcCheckSmallGray />
          <St.CustomInfoMsgDetail>
            섬세한 도안 제작에 필요한 최소한의 비용이에요
          </St.CustomInfoMsgDetail>
        </St.CustomInfoMsgDetailBox>
        <St.CustomInfoMsgDetailBox>
          <IcCheckSmallGray />
          <St.CustomInfoMsgDetail>
            송금하지 않을 시 신청서가 반려될 수 있어요
          </St.CustomInfoMsgDetail>
        </St.CustomInfoMsgDetailBox>
      </St.CustomInfoMsgDetailContainer>
    </St.CustomInfoMsgHeader>
  );
};

export default CustomDepositInfo;

const St = {
  CustomInfoMsgHeader: styled.header`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    width: 100%;
    padding-top: 6.3rem;
  `,

  CustomInfoMsgTitle: styled.h2`
    color: ${({ theme }) => theme.colors.gray8};
    ${({ theme }) => theme.fonts.title_semibold_20};
  `,

  CustomInfoMsgDetailContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  `,

  CustomInfoMsgDetailBox: styled.div`
    display: flex;
    gap: 0.2rem;
  `,

  CustomInfoMsgDetail: styled.p`
    color: ${({ theme }) => theme.colors.gray3};
    ${({ theme }) => theme.fonts.body_medium_14};
  `,
};
