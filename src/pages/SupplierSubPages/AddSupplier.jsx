import React, { useRef } from "react";
// import { FormValidator } from '@syncfusion/ej2-inputs';
import { Link } from "react-router-dom";

import { useStateContext } from "../../contexts/ContextProvider";
import { Button, Header } from "../../components";

// let formObject;

// follow the below link to implement the form validations:
// https://ej2.syncfusion.com/react/documentation/form-validator/react-functional-component/

const AddSupplier = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const addressRef = useRef(null);
  const categoryRef = useRef(null);
  const zoneRadiusRef = useRef(null);
  const { currentColor } = useStateContext();
  return (
    <div className="ml-2 mr-2 md:mr-4 md:ml-4 md:mt-4 mt-24 p-2 md:pl-4 md:pr-4 md:pt-4 bg-white rounded-3xl h-full">
      <Header
        category="Check the details about the registered supplier."
        title="Supplier Profile"
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
            Supplier Image
          </p>
          <label
            htmlFor="file_upload"
            style={{ height: "200px", width: "320px" }}
            className="flex justify-center cursor-pointer relative right-3"
          >
            <div
              style={{ height: "100%", width: "100%" }}
              className="  border-gray-500 shadow-xl hover:shadow-2xl relative rounded-md"
            >
              <div className="absolute left-32 top-16 text-gray-300 text-8xl">
                +
              </div>
            </div>
            <input id="file_upload" style={{ display: "none" }} type="file" />
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
                className="w-80 h-12 mt-2 p-2"
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
                className="w-80 h-12 mt-2 p-2"
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
                Phone
              </p>
              <input
                ref={phoneRef}
                type="number"
                style={{ border: "1px solid #D4D4EC" }}
                className="w-80 h-12 mt-2 p-2"
                placeholder="0800 - 2342 - 2343"
              />
            </div>
          </div>
          <div className="flex mt-8 gap-5">
            <div className="flex flex-col">
              <p
                style={{
                  color: `${currentColor}`,
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                Categories
              </p>
              <span className="flex">
                <select
                  ref={categoryRef}
                  className="form-select
                  appearance-none
                  block
                  w-80
                  h-12
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding bg-no-repeat
                  border border-solid border-gray-300
                  duration-300
                  ease-in-out
                  mt-2
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Category"
                >
                  <option value="0" selected>
                    Vegitables
                  </option>
                  <option value="1">Fruits</option>
                </select>
              </span>
            </div>
            <div className="flex flex-col">
              <p
                style={{
                  color: `${currentColor}`,
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                Zone Radius
              </p>
              <span className="flex">
                <select
                  ref={zoneRadiusRef}
                  className="form-select
                  appearance-none
                  block
                  w-80
                  h-12
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding bg-no-repeat
                  border border-solid border-gray-300
                  duration-300
                  ease-in-out
                  mt-2
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Zone Radius"
                >
                  <option value="0" selected>
                    Zone 1
                  </option>
                  <option value="1">Zone 2</option>
                </select>
              </span>
            </div>
            <div className="flex flex-col">
              <p
                style={{
                  color: `${currentColor}`,
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                Business Address
              </p>
              <input
                ref={addressRef}
                type="text"
                style={{ border: "1px solid #D4D4EC" }}
                className="w-80 mt-2 p-2 h-12"
                placeholder="Street 4, main boulevard..."
              />
            </div>
          </div>
          <Link to="/suppliers">
            <Button
              additionClasses="mt-8"
              height={10}
              bgColor="#E4E7EF"
              bold="bold"
              color={currentColor}
              cssWidth="150px"
              text="Save"
              size={14}
            />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default AddSupplier;
