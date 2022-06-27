import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { FiSettings } from 'react-icons/fi';
// import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Suppliers,
  DeliveryGuys,
  Orders,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorMapping,
} from "./pages";
import "./App.css";

import { useStateContext } from "./contexts/ContextProvider";
import AddSupplier from "./pages/SupplierSubPages/AddSupplier";
import AddDeliveryGuy from "./pages/DeliveryGuysSubPages/AddDeliveryGuy";
import AddEmployee from "./pages/EmployeesSubPages/AddEmployee";
import Zones from "./pages/Zones";
import AddZone from "./pages/ZonesSubPages/AddZone";
import MainBanner from "./pages/MainBanner";
import AddMainBanner from "./pages/MainBannerSubPages/AddMainBanner";
import Settings from "./pages/Settings";
import Categories from "./pages/Categories";
import AddCategory from "./pages/CategoriesSubPages/AddCategory";
import Attributes from "./pages/Attributes";
import AddAttribute from "./pages/AttributesSubPages/AddAttribute";

const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    themeSettings,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === "Dark" ? "dark h-full" : "h-full"}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg h-full">
          {/* <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

            </TooltipComponent>
          </div> */}
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full h-full  "
                : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 h-full "
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div className="h-full">
              {themeSettings && <ThemeSettings />}

              <Routes>
                {/* dashboard  */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/dashboard" element={<Ecommerce />} />
                {/* pages  */}
                <Route path="/orders" element={<Orders />} />

                <Route path="/customers" element={<Customers />} />

                <Route path="/suppliers" element={<Suppliers />} />
                <Route path="/suppliers/add" element={<AddSupplier />} />

                <Route path="/deliveryguys" element={<DeliveryGuys />} />
                <Route path="/deliveryguys/add" element={<AddDeliveryGuy />} />

                <Route path="/employees" element={<Employees />} />
                <Route path="/employees/add" element={<AddEmployee />} />

                <Route path="/zones" element={<Zones />} />
                <Route path="/zones/add" element={<AddZone />} />

                <Route path="/mainbanner" element={<MainBanner />} />
                <Route path="/mainbanner/add" element={<AddMainBanner />} />

                <Route path="/categories" element={<Categories />} />
                <Route path="/categories/add" element={<AddCategory />} />

                <Route path="/attributes" element={<Attributes />} />
                <Route path="/attributes/add" element={<AddAttribute />} />

                <Route path="/settings" element={<Settings />} />
                {/* charts  */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
            {/* <Footer /> */}
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
