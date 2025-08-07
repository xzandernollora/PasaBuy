import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import CartCountBadge from "./CartCountBadge";

const Navbar = ({ setShowCart }: any) => {
  return (
    <div className="sticky top-0 bg-white z-10">
      <div className="container hidden lg:block">
        <div className="flex justify-between items-center p-8">
          <h1 className="text-4xl font-medium">
            Pasa<span className="text-orange-400 font-bold">Buy</span>
          </h1>

          <div className="relative w-full max-w-[500px]">
            <input
              type="text"
              placeholder="Search"
              className="bg-[#f2f3f5] border-none outline-none 
              px-6 py-3 rounded-[30px] w-full pr-12"
            />
            <BsSearch
              size={20}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl"
            />
          </div>
          <div className="flex gap-4">
            <div className="icon_wrapper">
              <AiOutlineUser />
            </div>
            <div
              className="icon_wrapper relative cursor-pointer"
              onClick={() => setShowCart(true)}
            >
              <AiOutlineShoppingCart />
              <CartCountBadge size="w-[25px] h-[25px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
