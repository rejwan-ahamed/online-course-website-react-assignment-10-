import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Crad/Card";
import CourseLinks from '../../Components/links/CourseLinks'


const Courses = () => {
  const mainData = useLoaderData();
  console.log(mainData)

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
          {mainData.map((data, id) => (
           <CourseLinks links={data} key={id}></CourseLinks>
          ))}
          </ol>
        </div>
        <div className="course-cards-main font-general grid grid-cols-1 px-4 lg:grid-cols-3 lg:pl-0 gap-3 lg:col-span-7 lg:px-20 xl:px-40 xl:pl-6">
          {mainData.map((data, id) => (
            <Card courseData={data} key={id}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
