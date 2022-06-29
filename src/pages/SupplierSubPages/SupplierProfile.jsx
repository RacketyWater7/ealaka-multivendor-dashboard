import React from "react";
import { Button, Header } from "../../components";
import { RiEditLine } from "react-icons/ri";
import { useStateContext } from "../../contexts/ContextProvider";
import avatar4 from "../../data/avatar4.jpg";
import AddShop from "../../components/SupplierProfileComponents/AddShop";
import ProfileInfo from "../../components/SupplierProfileComponents/ProfileInfo";
import Overview from "../../components/SupplierProfileComponents/Overview";
import Products from "../PromotionSubPages/Products/Products";
import Orders from "../Orders";
import ManageShop from "../../components/SupplierProfileComponents/ManageShop";

const SupplierProfile = () => {
  const { currentColor } = useStateContext();
  const [activeMenu, setActiveMenu] = React.useState("Manage Shop");
  const [addShop, setAddShop] = React.useState(false);

  return (
    <div>
      <div className="flex justify-between ml-5">
        <Header
          category="Check the details about registered supplier."
          title="Supplier Profile"
          mb="1"
        />
      </div>
      <div className="m-3 ml-3 md:m-4 min-h-[90vh] bg-white rounded-sm shadow-lg">
        <div className="w-full pl-3 pr-3 pt-3 h-[300px] max-h-[300px] relative">
          {/* cover photo */}
          <img
            width="100%"
            height="300px"
            className="h-[300px] max-h-[300px] object-cover"
            src="/images/vegis-cover.jpg"
            alt="Cover"
          />
          <RiEditLine
            className="absolute bottom-4 right-8 bg-white rounded-full h-10 w-10 p-2 cursor-pointer"
            color={currentColor}
          />
          {/* Profile photo */}
          <div className="absolute w-36 h-36 bg-white shadow-md p-1 left-10 -bottom-20 z-10 overflow-hidden">
            <img src={avatar4} alt="Profile" width="100%" height="100%" />
          </div>
        </div>
        <div className="flex w-full  p-3 pt-5 pb-2 border-b-1 border-gray-100">
          <div className="flex-[17%]" />
          <div className="flex-[83%] flex justify-between items-center">
            <div className="flex md:gap-8 lg:gap-10 sm:gap-5 ">
              <span
                onClick={() => {
                  setActiveMenu("Overview");
                  setAddShop(false);
                }}
                className={
                  activeMenu === `Overview`
                    ? `text-indigo-900 select-none font-bold`
                    : `text-indigo-400 select-none  font-bold hover:cursor-pointer`
                }
              >
                Overview
              </span>
              <span
                onClick={() => {
                  setActiveMenu("Profile");
                  setAddShop(false);
                }}
                className={
                  activeMenu === `Profile`
                    ? `text-indigo-900 select-none  font-bold`
                    : `text-indigo-400  select-none font-bold hover:cursor-pointer`
                }
              >
                Profile
              </span>
              <span
                onClick={() => {
                  setActiveMenu("Products");
                  setAddShop(false);
                }}
                className={
                  activeMenu === `Products`
                    ? `text-indigo-900  select-none font-bold`
                    : `text-indigo-400 select-none  font-bold hover:cursor-pointer`
                }
              >
                Products
              </span>
              <span
                onClick={() => {
                  setActiveMenu("Orders");
                  setAddShop(false);
                }}
                className={
                  activeMenu === `Orders`
                    ? `text-indigo-900 select-none  font-bold`
                    : `text-indigo-400  select-none font-bold hover:cursor-pointer`
                }
              >
                Orders
              </span>
              <span
                onClick={() => {
                  setActiveMenu("Manage Shop");
                  setAddShop(false);
                }}
                className={
                  activeMenu === `Manage Shop`
                    ? `text-indigo-900 select-none  font-bold`
                    : `text-indigo-400  select-none  font-bold hover:cursor-pointer`
                }
              >
                Manage Shop
              </span>
            </div>
            {activeMenu === "Manage Shop" && (
              <Button
                height={10}
                bgColor="#E4E7EF"
                bold="bold"
                color={currentColor}
                width={36}
                text="Add Shop"
                size={14}
                onClick={() => setAddShop(true)}
              />
            )}
            {activeMenu === "Profile" && (
              <button className="bg-[#fb2b76] h-10 w-32 text-white p-3 text-[18px] rounded-sm font-bold flex justify-around items-center">
                Edit
                {/* <span> */}
                <RiEditLine className=" h-8 w-8 cursor-pointer" color="white" />
                {/* </span> */}
              </button>
            )}
            {activeMenu !== "Manage Shop" && activeMenu !== "Profile" && (
              <span className="h-10 p-3"></span>
            )}
          </div>
        </div>
        <div
          className={activeMenu === "Overview" ? `mt-10 w-full` : `mt-10 ml-7`}
        >
          {addShop && <AddShop setShop={setAddShop} />}
          {activeMenu === "Overview" && <Overview />}
          {activeMenu === "Profile" && <ProfileInfo />}
          {activeMenu === "Products" && (
            <>
              <div className="flex w-full justify-between pr-8">
                <span />{" "}
                <Button
                  additionClasses="self-end"
                  height={10}
                  bgColor="#E4E7EF"
                  bold="bold"
                  color={currentColor}
                  width={36}
                  text="Add Shop"
                  size={14}
                />
              </div>

              <Products heading={false} />
            </>
          )}
          {activeMenu === "Orders" && <Orders heading={false} />}
          {activeMenu === "Manage Shop" && addShop === false && <ManageShop />}
        </div>
      </div>
    </div>
  );
};

export default SupplierProfile;
