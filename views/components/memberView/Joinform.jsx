import { useState } from "react";
import React from "react";
import Referential from "../../../utils/components/other components/Referential";


const Joinform =() => {
    const [showPopup, setShowPopup] = useState(false);
  const [referentialCode, setReferentialCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Referential Code: ${referentialCode}`);
  };
    return(
        <div>
            <div className="flex flex-col items-center justify-center h-screen">
       {/* <img
                title="Referetial code"
                src={refer}
                style={{ height: 30, width: 30 }}
                className="cursor-pointer hover:scale-110 transition-transform"
                alt=""
                onClick={togglePopup}
              /> */}

      {/* {showPopup && ( */}
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 shadow-lg relative">
            {/* <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={togglePopup}
            >
              <AiOutlineClose className="w-6 h-6" />
            </button> */}
            <h2 className="text-lg font-semibold mb-4">Enter your referential code</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter your referential code"
                value={referentialCode}
                onChange={(e) => setReferentialCode(e.target.value)}
                className="border border-gray-300 rounded p-2 w-full mb-4"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600 transition-colors w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      {/* )} */}
    </div>
        </div>
    )
}
export default Joinform;