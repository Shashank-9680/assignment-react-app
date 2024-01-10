import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar, Sidebar } from "./components";
import {
  Home,
  Orders,
  Delivery,
  Marketing,
  Analytics,
  Tools,
  Discounts,
  Audience,
  Appearence,
  Plugins,
} from "./pages";
import "./App.css";

import { useStateContext } from "./contexts/ContextProvider";
import Dashboard from "./pages/Payement";

const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu } =
    useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="flex">
        {/* {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )} */}
        <div className="w-1/5">
          <Sidebar />
        </div>
        <div className={"bg-main-bg min-h-screen w-4/5"}>
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
            <Navbar />
          </div>
          <div>
            <Routes>
              {/* dashboard  */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/payments" element={<Dashboard />} />

              {/* pages  */}
              <Route path="/home" element={<Home />} />
              <Route path="/orders" element={<Orders />} />

              {/* apps  */}
              <Route path="/delivery" element={<Delivery />} />
              <Route path="/marketing" element={<Marketing />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/discounts" element={<Discounts />} />
              <Route path="/audience" element={<Audience />} />
              <Route path="/appearence" element={<Appearence />} />
              <Route path="/plugins" element={<Plugins />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
