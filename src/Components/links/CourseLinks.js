import React from "react";
import { Link } from "react-router-dom";

const CourseLinks = ({links}) => {
  const {id,name} = links;
  return (
    <div>
      <li className="p-2  border-b border-gray-400 text-[16px] hover:text-orange-500 ">
        <Link to={`/course/${id}`}>{name}</Link>
      </li>
    </div>
  );
};

export default CourseLinks;
