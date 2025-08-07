import { RxCross1 } from "react-icons/rx";
import CartProduct from "./CartProduct";
import { useCartContext } from "../context/cartContext";

const Cart = ({ setShowCart }: any) => {
  const { product } = useCartContext();

  return (
    <div
      onClick={() => setShowCart(false)}
      className="fixed inset-0 z-50 bg-black/30"
    >
      <div
        className="max-w-[400px] w-full h-full bg-white absolute right-0 top-0 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <RxCross1
          className="absolute right-0 top-0 m-6 text-[24px] cursor-pointer"
          onClick={() => setShowCart(false)}
        />
        <h3 className="pt-6 text-lg font-medium text-gray-600 uppercase">
          Your cart
        </h3>

        <div className="mt-6">
          {product?.map((el: any) => (
            <CartProduct
              key={el.name}
              img={el.img}
              name={el.name}
              price={el.price}
            />
          ))}
        </div>

        <button className="bg-accent text-white text-center w-full rounded-3xl py-2 hover:bg-accentDark mt-4">
          View Cart
        </button>
        <button className="bg-accent text-white text-center w-full rounded-3xl py-2 hover:bg-accentDark mt-2">
          CheckOut
        </button>
      </div>
    </div>
  );
};

export default Cart;
