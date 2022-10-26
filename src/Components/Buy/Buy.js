import React from "react";
import { Link } from "react-router-dom";

const Buy = () => {
  return (
    <div className="flex flex-col justify-center items-center px-40">
        <h1 className="font-general text-3xl font-[600] py-10">Payment Completed. Enjoy your course</h1>
      <div className="main-section flex justify-center item-center w-full mb-6">
        <img src="/assets/images/buy.svg" alt="" srcset="" className="w-[25rem]" />
      </div>
      <Link
          to="/"
          type="button"
          class="  text-white bg-orange-500 border hover:bg-transparent hover:text-orange-500 hover:border-orange-500 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Back to hame
        </Link>
    </div>
  );
};

export default Buy;
