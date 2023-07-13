import { styled } from 'styled-components';

interface MyTattooTagSectionProps {
  shippingStatus: string;
  isOpen: boolean;
}

const MyTattooTagSection = ({ shippingStatus, isOpen }: MyTattooTagSectionProps) => {
  const shppingStatusText = (status: string) => {
    switch (status) {
      case 'receiving':
        return '접수 중';
      case 'receiptComplete':
        return '접수 완료';
      case 'receiptFailed':
        return '접수 실패';
      case 'shipping':
        return '배송 중';
      case 'shipped':
        return '배송 완료';
      default:
        return '접수 완료';
    }
  };

  return (
    <St.MyTattooTagWrapper>
      <St.MyTattooShippingStatusTag $shippingStatus={shippingStatus}>
        <St.MyTattooShippingStatusTagText $shippingStatus={shippingStatus}>
          {shppingStatusText(shippingStatus)}
        </St.MyTattooShippingStatusTagText>
      </St.MyTattooShippingStatusTag>
      <St.MyTattooOpenTag>
        <St.MyTattooOpenTagText>{isOpen ? '도안 공개' : '도안 비공개'}</St.MyTattooOpenTagText>
      </St.MyTattooOpenTag>
    </St.MyTattooTagWrapper>
  );
};

const St = {
  MyTattooTagWrapper: styled.header`
    display: flex;
    margin-top: 2.6rem;
    margin-left: 2rem;
  `,

  MyTattooOpenTag: styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.6rem;
    margin-left: 2rem;

    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.gray1};
  `,

  MyTattooOpenTagText: styled.span`
    margin-left: 0.8rem;
    margin-right: 0.8rem;

    ${({ theme }) => theme.fonts.body_medium_14};
    color: ${({ theme }) => theme.colors.gray4};
  `,

  MyTattooShippingStatusTag: styled.p<{ $shippingStatus: string }>`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 2.6rem;

    border-radius: 0.5rem;
    background-color: ${({ theme, $shippingStatus }) => {
      switch ($shippingStatus) {
        case 'requested' || 'receiving':
          return theme.colors.pink3;
        case 'receiptComplete' || 'receiptFailed':
          return theme.colors.pink5;
        case 'shipping' || 'shipped':
          return theme.colors.pink1;
        default:
          return theme.colors.pink3;
      }
    }};
  `,

  MyTattooShippingStatusTagText: styled.span<{ $shippingStatus: string }>`
    margin-left: 0.8rem;
    margin-right: 0.8rem;

    ${({ theme }) => theme.fonts.body_medium_14};
    color: ${({ theme, $shippingStatus }) => {
      switch ($shippingStatus) {
        case 'shipping' || 'shipped':
          return theme.colors.pink5;
        default:
          return theme.colors.white;
      }
    }};
  `,
};

export default MyTattooTagSection;
