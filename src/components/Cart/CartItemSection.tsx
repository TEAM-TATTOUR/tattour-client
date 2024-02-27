import { CartItemProps } from '../../libs/hooks/useGetCartList';
import CartItem from './CartItem';
import styled from 'styled-components';

const CartItemSection = ({
  items,
  handleClickQuantityButton,
}: {
  items: CartItemProps[];
  handleClickQuantityButton: (price: number) => void;
}) => {
  return (
    <St.ItemSection>
      {items.map((item) => (
        <CartItem
          key={item.stickerId}
          id={item.id}
          name={item.name}
          price={item.discountPrice}
          originalPrice={item.price}
          mainImageUrl={item.mainImageUrl}
          count={item.count}
          handleClickQuantityButton={handleClickQuantityButton}
        />
      ))}
    </St.ItemSection>
  );
};

const St = {
  ItemSection: styled.section`
    padding-top: 5.6rem;
    padding-left: 2.2rem;
    padding-right: 2.2rem;
    height: calc(100dvh - 30.2rem);
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
};

export default CartItemSection;
