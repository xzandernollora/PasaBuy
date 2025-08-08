import { AiFillStar, AiOutlineStar, AiOutlineShopping } from "react-icons/ai";
import { useCartContext } from "../context/cartContext";

interface propsType {
  img: string;
  name: string;
  price: string;
  rating: number;
}

const ProductCard: React.FC<propsType> = ({ img, name, price, rating }) => {
  const { addToCart } = useCartContext();

  const addProductToCart = () => {
    // toast.success("Added to Cart!");
    addToCart({ img, name, price });
  };
  return (
    <div className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg relative">
      <img
        src={img}
        alt={name}
        className="h-[400px] w-full object-cover rounded-t-lg"
      />

      <div className="space-y-2 relative p-4">
        <div className="text-yellow-400 flex gap-[2px] text-[20px]">
          {Array.from({ length: 5 }).map((_, index) =>
            index < rating ? (
              <AiFillStar key={index} />
            ) : (
              <AiOutlineStar key={index} />
            )
          )}
        </div>
        <h3 className="font-medium">{name}</h3>
        <h3 className="text-2xl font-medium text-red-600">{price}</h3>

        <button
          className="absolute -top-4 right-2 bg-accent text-white text-[28px] w-[50px] h-[50px] rounded-full grid place-items-center cursor-pointer"
          onClick={addProductToCart}
        >
          <AiOutlineShopping />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
