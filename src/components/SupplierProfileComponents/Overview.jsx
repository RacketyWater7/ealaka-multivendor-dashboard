import React from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { MdWork } from "react-icons/md";
import { BiGift } from "react-icons/bi";

const Overview = () => {
  return (
    <div className="w-full flex mt-8 pt-4 pb-4 ">
      <div className="flex items-start p-6 md:w-1/3 border-1">
        <AiOutlineUsergroupAdd className="w-12 h-12" />
        <div className="ml-1 flex flex-col">
          <p className="text-gray-300 font-bold">Registered Customers</p>
          <p className="text-2xl text-pink-600 font-bold">14,171</p>
        </div>
      </div>
      <div className="flex items-start p-6 md:w-1/3 border-1">
        <BiGift className="w-12 h-12" />
        <div className="ml-1 flex flex-col">
          <p className="text-gray-300 font-bold">Total Number Of Orders</p>
          <p className="text-2xl text-pink-600 font-bold">14,171</p>
        </div>
      </div>
      <div className="flex items-start p-6 md:w-1/3 border-1">
        <MdWork className="w-12 h-12" />
        <div className="ml-1 flex flex-col">
          <p className="text-gray-300 font-bold">Financial Growth</p>
          <p className="text-2xl text-pink-600 font-bold">14,171</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
