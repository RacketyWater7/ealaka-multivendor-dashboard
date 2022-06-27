import React, { useRef } from "react";
// import { FormValidator } from '@syncfusion/ej2-inputs';
import { Link } from "react-router-dom";

import { useStateContext } from "../../contexts/ContextProvider";
import { Button, Header } from "../../components";

// let formObject;

// follow the below link to implement the form validations:
// https://ej2.syncfusion.com/react/documentation/form-validator/react-functional-component/

const AddAttribute = () => {
  const titleRef = useRef(null);
  const valueRef = useRef(null);
  const { currentColor } = useStateContext();

  return (
    <div className="ml-2 mr-2 md:mr-4 md:ml-4 md:mt-4 mt-24 p-2 md:pl-4 md:pr-4 md:pt-4 bg-white rounded-3xl h-full">
      <Header
        category="Check and manage all attributes in your system."
        title="Manage Attributes"
      />
      <div
        style={{ height: "70vh" }}
        className="bg-white w-full md:mr-2 md:ml-2 md:mt-2 border-1 pl-4 pt-6"
      >
        <form className="ml-4">
          <div className="flex mt-8 gap-5">
            <div className="flex flex-col">
              <p
                style={{
                  color: `${currentColor}`,
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                Title
              </p>
              <input
                ref={titleRef}
                type="text"
                placeholder="Quantity"
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
                Value
              </p>
              <input
                ref={valueRef}
                type="text"
                placeholder="Numerics"
                style={{ border: "1px solid #D4D4EC" }}
                className="w-64 h-12 mt-2 p-2"
              />
            </div>
          </div>

          <Link to="/attributes">
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

export default AddAttribute;
