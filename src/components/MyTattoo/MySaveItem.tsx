import { styled } from 'styled-components';

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

const MySaveItem = ({ title }: { title: string }) => {
  return (
    <St.MySaveItem>
      {renderDummyImageComponent()}
      <St.MySaveItemTitle>{title}</St.MySaveItemTitle>
    </St.MySaveItem>
  );
};

const St = {
  MySaveItem: styled.article`
    position: relative;

    & > svg {
      position: absolute;
    }
  `,

  MySaveItemTitle: styled.h3`
    margin-top: 1.3rem;
    ${({ theme }) => theme.fonts.body_medium_14};
    color: ${({ theme }) => theme.colors.gray7};
  `,
};

export default MySaveItem;
