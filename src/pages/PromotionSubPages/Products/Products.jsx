import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
  CommandColumn,
} from "@syncfusion/ej2-react-grids";
import { Link } from "react-router-dom";
import "tw-elements";

import { ordersData, productsGrid } from "../../../data/dummy";
import { Button, Header, Modal } from "../../../components";
import { useStateContext } from "../../../contexts/ContextProvider";

const Products = ({ heading }) => {
  const location = useLocation();
  // const navigate = useNavigate();
  const categoryRef = useRef();
  const [showCategoryModal, setShowCategoryModal] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ["Delete", "Edit", "Update", "Cancel"];
  const editing = { allowDeleting: true, allowEditing: true };
  const { currentColor } = useStateContext();
  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);
  return (
    <div className="m-2 md:m-4 mt-24 p-2 md:p-4 bg-white rounded-3xl">
      {heading !== false && (
        <div className="flex justify-between">
          <Header
            category="Check all added products to your shop page."
            title="Products"
          />
        </div>
      )}
      <GridComponent
        dataSource={ordersData}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting
        rowSelected={(args) => {
          if (location.pathname.includes("/promotions/add/suppliers")) {
            console.log(showCategoryModal, args);
            if (showCategoryModal) {
              setShowCategoryModal(false);
            }
            setShowCategoryModal(true);
          }
        }}
      >
        <ColumnsDirective>
          {productsGrid.map((item, index) => (
            <ColumnDirective
              columnData={() => {
                console.log("item", item);
              }}
              key={index}
              {...item}
            />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Page,
            Selection,
            Toolbar,
            Edit,
            Sort,
            Filter,
            CommandColumn,
          ]}
        />
      </GridComponent>
      <Modal show={showCategoryModal} headerTitle="Categories of promotions">
        <>
          <div className="flex ml-28 mr-28 mb-10 flex-col">
            <span className="flex">
              <select
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setShowCategoryModal(false);
                }}
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
                transition
                ease-in-out
                mt-2
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
                value={selectedCategory}
                disabled={selectedCategory !== ""}
              >
                <option value="0">Select a category</option>
                <option value="Discount">Discount</option>
                <option value="Take free Product">Take free Product</option>
                <option value="Free Delivery">Free Delivery</option>
              </select>
            </span>
            {selectedCategory === "Discount" && (
              <>
                <p
                  style={{
                    color: `${currentColor}`,
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                  className="mt-3"
                >
                  Add Discount %
                </p>
                <input
                  type="number"
                  className="form-input
                  appearance-none
                  block
                  w-full
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
                  aria-label="Default select example"
                />
              </>
            )}
            {selectedCategory !== "" && (
              <>
                <p
                  style={{
                    color: `${currentColor}`,
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                  className="mt-3"
                >
                  Expiration Dates
                </p>
                <div className="flex">
                  <input
                    type="date"
                    name="from_date"
                    id="from_date"
                    className="mr-3 border border-solid border-gray-300"
                  />
                  <input
                    type="date"
                    name="to_date"
                    id="to_date"
                    className="border border-solid border-gray-300"
                  />
                </div>
                <Link
                  className="self-end"
                  to="/promotions/add/suppliers/:id/products/add"
                >
                  <Button
                    additionClasses="mt-8"
                    height={10}
                    bgColor="#E4E7EF"
                    bold="bold"
                    color={currentColor}
                    cssWidth="150px"
                    text="Proceed"
                    size={14}
                  />
                </Link>
              </>
            )}
          </div>
        </>
      </Modal>
    </div>
  );
};

export default Products;
