import React, { useRef } from "react";
import { Header, Modal } from "../../../../components";
import { useStateContext } from "../../../../contexts/ContextProvider";
import { Button } from "../../../../components";
import { useNavigate } from "react-router-dom";

const AddNewPromotion = () => {
  const navigate = useNavigate();
  const { currentColor } = useStateContext();
  const imageRef = useRef();
  const linkRef = useRef();
  const [showModal, setShowModal] = React.useState(false);
  const onClose = () => {
    navigate("/promotions");
  };

  return (
    <div>
      <div className="flex justify-between ml-5">
        <Header
          category="Check the details about registered supplier."
          title="Promotion"
          mb="1"
        />
      </div>
      <div className="m-3 ml-3 md:m-4 h-[90vh]  bg-white rounded-sm shadow-lg">
        {/* make a flex with headers as Supplier Name, Product Name, Promotion Type, Discount, Expiration Dates, Promo Code */}
        <div className="flex justify-between w-full ">
          {[
            "Supplier Name",
            "Product Name",
            "Promotion Type",
            "Discount",
            "Expiration Dates",
            "Promo Code",
          ].map((item) => (
            <div key={item} className="w-1/6">
              <div className="text-left text-sm font-bold text-[#09276a] pl-7 mt-5">
                {item}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between w-full pl-7 mt-5 bg-gray-50 items-center">
          {[
            "Billie Brown",
            "Green Fresh Broccoli",
            "Discount",
            "25%",
            "Start Date: 05/03/2022 > End Date: 06/03/2022",
            "23456",
          ].map((item, index) => (
            <div key={item} className="w-1/6">
              <div className="text-left text-sm font-bold text-[#8394ae]">
                {index === 1 ? (
                  <span className="flex items-center">
                    <span className="-ml-2 mr-2">
                      <img
                        width={35}
                        height={35}
                        src="/images/broccoli.png"
                        alt="broccoli"
                      />
                    </span>
                    Green Fresh Broccoli
                  </span>
                ) : index === 4 ? (
                  <div className="flex flex-col">
                    <span>{item.split(">")[0]}</span>
                    <span>{item.split(">")[1]}</span>
                  </div>
                ) : (
                  item
                )}
              </div>
            </div>
          ))}
        </div>
        <form className="ml-8 mt-10">
          <p
            style={{
              color: `${currentColor}`,
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            Add Promotion Banner
          </p>
          <label
            htmlFor="file_upload"
            style={{ height: "200px", width: "180px" }}
            className="flex justify-center cursor-pointer "
          >
            <div
              style={{ height: "100%", width: "100%" }}
              className="  border-gray-500 shadow-xl hover:shadow-2xl relative rounded-md"
            >
              <div className="absolute left-16 top-12 text-gray-300 text-8xl select-none">
                +
              </div>
            </div>
            <input
              ref={imageRef}
              id="file_upload"
              style={{ display: "none" }}
              type="file"
            />
          </label>
          <div className="flex mt-8 gap-5">
            <div className="flex flex-col">
              <p
                style={{
                  color: `${currentColor}`,
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                Add banner Link
              </p>
              <input
                ref={linkRef}
                type="text"
                style={{ border: "1px solid #D4D4EC" }}
                className="w-80 h-12 mt-2 p-2"
              />
            </div>
          </div>
          <Button
            onClick={() => {
              setShowModal(true);
            }}
            additionClasses="mt-8"
            height={10}
            bgColor="#E4E7EF"
            bold="bold"
            color={currentColor}
            width={40}
            text="Save"
            cssWidth="150px"
            size={14}
          />
        </form>
      </div>
      <Modal show={showModal} onClose={onClose} heading={false}>
        <div className="w-full m-5 pb-5 text-[#09276a]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
          facilis quibusdam doloremque libero, doloribus sit cupiditate ad nam
          voluptate molestiae quasi saepe porro consectetur! Modi ipsum
          doloribus quia ea perspiciatis accusantium accusamus tempora quisquam!
        </div>
      </Modal>
    </div>
  );
};

export default AddNewPromotion;
