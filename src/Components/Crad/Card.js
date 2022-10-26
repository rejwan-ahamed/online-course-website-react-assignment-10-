import React from "react";
import { Link } from "react-router-dom";

const Card = ({ courseData }) => {
  const { id, name, description, students, time, teacher, T_img, skill, img } =
    courseData;
  return (
    <div>
      <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <Link>
          <img
            className="lg:h-[10rem] rounded-t-lg"
            class="rounded-t-lg"
            src={img}
            alt=""
          />
        </Link>
        <div class="p-5">
          <Link>
            <h5 class="mb-2 text-2xl font-[600] tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </Link>
          <p class="mb-3 font-medium text-gray-700 dark:text-gray-400">
            {description.length < 200
              ? description
              : description.slice(0, 120) + "....."}
          </p>
          {/* instructor */}
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
              <div className="skill font-general font-medium">{skill}</div>
            </div>
          </div>
          {/* course details */}
          <div className="course-details font-general font-medium flex justify-between py-4 w-[95%]">
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
          <Link to={`/course/${id}`}
            type="button"
            class="text-white w-full font-general text-center bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Enroll Course
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
