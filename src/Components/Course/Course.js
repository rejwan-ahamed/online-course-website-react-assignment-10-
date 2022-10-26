import React from "react";
import { useLoaderData } from "react-router-dom";

const Course = () => {
const { id, name, description, students, time, teacher, T_img, skill, img } = useLoaderData()
  return (
    <div>
      <div className="course-main-part px-4 mt-20 mb-20 lg:px-20 xl:px-40 flex justify-center items-center gap-10 ">
        <div className="course-left w-[50%]">
          <img
            className="rounded-md w-[100%] "
            src={img}
            alt=""
            srcset=""
          />
        </div>

        {/* course name */}
        <div className="course-right w-[50%]">
          <h1 className="text-3xl font-general font-[600] mb-4">
            {name}
          </h1>
          <p className="font-general font-medium mb-8">
           {description}
          </p>

          {/* instructor details*/}
          <div className="instructro-section flex gap-2 items-center">
            <img
              class="w-10 h-10 rounded-full"
              src={T_img}
              alt="Rounded avatar"
            />
            <div className="details">
              <div className="name font-general font-[600] text-xl">
                {teacher}
              </div>
              <div className="skill font-general font-medium">
                {skill}
              </div>
            </div>
          </div>

          {/* course details */}
          <div className="course-details font-general font-medium flex justify-between py-4 w-[30%] mb-2">
            <div className="left flex gap-1">
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
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p>{students}</p>
            </div>
            <div className="right flex gap-1">
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
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>{time}</p>
            </div>
          </div>

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
    </div>
  );
};

export default Course;
