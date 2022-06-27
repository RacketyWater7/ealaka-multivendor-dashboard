import React, { useRef, useState } from "react";
// import { FormValidator } from '@syncfusion/ej2-inputs';
import { Link } from "react-router-dom";

import { useStateContext } from "../../contexts/ContextProvider";
import { Button, Header } from "../../components";

// let formObject;

// follow the below link to implement the form validations:
// https://ej2.syncfusion.com/react/documentation/form-validator/react-functional-component/

const AddCategory = () => {
  const categoryNameRef = useRef(null);
  const imageRef = useRef(null);
  const checkboxRef = useRef(null);
  const [checkbox, setCheckbox] = useState(false);
  const { currentColor } = useStateContext();

  return (
    <div className="ml-2 mr-2 md:mr-4 md:ml-4 md:mt-4 mt-24 p-2 md:pl-4 md:pr-4 md:pt-4 bg-white rounded-3xl h-full">
      <Header category="Add your Home Page Top banner." title="Main Banner" />
      {/* make a div with dropshadow blur 9 */}
      <div
        style={{ height: "65vh" }}
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
            Category Image
          </p>
          <label
            htmlFor="file_upload"
            style={{ height: "150px", width: "170px" }}
            className="flex justify-center cursor-pointer relative right-3"
          >
            <div
              style={{ height: "100%", width: "100%" }}
              className="  border-gray-500 shadow-xl hover:shadow-2xl relative rounded-md"
            >
              <div className="absolute left-16 top-10 text-gray-300 text-7xl">
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
          <div className="flex mt-8">
            <div className="flex flex-col">
              <p
                style={{
                  color: `${currentColor}`,
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                Category Name
              </p>
              <input
                ref={categoryNameRef}
                placeholder="Zapatos"
                type="text"
                style={{ border: "1px solid #D4D4EC" }}
                className="w-80 h-12 mt-2 p-2"
              />
            </div>
          </div>
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
                {checkbox ? "Active" : "Deactivated"}
              </label>
            </div>
          </div>
          <Link to="/categories">
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

export default AddCategory;
