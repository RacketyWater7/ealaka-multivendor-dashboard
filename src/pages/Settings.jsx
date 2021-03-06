import React, { useRef } from "react";
// import { FormValidator } from '@syncfusion/ej2-inputs';
import { Link } from "react-router-dom";

import { useStateContext } from "../contexts/ContextProvider";
import { Button, Header } from "../components";

// let formObject;

// follow the below link to implement the form validations:
// https://ej2.syncfusion.com/react/documentation/form-validator/react-functional-component/

const Settings = () => {
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const imageRef = useRef(null);
  const { currentColor } = useStateContext();

  return (
    <div className="ml-2 mr-2 md:mr-4 md:ml-4 md:mt-4 mt-24 p-2 md:pl-4 md:pr-4 md:pt-4 bg-white rounded-3xl h-full">
      <Header
        category="Using this page you can edit and change your credentials."
        title="Settings"
      />
      {/* make a div with dropshadow blur 9 */}
      <div
        style={{ height: "80vh" }}
        className="bg-white w-full md:mr-2 md:ml-2 md:mt-2 border-1 pl-4 pt-6"
      >
        <form className="ml-4">
          <p
            style={{
              color: `${currentColor}`,
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            Profile Picture
          </p>
          <label
            htmlFor="file_upload"
            style={{ height: "190px", width: "260px" }}
            className="flex justify-center cursor-pointer relative right-3"
          >
            <div
              style={{ height: "100%", width: "100%" }}
              className="  border-gray-500 shadow-xl hover:shadow-2xl relative rounded-md"
            >
              <div className="absolute left-24 top-12 text-gray-300 text-8xl">
                +
              </div>
            </div>
            <input
              ref={imageRef}
              id="file_upload"
              style={{ display: "none" }}
              type="file"
            />
          </label>
          <div className="flex mt-8 gap-5">
            <div className="flex flex-col">
              <p
                style={{
                  color: `${currentColor}`,
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                Name
              </p>
              <input
                ref={nameRef}
                type="text"
                placeholder="David"
                style={{ border: "1px solid #D4D4EC" }}
                className="w-64 h-12 mt-2 p-2"
              />
            </div>
            <div className="flex flex-col">
              <p
                style={{
                  color: `${currentColor}`,
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                Password
              </p>
              <input
                ref={passwordRef}
                type="password"
                placeholder="********"
                style={{ border: "1px solid #D4D4EC" }}
                className="w-64 h-12 mt-2 p-2"
              />
            </div>
            <div className="flex flex-col">
              <p
                style={{
                  color: `${currentColor}`,
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                Email
              </p>
              <input
                ref={emailRef}
                type="email"
                placeholder="david@abc.com"
                style={{ border: "1px solid #D4D4EC" }}
                className="w-64 h-12 mt-2 p-2"
              />
            </div>
          </div>
          <div className="flex mt-8 flex-col">
            <div className="flex flex-col">
              <p
                style={{
                  color: `${currentColor}`,
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                Phone
              </p>
              <input
                ref={phoneRef}
                type="number"
                style={{ border: "1px solid #D4D4EC" }}
                className="w-64 h-12 mt-2 p-2"
                placeholder="0800 - 2342 - 2343"
              />
            </div>
          </div>
          <Link to="/employees">
            <Button
              additionClasses="mt-8"
              height={10}
              bgColor="#E4E7EF"
              bold="bold"
              color={currentColor}
              width={40}
              text="Save"
              cssWidth="150px"
              size={14}
            />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Settings;
