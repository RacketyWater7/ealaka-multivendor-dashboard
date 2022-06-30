import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
// import { FiShoppingCart } from 'react-icons/fi';
// import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      // onClick={() => {
      //   if (isClicked.notification && title === "Notification") {
      //     setIsClicked(!"notification");
      //   }
      //   customFunc();
      // }}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);
// const MenuButton = ({ title, customFunc, icon, color, dotColor }) => (
//   // <TooltipComponent content={title} position="BottomCenter">
//     <button
//       type="button"
//       onClick={() => customFunc()}
//       style={{ color }}
//       className="relative text-xl rounded-full p-3 hover:bg-light-gray lg:invisible md:invisible"
//     >
//       <span
//         style={{ background: dotColor }}
//         className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
//       />
//       {icon}
//     </button>
//   // </TooltipComponent>
// );

const Navbar = () => {
  const navigate = useNavigate();
  const {
    user,
    currentColor,
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    setScreenSize,
    screenSize,
    setIsClicked,
  } = useStateContext();
  const [showNavButton, setShowNavButton] = React.useState(false);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [setScreenSize]);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
      setShowNavButton(true);
    } else {
      setActiveMenu(true);
      setShowNavButton(false);
    }
  }, [screenSize, setActiveMenu]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      {showNavButton ? (
        <NavButton
          title="Menu"
          customFunc={handleActiveMenu}
          color={currentColor}
          icon={<AiOutlineMenu />}
        />
      ) : (
        <span> </span>
      )}
      <div className="flex">
        {/* <NavButton title="Cart" customFunc={() => handleClick('cart')} color={currentColor} icon={<FiShoppingCart />} />
        <NavButton title="Chat" dotColor="#03C9D7" customFunc={() => handleClick('chat')} color={currentColor} icon={<BsChatLeft />} /> */}
        {!user && (
          <span className="text-indigo-900 select-none">
            Log in to see your notifications
          </span>
        )}
        {user && (
          <>
            <span className="mt-2"> Notifications </span>{" "}
            <NavButton
              title="Notification"
              dotColor="rgb(254, 201, 15)"
              customFunc={() => {
                if (isClicked["notification"] === true) {
                  setIsClicked(!isClicked["notification"]);
                } else {
                  handleClick("notification");
                }
              }}
              color={currentColor}
              icon={<RiNotification3Line />}
            />
            <TooltipComponent content="Profile" position="BottomCenter">
              <div
                className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
                onClick={() => {
                  if (isClicked["userProfile"] === true) {
                    setIsClicked(!isClicked["userProfile"]);
                  } else {
                    handleClick("userProfile");
                  }
                }}
              >
                <img
                  className="rounded-full w-8 h-8"
                  src={avatar}
                  alt="user-profile"
                />
                <p>
                  <span className="text-gray-400 text-14 select-none">Hi,</span>{" "}
                  <span className="text-gray-400 font-bold ml-1 text-14 select-none">
                    Michael
                  </span>
                </p>
                <MdKeyboardArrowDown className="text-gray-400 text-14" />
              </div>
            </TooltipComponent>
          </>
        )}
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
