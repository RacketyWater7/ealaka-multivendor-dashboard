import React, { useRef, useState } from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import Button from "../Button";

const AddShop = ({ setShop }) => {
  const { currentColor } = useStateContext();
  const categoryRef = useRef();
  const shopNameRef = useRef();
  const descriptionRef = useRef();
  const zoneRef = useRef();
  const addressRef = useRef();
  const checkboxRef = useRef(null);
  const [checkbox, setCheckbox] = useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState("Fruits");

  return (
    <>
      <form className="ml-4">
        <p
          style={{
            color: `${currentColor}`,
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          Shop Logo
        </p>
        <label
          htmlFor="file_upload"
          style={{ height: "200px", width: "320px" }}
          className="flex justify-center cursor-pointer"
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
          <div className="flex flex-col ">
            <p
              style={{
                color: `${currentColor}`,
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Shop Name
            </p>
            <input
              ref={shopNameRef}
              type="text"
              placeholder="H. E Butt Grocery"
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
              Categories
            </p>
            <span className="flex">
              <select
                ref={categoryRef}
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
                  transition
                  ease-in-out
                  mt-2
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Business Zone"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="Fruits">Fruits</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Food Stuff">Food Stuff</option>
                <option value="Kids Accessories">Kids Accessories</option>
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
              Zone
            </p>
            <input
              ref={zoneRef}
              type="text"
              placeholder="Zone 1"
              style={{ border: "1px solid #D4D4EC" }}
              className="w-64 h-12 mt-2 p-2"
            />
          </div>
        </div>
        <div className="mt-8">
          <div className="flex flex-col ">
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
              placeholder="Dam W Farez Facing VIP, Tripoli, Lebanon"
              style={{ border: "1px solid #D4D4EC" }}
              className="w-64 h-12 mt-2 p-2"
            />
          </div>
        </div>
        <div className="flex flex-col mt-8 ">
          <p
            style={{
              color: `${currentColor}`,
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            Description
          </p>
          <textarea
            ref={descriptionRef}
            style={{ border: "1px solid #D4D4EC" }}
            className="w-[600px] h-60 mt-2 p-2"
          />
          <div className="mt-8">
            {/* add a checkbox with name Deactivated  */}
            <div className="flex items-center">
              <input
                ref={checkboxRef}
                type="checkbox"
                id="checkbox"
                className="w-4 h-4 mt-2 p-2"
                onChange={() => {
                  setCheckbox(!checkbox);
                }}
                checked={checkbox}
              />{" "}
              <label
                className="ml-2 mt-2"
                htmlFor="checkbox"
                style={{
                  color: `${currentColor}`,
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                {checkbox ? "Active" : "Inactive"}
              </label>
            </div>
          </div>
          <Button
            additionClasses="mt-8 mb-9"
            height={10}
            bgColor="#E4E7EF"
            bold="bold"
            color={currentColor}
            width={40}
            text="Save"
            cssWidth="150px"
            size={14}
            onClick={() => setShop(false)}
          />
        </div>
      </form>
    </>
  );
};

export default AddShop;
