import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";
import { BsArrowRightShort } from "react-icons/bs";
import { Modal } from "../../components";

const AddPromotion = () => {
  const { currentColor } = useStateContext();
  const [target, setTarget] = useState("");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="m-2 md:m-4 mt-24 p-2 md:p-4 bg-white rounded-3xl">
      <Header category="" title="Manage Promotion" />
      <div className="flex p-8 mt-8 border-1 border-[#e3e3e3] h-[75vh] w-full">
        <div className="flex h-5">
          <input
            id="same_order"
            type="radio"
            name="order"
            className="w-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onClick={() => {
              setTarget("same_order");
              setShowModal(true);
            }}
          />
          <label
            htmlFor="same_order"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 select-none cursor-pointer"
          >
            Same Order
          </label>
        </div>
        <div className="flex ml-4 h-5">
          <input
            id="next_order"
            type="radio"
            name="order"
            className="w-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onClick={() => {
              setTarget("next_order");
              setShowModal(true);
            }}
          />
          <label
            htmlFor="next_order"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 select-none cursor-pointer"
          >
            Next Order
          </label>
        </div>
      </div>
      <Modal show={showModal} headerTitle="Add Promo Code">
        <div className="relative p-6 flex-auto mb-12">
          <div className="flex">
            <input
              type="text"
              className="ml-12 w-80 h-12 mt-2 p-2 border-1 border-[#e3e3e3] focus:outline-none rounded-sm"
              placeholder="22334455"
            />
            <span className="relative -left-12 top-3 hover:bg-indigo-300  duration-300 bg-indigo-200 h-10 w-11 rounded-sm cursor-pointer">
              {" "}
              <Link to={`/promotions/add/suppliers?order=${target}`}>
                <BsArrowRightShort
                  color={currentColor}
                  className="w-8 h-8 ml-1.5 mt-1"
                />
              </Link>
            </span>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddPromotion;
