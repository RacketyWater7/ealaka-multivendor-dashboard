import React from "react";
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

import { customersData, deliveryGuysGrid } from "../data/dummy";
import { Button, Header } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const DeliveryGuys = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ["Delete", "Edit", "Update", "Cancel"];
  const editing = { allowDeleting: true, allowEditing: true };
  const { currentColor } = useStateContext();
  const commands = [
    // add a custom button
    {
      type: "custom",
      buttonOption: {
        content:
          '<div style="background: #e4e7ef; color: #09276a; padding: 7px; display: flex; align-items: center; justify-content: center; border-radius: 2px; font-family: Roboto; font-weight: 500;" class="e-icons e-add-icon">View Profile</div>',
        cssClass: "e-flat",
      },
    },
  ];

  return (
    <div className="m-2 md:m-4 mt-24 p-2 md:p-4 bg-white rounded-3xl">
      <div className="flex justify-between">
        <Header
          category="Check all the delivery guys in your system."
          title="Delivery Guys"
        />
        <Link to="/deliveryguys/add">
          <Button
            height={10}
            bgColor="#E4E7EF"
            bold="bold"
            color={currentColor}
            width={36}
            text="Add Rider"
            size={14}
          />
        </Link>
      </div>
      <GridComponent
        dataSource={customersData}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {deliveryGuysGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
          <ColumnDirective
            headerText="Action"
            width="100"
            commands={commands}
          />
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
    </div>
  );
};

export default DeliveryGuys;
