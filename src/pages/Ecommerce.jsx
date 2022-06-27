import React from "react";
// import { BsCurrencyDollar } from 'react-icons/bs';
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { MdWork } from "react-icons/md";
import { BiGift } from "react-icons/bi";
// import { GoPrimitiveDot } from 'react-icons/go';
import { IoMdBicycle } from "react-icons/io";
// import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  SplineAreaSeries,
  Legend,
} from "@syncfusion/ej2-react-charts";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Search,
  Page,
  CommandColumn,
} from "@syncfusion/ej2-react-grids";

// import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
import {
  employeesData1,
  employeesGrid2,
  employeesData2,
  employeesGrid1,
  employeesData3,
  employeesGrid3,
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
// import product9 from '../data/product9.jpg';

// const DropDown = ({ currentMode }) => (
//   <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
//     <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
//   </div>
// );

const Ecommerce = () => {
  const { currentColor, currentMode, secondaryColor } = useStateContext();
  const editing = { allowDeleting: false, allowEditing: false };
  const editingPromotions = { allowDeleting: true, allowEditing: true };
  const commands = [
    {
      type: "Edit",
      buttonOption: { iconCss: " e-icons e-edit", cssClass: "e-flat" },
    },
    {
      type: "Delete",
      buttonOption: { iconCss: "e-icons e-delete", cssClass: "e-flat" },
    },
    {
      type: "Save",
      buttonOption: { iconCss: "e-icons e-update", cssClass: "e-flat" },
    },
    {
      type: "Cancel",
      buttonOption: { iconCss: "e-icons e-cancel-icon", cssClass: "e-flat" },
    },
  ];
  return (
    <div className="mt-16 mr-5">
      <p className="pl-8" style={{ color: `${currentColor}` }}>
        Good Morning, Maria Stephan
      </p>
      <p className="pl-8" style={{ color: `${secondaryColor}` }}>
        Here&apos;s what&apos;s happening with your store today
      </p>
      {/* make 4 equal rectangles of 200px height */}
      <div className="w-full flex mt-8 p-4">
        <div className="flex items-start p-6 md:w-1/4 border-1">
          <AiOutlineUsergroupAdd className="w-12 h-12" />
          <div className="ml-1 flex flex-col">
            <p className="text-gray-300 font-bold">Registered Customers</p>
            <p className="text-2xl text-pink-600 font-bold">14,171</p>
          </div>
        </div>
        <div className="flex items-start p-6 md:w-1/4 border-1">
          <MdWork className="w-12 h-12" />
          <div className="ml-1 flex flex-col">
            <p className="text-gray-300 font-bold">Registered Suppliers</p>
            <p className="text-2xl text-pink-600 font-bold">14,171</p>
          </div>
        </div>
        <div className="flex items-start p-6 md:w-1/4 border-1">
          <BiGift className="w-12 h-12" />
          <div className="ml-1 flex flex-col">
            <p className="text-gray-300 font-bold">Total Number Of Orders</p>
            <p className="text-2xl text-pink-600 font-bold">14,171</p>
          </div>
        </div>
        <div className="flex items-start p-6 md:w-1/4 border-1">
          <IoMdBicycle className="w-12 h-12" />
          <div className="ml-1 flex flex-col">
            <p className="text-gray-300 font-bold">Registered Delivery Guys</p>
            <p className="text-2xl text-pink-600 font-bold">14,171</p>
          </div>
        </div>
      </div>
      <div className="md:w-full overflow-auto">
        <ChartComponent
          className="pl-8"
          id="charts"
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
          legendSettings={{
            background: "white",
            position: "Top",
            alignment: "Far",
          }}
        >
          <Inject services={[SplineAreaSeries, DateTime, Legend]} />
          <SeriesCollectionDirective>
            {areaCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
      <div className="flex mt-6 ml-4 z-0">
        <div className="w-1/3">
          <p className="flex justify-between">
            <span style={{ color: `${currentColor}`, fontWeight: "bold" }}>
              Top Supplier
            </span>
            <span style={{ color: `${secondaryColor}`, fontWeight: "bold" }}>
              View All
            </span>
          </p>
          <GridComponent
            // className="z-0"
            dataSource={employeesData1}
            width="auto"
            allowSorting
            editSettings={editing}
            // toolbar={toolbarOptions}
          >
            <ColumnsDirective>
              {employeesGrid1.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
            </ColumnsDirective>
            <Inject services={[Search, Page, CommandColumn]} />
          </GridComponent>
        </div>
        <div className="ml-3 w-2/3">
          <p className="flex justify-between">
            <span style={{ color: `${currentColor}`, fontWeight: "bold" }}>
              Recent Orders
            </span>
            <span style={{ color: `${secondaryColor}`, fontWeight: "bold" }}>
              View All
            </span>
          </p>
          <GridComponent
            dataSource={employeesData2}
            width="auto"
            allowSorting
            editSettings={editing}
            // toolbar={toolbarOptions}
          >
            <ColumnsDirective>
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              {employeesGrid2.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
            </ColumnsDirective>
            <Inject services={[Search, Page, CommandColumn]} />
          </GridComponent>
        </div>
      </div>
      <div className="w-full mt-6 ml-4">
        <p className="flex justify-between">
          <span style={{ color: `${currentColor}`, fontWeight: "bold" }}>
            Active Permotations
          </span>
          <span style={{ color: `${secondaryColor}`, fontWeight: "bold" }}>
            View All
          </span>
        </p>
        <GridComponent
          dataSource={employeesData3}
          width="auto"
          allowSorting
          editSettings={editingPromotions}
          // toolbar={toolbarOptions}
        >
          <ColumnsDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {employeesGrid3.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
            <ColumnDirective
              headerText="Actions"
              width="90"
              commands={commands}
            />
          </ColumnsDirective>
          <Inject services={[Search, Page, CommandColumn]} />
        </GridComponent>
      </div>
    </div>
  );
};

export default Ecommerce;
