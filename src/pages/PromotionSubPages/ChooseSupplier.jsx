import React from "react";
import Suppliers from "../Suppliers";

const ChooseSupplier = () => {
  // extracting query params from url
  // const queryString = window.location.search;
  // const urlParams = new URLSearchParams(queryString);
  // const order = urlParams.get("order");
  ////////////////////////////////////////////////////////////use react-router-dom's query params

  return (
    <div>
      <Suppliers action="View Products" />
    </div>
  );
};

export default ChooseSupplier;
