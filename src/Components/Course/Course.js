import React from "react";

const Course = () => {
  return (
    <div>
      <div className="course-main-part px-4 mt-10 mb-20 lg:px-20 xl:px-40">
        <img
          className="rounded-sm w-full"
          src="https://images.unsplash.com/photo-1666632000754-3eb0e1e59c32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
          alt=""
          srcset=""
        />
        {/* course name */}
        <h1 className="text-3xl font-general font-[600] mt-8 mb-4">
          Random javascript Course
        </h1>
        <p className="font-general font-medium mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          veritatis, reprehenderit dolorem minus enim repellat. Magnam veniam
          aperiam enim quo nesciunt accusantium dignissimos veritatis saepe
          eligendi voluptatibus, ad eius in sit. Asperiores, suscipit. Excepturi
          dolorum iste a enim beatae quos odit ex aspernatur mollitia? Eos eius
          ut non blanditiis vero?
        </p>

        {/* button group */}
        <div className="button-group block lg:flex">
          <button
            type="button"
            class="text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full lg:w-max dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Join Premium Class
          </button>
          <button
            type="button"
            class="flex justify-center items-center gap-1 text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full lg:w-max dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Download PDF{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
