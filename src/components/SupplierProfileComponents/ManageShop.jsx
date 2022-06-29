import React from "react";

const ManageShop = () => {
  return (
    <div className="flex gap-8">
      <div className="h-[140px] w-[140px]  bg-gray-100 hover:bg-white hover:shadow-xl p-3">
        <img
          src="/images/company_logo1.png"
          width="140px"
          height="140px"
          alt="company1"
        />
      </div>
      <div className="h-[140px] w-[140px]  bg-gray-100 hover:bg-white hover:shadow-xl p-3">
        <img
          src="/images/company_logo2.png"
          width="140px"
          height="140px"
          alt="company2"
        />
      </div>
    </div>
  );
};

export default ManageShop;
