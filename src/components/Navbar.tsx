import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineEye,
  AiFillEye,
} from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import CartCountBadge from "./CartCountBadge";
import { useState } from "react";

const Navbar = ({ setShowCart }: any) => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [activeTab, setActiveTab] = useState("login");

  const [loginEmail, setLoginEmail] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isValidEmail = (email: string) =>
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);

  return (
    <>
      <div className="sticky top-0 bg-white z-10">
        <div className="container hidden lg:block">
          <div className="flex justify-between items-center p-8">
            <h1 className="text-4xl font-medium">
              Pasa<span className="text-orange-400 font-bold">Buy</span>
            </h1>

            <div className="relative group w-[250px] hover:w-[500px] transition-all duration-300 max-w-full">
              <input
                type="text"
                placeholder="Search"
                className="bg-[#f2f3f5] border-2 border-transparent outline-none 
      px-6 py-3 rounded-[30px] w-full pr-12 
      transition-all duration-300 
      text-gray-500 placeholder:text-gray-400 
      group-hover:text-accent group-hover:placeholder:text-accent 
      focus:border-accent focus:text-accent focus:placeholder:text-accent"
              />
              <BsSearch
                size={20}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-accent group-focus-within:text-accent transition-colors duration-300"
              />
            </div>

            <div className="flex gap-4">
              <div
                className="icon_wrapper cursor-pointer hover:text-accent focus:text-accent"
                onClick={() => setShowAuthModal(true)}
                tabIndex={0}
              >
                <AiOutlineUser />
              </div>
              <div
                className="icon_wrapper relative cursor-pointer hover:text-accent focus:text-accent"
                onClick={() => setShowCart(true)}
                tabIndex={0}
              >
                <AiOutlineShoppingCart />
                <CartCountBadge size="w-[25px] h-[25px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-[90%] max-w-md p-6 rounded-2xl shadow-lg relative">
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-2xl"
              onClick={() => setShowAuthModal(false)}
            >
              &times;
            </button>

            {/* Tabs */}
            <div className="flex justify-center mb-4">
              <button
                className={`px-4 py-2 rounded-l-full font-medium ${
                  activeTab === "login"
                    ? "bg-orange-400 text-white"
                    : "bg-gray-100"
                }`}
                onClick={() => setActiveTab("login")}
              >
                Login
              </button>
              <button
                className={`px-4 py-2 rounded-r-full font-medium ${
                  activeTab === "signup"
                    ? "bg-orange-400 text-white"
                    : "bg-gray-100"
                }`}
                onClick={() => setActiveTab("signup")}
              >
                Sign Up
              </button>
            </div>

            {/* Login Tab */}
            {activeTab === "login" ? (
              <form className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="border border-gray-300 px-4 py-2 rounded-lg"
                />

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="border border-gray-300 px-4 py-2 rounded-lg w-full"
                  />
                  <span
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <AiFillEye /> : <AiOutlineEye />}
                  </span>
                </div>

                <button
                  className={`py-2 rounded-lg text-white transition ${
                    isValidEmail(loginEmail)
                      ? "bg-orange-400 hover:bg-orange-500"
                      : "bg-gray-300 cursor-not-allowed"
                  }`}
                  disabled={!isValidEmail(loginEmail)}
                >
                  Login
                </button>
              </form>
            ) : (
              // Signup Tab
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border border-gray-300 px-4 py-2 rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  className="border border-gray-300 px-4 py-2 rounded-lg"
                />
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="border border-gray-300 px-4 py-2 rounded-lg w-full"
                  />
                  <span
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <AiFillEye /> : <AiOutlineEye />}
                  </span>
                </div>

                <button
                  className={`py-2 rounded-lg text-white transition ${
                    isValidEmail(signupEmail)
                      ? "bg-orange-400 hover:bg-orange-500"
                      : "bg-gray-300 cursor-not-allowed"
                  }`}
                  disabled={!isValidEmail(signupEmail)}
                >
                  Sign Up
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
