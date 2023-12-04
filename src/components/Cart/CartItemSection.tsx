import CartItem from './CartItem';
import styled from 'styled-components';

const CartItemSection = () => {
  const dummyData = [
    {
      id: 1,
      name: '우리집고양이츄르',
      price: 2500,
      originalPrice: 4000,
    },
    {
      id: 1,
      name: '우리집고양이츄르',
      price: 2500,
      originalPrice: 4000,
    },
    {
      id: 1,
      name: '우리집고양이츄르',
      price: 2500,
      originalPrice: 4000,
    },
    {
      id: 1,
      name: '우리집고양이츄르',
      price: 2500,
      originalPrice: 4000,
    },
    {
      id: 1,
      name: '우리집고양이츄르',
      price: 2500,
      originalPrice: 4000,
    },
    {
      id: 1,
      name: '우리집고양이츄르',
      price: 2500,
      originalPrice: 4000,
    },
    {
      id: 1,
      name: '우리집고양이츄르',
      price: 2500,
      originalPrice: 4000,
    },
  ];

  return (
    <St.ItemSection>
      {dummyData.map((item, idx) => (
        <CartItem
          key={idx}
          id={item.id}
          name={item.name}
          price={item.price}
          originalPrice={item.originalPrice}
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
    height: calc(100vh - 30.2rem);
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
};

export default CartItemSection;
