import React from "react";

import mainLogo from "../../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isError, setIsError] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validatePassword = () => {
    if (password.length < 8) {
      setIsError(true);
      setMessage("Password must be at least 8 characters long.");
      return false;
    }
    return true;
  };

  const Auth = (e: any) => {
    e.preventDefault();
    if (validatePassword()) {
      setIsError(false);
      setMessage("");
      navigate("/overview");
    }
  };

  return (
    <section className="h-screen bg-background tracking-wide">
      <div className="flex items-center justify-center h-full">
        {/* LOGIN CONTAINER */}
        <div className="w-full max-w-sm bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
          {/* UPPER SECTION */}
          <div className="flex flex-col justify-center items-center mt-2">
            <img
              className="flex"
              src={mainLogo}
              alt="logo"
              width={75}
              height={75}
            />
            <h2 className="flex text-[#c1c3cc] font-semibold text-lg">
              Dashboard Kit
            </h2>
          </div>
          {/* BELOW SECTION */}
          <div className="my-8">
            <h1 className="text-2xl text-center font-bold">
              Log In to Dashboard Kit
            </h1>
            <h2 className="text-sm text-semibold text-gray-400 text-center my-2 tracking-normal">
              Enter your email and password below
            </h2>
          </div>
          {/* FORM SECTION */}
          <form onSubmit={Auth} className="mt-12">
            {/* ERROR MESSAGE */}
            {isError && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                <span className="block sm:inline">{message}</span>
              </div>
            )}
            {/* EMAIL */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-400 text-sm font-semibold mb-2"
              >
                EMAIL
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                placeholder="Email address"
                className="appearance-none border rounded-lg w-full py-3 px-4 
                text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                bg-[#fcfdfe]"
                required
              />
            </div>
            {/* PASSWORD */}
            <div className="mb-6 relative">
              <div className="flex flex-row justify-between items-center">
                <label
                  htmlFor="password"
                  className="block text-gray-400 text-sm font-semibold mb-2"
                >
                  PASSWORD
                </label>
                <p className="text-xs text-gray-400 font-semibold cursor-pointer">
                  Forgot password?
                </p>
              </div>

              <input
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                className="appearance-none border rounded-lg w-full py-3 px-4 
                text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                bg-[#fcfdfe]"
                required
              />
              <div className="absolute inset-y-0 right-2 top-6 flex items-center pr-2">
                {showPassword ? (
                  <FaEyeSlash
                    className="fill-gray-400 cursor-pointer"
                    size={18}
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <FaEye
                    className="fill-gray-400 cursor-pointer"
                    size={18}
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>
            </div>
            {/* BUTTON COMPONENT */}
            <div className="flex flex-row items-center justify-between w-full">
              <button
                type="submit"
                className={`w-full flex text-sm bg-primary hover:bg-blue-700 text-white py-4 px-4 rounded-lg focus:outline-none focus:shadow-outline justify-center ${
                  isLoading && "cursor-not-allowed opacity-50"
                }`}
                disabled={isLoading}
              >
                Log In
              </button>
            </div>
          </form>
          {/* BOTTOM SECTION */}
          <div className="flex flex-row mb-2 mt-8 space-x-1 justify-center text-sm font-semibold">
            <p className="text-gray-400">Don't have an account? </p>
            <NavLink to="/register">
              <p className="text-primary">Sign up</p>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
