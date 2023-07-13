import { styled } from 'styled-components';
import { LabelCustomSmall } from '../../assets/icon';

const renderDummyImageComponent = () => {
  return (
    <div
      style={{
        width: '15.3rem',
        height: '16.3rem',
        backgroundColor: 'gray',
      }}
    ></div>
  );
};

const MyCustomItem = ({ title }: { title: string }) => {
  return (
    <St.MyCustomItem>
      <LabelCustomSmall />
      {renderDummyImageComponent()}
      <St.MyCustomItemTitle>{title}</St.MyCustomItemTitle>
    </St.MyCustomItem>
  );
};

const St = {
  MyCustomItem: styled.article`
    position: relative;

    & > svg {
      position: absolute;
    }
  `,

  MyCustomItemTitle: styled.h3`
    margin-top: 1.3rem;
    ${({ theme }) => theme.fonts.body_medium_14};
    color: ${({ theme }) => theme.colors.gray7};
  `,
};

export default MyCustomItem;
