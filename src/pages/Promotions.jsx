import React from "react";
// import { useNavigate } from "react-router-dom";
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

import { promotionsData, promotionsGrid } from "../data/dummy";
import { Button, Header } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const Promotions = () => {
  // const navigate = useNavigate();
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ["Delete", "Edit", "Update", "Cancel"];
  const editing = { allowDeleting: true, allowEditing: true };
  const { currentColor } = useStateContext();

  const commands = [
    // add a custom button
    // adding custom buttons
    {
      type: "Edit",
      buttonOption: {
        content:
          '<div style="background: #b4ffac; color: #26801c; padding: 7px; display: flex; align-items: center; justify-content: center; border-radius: 1px; font-family: Roboto; font-weight: 500;" class="e-icons e-add-icon">Edit</div>',
        cssClass: "e-flat",
      },
    },
    {
      type: "Delete",
      buttonOption: {
        content:
          '<div style="background: #ffc9dd; color: #cb2b65; padding: 7px; display: flex; align-items: center; justify-content: center; border-radius: 1px; font-family: Roboto; font-weight: 500;" class="e-icons e-add-icon">Delete</div>',
        cssClass: "e-flat",
      },
    },
  ];
  return (
    <div className="m-2 md:m-4 mt-24 p-2 md:p-4 bg-white rounded-3xl">
      <div className="flex justify-between">
        <Header title="Promotions" />
        <Link to="/promotions/add">
          <Button
            height={10}
            bgColor="#E4E7EF"
            bold="bold"
            color={currentColor}
            width={36}
            text="Add New"
            size={14}
          />
        </Link>
      </div>
      <GridComponent
        dataSource={promotionsData}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting
      >
        <ColumnsDirective>
          {promotionsGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
          <ColumnDirective
            headerText="Action"
            width="130"
            headerTextAlign="center"
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

export default Promotions;
