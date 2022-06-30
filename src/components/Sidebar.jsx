import React from "react";
import { Link, NavLink } from "react-router-dom";
// import { SiInstacart } from 'react-icons/si';
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import { FiLogOut } from "react-icons/fi";

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize, logout } =
    useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 font-bold rounded-lg text-slate-500  text-md m-2 hover:text-blue-900 cursor-default";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 font-bold rounded-lg text-md text-slate-500 dark:text-gray-200 dark:hover:text-black hover:text-blue-900 m-2";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 z-50">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <span>
                <img
                  src="/images/logo.png"
                  alt="logo"
                  style={{ width: "170px", height: "67" }}
                />
              </span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10 ">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link, i) => (
                  <NavLink
                    to={
                      link.name === "manage employees"
                        ? "/employees"
                        : link.name === "manage zone"
                        ? "/zones"
                        : link.name === "manage categories"
                        ? "/categories"
                        : link.name === "manage attributes"
                        ? "/attributes"
                        : link.name === "manage promotions"
                        ? "/promotions"
                        : link.name === "logout"
                        ? "/login"
                        : `/${link.name.split(" ").join("")}`
                    }
                    key={i}
                    onClick={handleCloseSideBar}
                    // style={({ isActive }) => ({
                    //   backgroundColor: isActive ? "" : '',
                    // })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize ">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
            <span
              onClick={logout}
              className="flex items-center gap-5 pl-4 pt-3 pb-2.5 font-bold rounded-lg text-md text-slate-500 dark:text-gray-200 dark:hover:text-black hover:text-blue-900 m-2 cursor-pointer"
            >
              <FiLogOut /> Logout
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
