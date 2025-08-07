import React from "react";
import { useCartContext } from "../context/cartContext";

interface PropsType {
  size: string;
}

const CartCountBadge: React.FC<PropsType> = ({ size }) => {
  const { product } = useCartContext();
  return (
    <div
      className={`absolute bg-orange-600 text-white text-[14px] ${size} -right-3 -top-1 rounded-full grid place-items-center`}
    >
      {product.length}
    </div>
  );
};

export default CartCountBadge;
