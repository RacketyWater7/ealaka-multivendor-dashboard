import React, { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#09276a");
  const [secondaryColor, setSecondaryColor] = useState("#8394ae");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [user, setUser] = useState(null);

  //////////////////////////////////////////// AUTHENTICATION ////////////////////////////////////////////

  useEffect(() => checkUserLoggedIn(), []);

  // Login user
  const login = async (/*{ email: identifier, password }*/) => {
    setUser("user");
    // const res = await fetch(`${URL}/api/login`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ identifier, password }),
    // });

    // const data = await res.json();
    // if (res.ok) {
    //   setUser(data.user);
    //   router.push("/account/dashboard");
    // } else {
    //   setError(data.message);
    //   setError(null);
    // }
  };
  // Logout user
  const logout = async () => {
    setUser(null);
    // const res = await fetch(`${NEXT_URL}/api/logout`, {
    //   method: "POST",
    // });
    // if (res.ok) {
    //   setUser(null);
    //   router.push("/");
    // }
  };

  // Check if user is logged in
  const checkUserLoggedIn = async (/*user*/) => {
    // const res = await fetch(`${URL}/api/user`);
    // const data = await res.json();
    // if (res.ok) {
    //   setUser(data.user);
    // } else {
    //   setUser(null);
    // }
  };

  //////////////////////////////////////////////// Theme Settings ////////////////////////////////////////////////
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  };

  const setSecondColor = (color) => {
    setSecondaryColor(color);
    localStorage.setItem("secondColor", color);
  };

  const handleClick = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: true });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
      value={{
        user,
        login,
        logout,
        currentColor,
        secondaryColor,
        setSecondColor,
        currentMode,
        activeMenu,
        screenSize,
        setScreenSize,
        handleClick,
        isClicked,
        initialState,
        setIsClicked,
        setActiveMenu,
        setCurrentColor,
        setCurrentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
