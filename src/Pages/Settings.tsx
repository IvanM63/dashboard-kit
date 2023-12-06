import React, { useEffect } from "react";
import Layout from "./Layout";

import { FaMoon, FaSun } from "react-icons/fa6";

const Settings = () => {
  const isDarkMode = () => {
    return document.documentElement.classList.contains("dark");
  };

  const [darkMode, setDarkMode] = React.useState(isDarkMode() ? true : false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Layout>
      <div className="flex flex-col px-8 py-2 h-screen">
        <div
          className="rounded-lg border-2 border-gray-200 
        h-screen  bg-white dark:bg-gray-800 dark:border-gray-950"
        >
          {/* Title */}
          <div className="flex flex-row items-center justify-between p-8">
            <h1 className="font-semibold text-lg dark:text-gray-100">
              List of setting
            </h1>
          </div>
          {/* Setting Content */}
          <div className="flex flex-col justify-center px-8">
            <div className="flex flex-row items-center space-x-2">
              <h1 className="flex text-lg font-semibold dark:text-gray-100 ">
                Dark Mode
              </h1>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center hover:dark:bg-white hover:dark:text-black hover:bg-slate-100 rounded-lg p-2"
              >
                {darkMode === false ? (
                  <FaSun width={20} height={20} />
                ) : (
                  <FaMoon
                    className="fill-gray-100 hover:dark:fill-black"
                    width={20}
                    height={20}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
