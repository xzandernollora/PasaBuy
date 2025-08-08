import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import CartProduct from "./CartProduct";
import { useCartContext } from "../context/cartContext";
import AuthModal from "./AuthModal"; // ✅ import modal

const Cart = ({ setShowCart }: any) => {
  const { product, removeFromCart } = useCartContext();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [emptyMessage, setEmptyMessage] = useState(false); // 🔔 for empty cart msg

  const isLoggedIn = false; // 🔒 dummy auth flag

  const handleCheckout = () => {
    if (!product || product.length === 0) {
      setEmptyMessage(true);
      return;
    }

    if (!isLoggedIn) {
      alert("You need to login first");
      setShowAuthModal(true);
      return;
    }

    // ✅ proceed to checkout here
  };

  return (
    <>
      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}

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

          <div className="mt-6 space-y-3">
            {product?.length > 0 ? (
              product.map((el: any) => (
                <CartProduct
                  key={el.name}
                  img={el.img}
                  name={el.name}
                  price={el.price}
                  onRemove={removeFromCart}
                />
              ))
            ) : (
              <div className="text-center text-gray-500 text-sm py-10">
                🛒 Your cart is empty.
              </div>
            )}

            {emptyMessage && (
              <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-3 rounded-md text-sm">
                ⚠️ No items in your cart. Add something before checking out.
              </div>
            )}
          </div>

          <button className="bg-orange-100 text-orange-800 w-full rounded-3xl py-2 mt-4">
            Continue Shopping
          </button>

          <button
            className="bg-accent text-white text-center w-full rounded-3xl py-2 hover:bg-accentDark mt-2"
            onClick={handleCheckout}
          >
            CheckOut
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
