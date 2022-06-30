import React, { useRef } from "react";
// import { FormValidator } from '@syncfusion/ej2-inputs';
import { Link } from "react-router-dom";

import { useStateContext } from "../../contexts/ContextProvider";
import { Button, Header } from "../../components";

// let formObject;

// follow the below link to implement the form validations:
// https://ej2.syncfusion.com/react/documentation/form-validator/react-functional-component/

const AddDeliveryGuy = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const typeRef = useRef(null);
  const vehicleRef = useRef(null);
  const vehicleNumberRef = useRef(null);
  const drivingLicenseRef = useRef(null);
  const businessZoneRef = useRef(null);
  const walletRef = useRef(null);
  const { currentColor } = useStateContext();
  return (
    <div className="ml-2 mr-2 md:mr-4 md:ml-4 md:mt-4 mt-24 p-2 md:pl-4 md:pr-4 md:pt-4 bg-white rounded-3xl h-full">
      <Header
        category="Check all the delivery guys in your system."
        title="Delivery Guys"
      />
      {/* make a div with dropshadow blur 9 */}
      <div
        style={{ height: "110vh" }}
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
            Delivery Guy Image
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
          <div className="flex mt-8 flex-col">
            <p
              style={{
                color: `${currentColor}`,
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Type *
            </p>
            <span className="flex">
              <select
                ref={typeRef}
                className="form-select
                appearance-none
                block
                w-64
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
                aria-label="Default select example"
              >
                <option value="0">Permanent</option>
                <option selected value="1">
                  Contract
                </option>
              </select>
            </span>
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
          <div className="flex mt-8 gap-5">
            <div className="flex flex-col">
              <p
                style={{
                  color: `${currentColor}`,
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                Vehicle
              </p>
              <input
                ref={vehicleRef}
                type="text"
                placeholder="Bike"
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
                Vehicle Number
              </p>
              <input
                ref={vehicleNumberRef}
                type="email"
                placeholder="EV-234-234"
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
                Driving Licenses
              </p>
              <label className="flex" htmlFor="driving_license">
                <input
                  id="driving_license"
                  ref={drivingLicenseRef}
                  type="file"
                  style={{ border: "1px solid #D4D4EC" }}
                  className="w-64 h-12 mt-2 p-2"
                  placeholder="0800 - 2342 - 2343"
                />
                <div className="text-slate-300 w-64 border-gray-300 border-1 h-12 mt-2 p-2">
                  License.jpg
                </div>
                <Button
                  onClick={() => {
                    drivingLicenseRef.current.click();
                  }}
                  additionClasses="mt-3 ml-3"
                  height={10}
                  bgColor="#E4E7EF"
                  bold="bold"
                  color={currentColor}
                  width={40}
                  text="Browse"
                  cssWidth="150px"
                  size={14}
                />
              </label>
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
                Business Zone
              </p>
              <span className="flex">
                <select
                  ref={businessZoneRef}
                  className="form-select
                  appearance-none
                  block
                  w-64
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
                  aria-label="Business Zone"
                >
                  <option value="0">Zone 1</option>
                  <option selected value="1">
                    Zone 2
                  </option>
                </select>
              </span>
            </div>
            <div className="flex flex-col ">
              <p
                style={{
                  color: `${currentColor}`,
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                Wallet
              </p>
              <input
                ref={walletRef}
                type="number"
                placeholder="$ 0"
                style={{ border: "1px solid #D4D4EC" }}
                className="w-64 h-12 mt-2 p-2"
              />
            </div>
          </div>
          <Link to="/deliveryguys">
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

export default AddDeliveryGuy;
