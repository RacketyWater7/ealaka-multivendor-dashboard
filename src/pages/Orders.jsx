import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  Edit,
  ExcelExport,
  PdfExport,
  Toolbar,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";
import { Header } from "../components";

const Orders = ({ heading }) => {
  const gridRef = React.useRef();
  const editing = { allowDeleting: true, allowEditing: true };
  const toolbarOptions = [
    "PdfExport",
    { text: "Orders", tooltipText: "Orders", id: "orders" },
    { text: "Recent Orders", tooltipText: "Recent Orders", id: "recentOrders" },
  ];

  const toolbarClick = (args) => {
    if (args.item.id === "gridcomp_pdfexport") {
      gridRef.current.pdfExport();
    }
    if (args.item.id === "orders") {
      // console.log('orders: ', args.item.id);
    }
    if (args.item.id === "recentOrders") {
      // console.log('recentOrders: ', args.item.id);
    }
  };

  return (
    <div className="m-2 md:m-4 mt-24 p-2 md:p-4 bg-white rounded-3xl">
      {heading !== false && (
        <Header
          category="Check all received, processed and pending orders."
          title="Orders"
        />
      )}
      <GridComponent
        id="gridcomp"
        ref={gridRef}
        dataSource={ordersData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        toolbarClick={toolbarClick}
        contextMenuItems={contextMenuItems}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            Toolbar,
            Edit,
            ExcelExport,
            PdfExport,
          ]}
        />
      </GridComponent>
    </div>
  );
};
export default Orders;
