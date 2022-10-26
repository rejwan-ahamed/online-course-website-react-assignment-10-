import React from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div className=" lg:mb-40">
      <div className="course-upper-part">
        <img src="/assets/images/courses.jpg" alt="" srcset="" />
      </div>
      <div className="course-title-part flex flex-col justify-center items-center">
        <h1 className="course-title font-general font-[600] text-4xl mt-12 px-4 ">
          Enroll Our premium Courses
        </h1>
        <p className="course-paragraph w-[100%] text-left font-general font-medium mt-6 mb-24 text-gray-400 px-4 lg:w-[50%] lg:text-center">
          Move your creative journey forward without putting life on hold.
          Jonker EDU short online classes help you find inspiration that fits
          your routine.
        </p>
      </div>

      {/* courses card part here */}
      <div className="course-main-body lg:grid lg:grid-cols-10">
        {/* empty div */}
        <div className="empty-div col-span-1"></div>
        <div className="right-side-bar col-span-2 bg-blue-100 rounded-md h-max">
          <ol className="lg:p-6 font-general font-medium text-xl">
            <li className="p-2 hover:bg-blue-300 hover:p-2 hover:rounded-md ">
              <Link>Javascript</Link>
            </li>
            <li className="p-2 hover:bg-blue-300 hover:p-2 hover:rounded-md ">
              <Link>Javascript</Link>
            </li>
            <li className="p-2 hover:bg-blue-300 hover:p-2 hover:rounded-md ">
              <Link>Javascript</Link>
            </li>
            <li className="p-2 hover:bg-blue-300 hover:p-2 hover:rounded-md ">
              <Link>Javascript</Link>
            </li>
            <li className="p-2 hover:bg-blue-300 hover:p-2 hover:rounded-md ">
              <Link>Javascript</Link>
            </li>
            <li className="p-2 hover:bg-blue-300 hover:p-2 hover:rounded-md ">
              <Link>Javascript</Link>
            </li>
          </ol>
        </div>
        <div className="course-cards-main font-general grid grid-cols-1 px-4 lg:grid-cols-3 lg:pl-0 gap-3 lg:col-span-7 lg:px-20 xl:px-40 xl:pl-6">
          <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Link>
              <img
                class="rounded-t-lg"
                src="https://images.unsplash.com/photo-1666515878427-c0a045bf03c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
            </Link>
            <div class="p-5">
              <Link>
                <h5 class="mb-2 text-2xl font-[600] tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology
                </h5>
              </Link>
              <p class="mb-3 font-medium text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              {/* instructor */}
              <div className="instructro-section flex gap-2 items-center">
                <img
                  class="w-10 h-10 rounded-full"
                  src="https://celadon-granita-38dd91.netlify.app/images/avatar.jpg"
                  alt="Rounded avatar"
                />
                <div className="details">
                  <div className="name font-general font-[600] text-xl">
                    Rejwan Ahamed
                  </div>
                  <div className="skill font-general font-medium">
                    Senior Backend DEV
                  </div>
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
                  <p>250</p>
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
                  <p>200m</p>
                </div>
              </div>
              <Link
                type="button"
                class="text-white w-full font-general text-center bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Enroll Course
              </Link>
            </div>
          </div>
          <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Link>
              <img
                class="rounded-t-lg"
                src="https://images.unsplash.com/photo-1666515878427-c0a045bf03c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
            </Link>
            <div class="p-5">
              <Link>
                <h5 class="mb-2 text-2xl font-[600] tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology
                </h5>
              </Link>
              <p class="mb-3 font-medium text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              {/* instructor */}
              <div className="instructro-section flex gap-2 items-center">
                <img
                  class="w-10 h-10 rounded-full"
                  src="https://celadon-granita-38dd91.netlify.app/images/avatar.jpg"
                  alt="Rounded avatar"
                />
                <div className="details">
                  <div className="name font-general font-[600] text-xl">
                    Rejwan Ahamed
                  </div>
                  <div className="skill font-general font-medium">
                    Senior Backend DEV
                  </div>
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
                  <p>250</p>
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
                  <p>200m</p>
                </div>
              </div>
              <Link
                type="button"
                class="text-white w-full font-general text-center bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Enroll Course
              </Link>
            </div>
          </div>
          <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Link>
              <img
                class="rounded-t-lg"
                src="https://images.unsplash.com/photo-1666515878427-c0a045bf03c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
            </Link>
            <div class="p-5">
              <Link>
                <h5 class="mb-2 text-2xl font-[600] tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology
                </h5>
              </Link>
              <p class="mb-3 font-medium text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              {/* instructor */}
              <div className="instructro-section flex gap-2 items-center">
                <img
                  class="w-10 h-10 rounded-full"
                  src="https://celadon-granita-38dd91.netlify.app/images/avatar.jpg"
                  alt="Rounded avatar"
                />
                <div className="details">
                  <div className="name font-general font-[600] text-xl">
                    Rejwan Ahamed
                  </div>
                  <div className="skill font-general font-medium">
                    Senior Backend DEV
                  </div>
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
                  <p>250</p>
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
                  <p>200m</p>
                </div>
              </div>
              <Link
                type="button"
                class="text-white w-full font-general text-center bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Enroll Course
              </Link>
            </div>
          </div>
          <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Link>
              <img
                class="rounded-t-lg"
                src="https://images.unsplash.com/photo-1666515878427-c0a045bf03c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
            </Link>
            <div class="p-5">
              <Link>
                <h5 class="mb-2 text-2xl font-[600] tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology
                </h5>
              </Link>
              <p class="mb-3 font-medium text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              {/* instructor */}
              <div className="instructro-section flex gap-2 items-center">
                <img
                  class="w-10 h-10 rounded-full"
                  src="https://celadon-granita-38dd91.netlify.app/images/avatar.jpg"
                  alt="Rounded avatar"
                />
                <div className="details">
                  <div className="name font-general font-[600] text-xl">
                    Rejwan Ahamed
                  </div>
                  <div className="skill font-general font-medium">
                    Senior Backend DEV
                  </div>
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
                  <p>250</p>
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
                  <p>200m</p>
                </div>
              </div>
              <Link
                type="button"
                class="text-white w-full font-general text-center bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Enroll Course
              </Link>
            </div>
          </div>
          <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Link>
              <img
                class="rounded-t-lg"
                src="https://images.unsplash.com/photo-1666515878427-c0a045bf03c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
            </Link>
            <div class="p-5">
              <Link>
                <h5 class="mb-2 text-2xl font-[600] tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology
                </h5>
              </Link>
              <p class="mb-3 font-medium text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              {/* instructor */}
              <div className="instructro-section flex gap-2 items-center">
                <img
                  class="w-10 h-10 rounded-full"
                  src="https://celadon-granita-38dd91.netlify.app/images/avatar.jpg"
                  alt="Rounded avatar"
                />
                <div className="details">
                  <div className="name font-general font-[600] text-xl">
                    Rejwan Ahamed
                  </div>
                  <div className="skill font-general font-medium">
                    Senior Backend DEV
                  </div>
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
                  <p>250</p>
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
                  <p>200m</p>
                </div>
              </div>
              <Link
                type="button"
                class="text-white w-full font-general text-center bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Enroll Course
              </Link>
            </div>
          </div>
          <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Link>
              <img
                class="rounded-t-lg"
                src="https://images.unsplash.com/photo-1666515878427-c0a045bf03c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
            </Link>
            <div class="p-5">
              <Link>
                <h5 class="mb-2 text-2xl font-[600] tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology
                </h5>
              </Link>
              <p class="mb-3 font-medium text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              {/* instructor */}
              <div className="instructro-section flex gap-2 items-center">
                <img
                  class="w-10 h-10 rounded-full"
                  src="https://celadon-granita-38dd91.netlify.app/images/avatar.jpg"
                  alt="Rounded avatar"
                />
                <div className="details">
                  <div className="name font-general font-[600] text-xl">
                    Rejwan Ahamed
                  </div>
                  <div className="skill font-general font-medium">
                    Senior Backend DEV
                  </div>
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
                  <p>250</p>
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
                  <p>200m</p>
                </div>
              </div>
              <Link
                type="button"
                class="text-white w-full font-general text-center bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Enroll Course
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
