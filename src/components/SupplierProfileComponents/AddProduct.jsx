import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import Header from "../Header";
import Button from "../Button";

const AddProduct = () => {
  const navigate = useNavigate();
  const { currentColor } = useStateContext();
  const productTitleRef = useRef();
  const zoneRef = useRef();
  const priceRef = useRef();
  const shopNameRef = useRef();
  const categoryRef = useRef();
  const weightRef = useRef();
  const sizeRef = useRef();
  const promoCodeRef = useRef();
  const shopRef = useRef();
  const descriptionRef = useRef();
  const stockCheckboxRef = useRef();
  const promotionCheckboxRef = useRef();

  const [selectedZone, setSelectedZone] = useState("Zone 1");
  const [selectedCategory, setSelectedCategory] = useState("Vegetables");
  const [selectedPromoCode, setSelectedPromoCode] = useState("Spring Summer");
  const [selectedShop, setSelectedShop] = useState("H. E Butt Grocery");
  return (
    <div>
      <div className="flex justify-between ml-5">
        <Header
          category="Add new products in your profile."
          title="Supplier Profile"
          mb="1"
        />
      </div>
      <div className="m-3 ml-3 md:m-4 pt-8 min-h-[90vh] bg-white rounded-sm shadow-lg">
        <form className="ml-7">
          <p
            style={{
              color: `${currentColor}`,
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            Product Image
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
                Product Title
              </p>
              <input
                ref={productTitleRef}
                type="text"
                placeholder="Green Fresh Broccoli"
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
                Zone
              </p>
              <span className="flex">
                <select
                  ref={zoneRef}
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
                  value={selectedZone}
                  onChange={(e) => setSelectedZone(e.target.value)}
                >
                  <option value="Zone 1">Zone 1</option>
                  <option value="Zone 2">Zone 2</option>
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
                Price
              </p>
              <input
                ref={priceRef}
                type="number"
                pattern="[0-9]*"
                placeholder="$5.00"
                style={{ border: "1px solid #D4D4EC" }}
                className="w-64 h-12 mt-2 p-2"
              />
            </div>
          </div>
          <div className="flex mt-8 gap-5">
            <div className="flex flex-col ">
              <p
                style={{
                  color: `${currentColor}`,
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                SKU
              </p>
              <input
                ref={shopNameRef}
                type="text"
                placeholder="ALK356VEG"
                style={{ border: "1px solid #D4D4EC" }}
                className="w-64 h-12 mt-2 p-2 uppercase"
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
                  duration-300
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
                Weight
              </p>
              <input
                ref={weightRef}
                type="text"
                placeholder="500g"
                style={{ border: "1px solid #D4D4EC" }}
                className="w-64 h-12 mt-2 p-2"
              />
            </div>
          </div>
          <div className="flex mt-8 gap-5">
            <div className="flex flex-col ">
              <p
                style={{
                  color: `${currentColor}`,
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                Size
              </p>
              <input
                ref={sizeRef}
                type="text"
                placeholder="Large"
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
                Add Promo Code
              </p>
              <span className="flex">
                <select
                  ref={promoCodeRef}
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
                  value={selectedPromoCode}
                  onChange={(e) => setSelectedPromoCode(e.target.value)}
                >
                  <option value="Spring Summer">Spring Summer</option>
                  <option value="Blessed Friday">Blessed Friday</option>
                  <option value="White Winter">White Winter</option>
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
                Shop
              </p>
              <span className="flex">
                <select
                  ref={shopRef}
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
                  value={selectedShop}
                  onChange={(e) => setSelectedShop(e.target.value)}
                >
                  <option value="H. E Butt Grocery">H. E Butt Grocery</option>
                  <option value="Shaheer Vegs">Shaheer Vegs</option>
                </select>
              </span>
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
              className="w-[600px] h-60 mt-2 p-2 resize-none"
            />
          </div>
          <div className="mt-8 flex gap-5">
            {/* add a checkbox with name Deactivated  */}
            <div className="flex items-center">
              <input
                ref={stockCheckboxRef}
                type="checkbox"
                id="stockCheckbox"
                className="w-4 h-4 mt-2 p-2"
              />{" "}
              <label
                className="ml-2 mt-2 select-none"
                htmlFor="stockCheckbox"
                style={{
                  color: `${currentColor}`,
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                In Stock
              </label>
            </div>
            <div className="flex items-center">
              <input
                ref={promotionCheckboxRef}
                type="checkbox"
                id="promotionCheckbox"
                className="w-4 h-4 mt-2 p-2"
              />{" "}
              <label
                className="ml-2 mt-2 select-none"
                htmlFor="promotionCheckbox"
                style={{
                  color: `${currentColor}`,
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                Add In Promotion
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
            text="Save Product"
            cssWidth="150px"
            size={14}
            onClick={() => navigate("/suppliers/:id")}
          />
        </form>
      </div>
    </div>
  );
};
export default AddProduct;
