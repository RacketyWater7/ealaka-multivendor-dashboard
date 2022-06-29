import React from "react";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { FiUser, FiMap } from "react-icons/fi";
import { TiBusinessCard } from "react-icons/ti";
import { useStateContext } from "../../contexts/ContextProvider";

const ProfileInfo = () => {
  const { secondaryColor } = useStateContext();
  const info = [
    {
      title: "Contact Number",
      subtitle: "+977-984-898-898",
      image: <BsTelephone />,
    },
    {
      title: "Email",
      subtitle: "jondoe@email.com",
      image: <MdOutlineEmail />,
    },
    {
      title: "Account Creation Date",
      subtitle: "01/01/2020",
      image: <FiUser />,
    },
    {
      title: "Business Name",
      subtitle: "Gap Plastic Factory",
      image: <TiBusinessCard />,
    },
    {
      title: "Business Zone",
      subtitle: "Zone 2",
      image: <FiMap />,
    },
    {
      title: "Business Address",
      subtitle: "Street no 4, main bulevard Classical Road, London, UK",
      image: <TiBusinessCard />,
    },
  ];

  return (
    <div className="ml-4">
      <div className="grid grid-cols-4 w-full gap-4">
        {info.map((item, i) => (
          <div className="flex">
            {i === 0 && (
              <BsTelephone color="#4ece70" className="mr-5 h-[25px] w-[25px]" />
            )}
            {i === 1 && (
              <MdOutlineEmail
                color="#4ece70"
                className="mr-5 h-[25px] w-[25px]"
              />
            )}
            {i === 2 && (
              <FiUser color="#4ece70" className="mr-5 h-[25px] w-[25px]" />
            )}
            {i === 3 && (
              <TiBusinessCard
                color="#4ece70"
                className="mr-5 h-[25px] w-[25px]"
              />
            )}
            {i === 4 && (
              <FiMap color="#4ece70" className="mr-5 h-[25px] w-[25px]" />
            )}
            {i === 5 && (
              <TiBusinessCard
                color="#4ece70"
                className="mr-5 h-[25px] w-[25px]"
              />
            )}
            <div className="flex flex-col h-14 justify-between w-52">
              <span className="text-indigo-900 select-none font-bold text-lg">
                {item.title}
              </span>
              <span style={{ color: secondaryColor }}>{item.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileInfo;
