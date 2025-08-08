import { createContext, useState, useContext, type ReactNode } from "react";

interface ICartContext {
  product: any[];
  addToCart: (cart: any) => void;
  removeFromCart: (name: string) => void; // ✅
}

const CartContext = createContext<ICartContext>({
  product: [],
  addToCart: () => {},
  removeFromCart: () => {}, // ✅ add this missing function
});

interface ICartContextProvider {
  children: ReactNode;
}
export const CartContextProvider = ({ children }: ICartContextProvider) => {
  const [product, setProduct] = useState<any>([]);

  const addToCart = (cart: any) => {
    setProduct((prevCart: any) => [...prevCart, cart]);
  };

  const removeFromCart = (name: string) => {
    setProduct((prevCart: any) =>
      prevCart.filter((item: any) => item.name !== name)
    );
  };

  return (
    <CartContext.Provider value={{ product, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  return context;
};
