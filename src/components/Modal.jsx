import React, { useEffect } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { IoIosClose } from "react-icons/io";
import { Header } from "../components";

function Modal({
  show,
  headerTitle,
  headerSubTitle,
  children,
  onClose,
  heading,
}) {
  const { currentColor } = useStateContext();

  useEffect(() => {
    if (show) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [show]);

  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-[580px]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between border-solid  rounded-t">
                  <button
                    className="p-1 ml-auto float-right text-3xl leading-none font-semibold "
                    onClick={() => {
                      setShowModal(false);
                      onClose();
                    }}
                  >
                    <span className="h-6 w-6 text-2xl block rounded-full bg-indigo-200 hover:bg-indigo-300  duration-300 mr-3 mt-3">
                      <IoIosClose color={currentColor} />
                    </span>
                  </button>
                </div>
                {/*body*/}
                <span className="flex justify-center">
                  {heading !== false && (
                    <Header category={headerSubTitle} title={headerTitle} />
                  )}
                </span>
                {children}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default Modal;
