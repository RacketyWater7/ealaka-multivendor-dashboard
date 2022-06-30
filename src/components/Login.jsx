import React from "react";
import Button from "./Button";
import { useStateContext } from "../contexts/ContextProvider";
import { useNavigate } from "react-router-dom";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiUser } from "react-icons/bi";

const Login = () => {
  const { currentColor, login } = useStateContext();
  const navigate = useNavigate();

  return (
    <div className="h-[90vh] ">
      <div className="flex items-center justify-center h-full">
        <div className="flex flex-col border-1 h-[550px] w-[500px] rounded-md shadow-lg relative -left-52 bg-slate-100">
          <div className="flex justify-center mt-10 pt-5">
            <img src="/images/logo.png" alt="Logo" />
          </div>
          <div className="flex-1 h-full p-3">
            <form>
              {" "}
              <div className="flex flex-col items-center justify-center pl-6 pr-6 pt-10 mt-6">
                <span className="flex  w-full">
                  <BiUser className="self-center border-1 w-[45px] h-[48px] relative border-l-gray-300 border-t-gray-300 border-b-gray-300 -bottom-1 left-[-0.7px] rounded-l-md text-indigo-900" />
                  <input
                    type="text"
                    placeholder="Username"
                    style={{ border: "1px solid #D4D4EC" }}
                    className="w-full h-12 mt-2 p-2 rounded-r-md outline-none focus:outline-none"
                  />
                </span>
                <span className="flex w-full">
                  <RiLockPasswordLine className="self-center border-1 border-l-gray-300 border-t-gray-300 border-b-gray-300 w-[45px] h-[48px] relative -bottom-1 left-[-0.7px] rounded-l-md text-indigo-900" />
                  <input
                    type="Password"
                    placeholder="Password"
                    style={{ border: "1px solid #D4D4EC" }}
                    className="w-full h-12 mt-2 p-2 rounded-r-md"
                  />
                </span>
                <Button
                  additionClasses="mt-[74px] inline-flex items-center justify-center"
                  height={14}
                  bgColor="#E4E7EF"
                  bold="bold"
                  color={currentColor}
                  width={40}
                  text="Login"
                  cssWidth="200px"
                  cssSize={"30px"}
                  onClick={() => {
                    login();
                    navigate("/dashboard");
                  }}
                />
              </div>{" "}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
