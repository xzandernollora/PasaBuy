import { AiOutlineEye, AiFillEye } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

interface AuthModalProps {
  onClose: () => void;
}

const AuthModal = ({ onClose }: AuthModalProps) => {
  const [activeTab, setActiveTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [signupEmail, setSignupEmail] = useState("");

  const isValidEmail = (email: string) =>
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[999]">
      <div className="bg-white w-[90%] max-w-md p-6 rounded-2xl shadow-lg relative">
        <button
          className="absolute top-2 right-3 text-gray-500 hover:text-black text-2xl"
          onClick={onClose}
        >
          <RxCross1 />
        </button>

        <div className="flex justify-center mb-4">
          <button
            className={`px-4 py-2 rounded-l-full font-medium ${
              activeTab === "login" ? "bg-orange-400 text-white" : "bg-gray-100"
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
  );
};

export default AuthModal;
