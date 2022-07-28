import React from "react";
import data from "../data.json";
import Course from "../components/Course";

const Courses = () => {
  return (
    <div className="flex flex-col items-start mx-8 space-y-3 mt-14 mb-8">
      <h2 className="text-4xl font-bold">A collection of free web templates</h2>
      <h3 className="text-xl">
        Choose and customize to suit your requirements.
      </h3>
      <div className="text-xs lg:text-sm flex space-x-4 ml-1  text-gray-500">
        <p className="temptBtn">Websites</p>
        <p className="temptBtn">E-Commerce </p>
        <p className="temptBtn">Contact Pages</p>
        <p className="temptBtn">Product Pages</p>
        <p className="temptBtn">Saas Landing Pages</p>
        <p className="temptBtn">Admin Dashboards</p>
        <p className="temptBtn">Web Apps</p>
      </div>
      <div className="text-left w-full border border-gray-300 p-7">
        <h2 className="text-2xl font-bold mb-2">
          A broad collection of web templates build with React.js
        </h2>
        <p>
          Download and Modify to your own custom designs. Quicken your
          development with a highly customizable UI design for your website.
        </p>
        <button className="border border-black text-sm font-bold h-10 w-20 hover:bg-[#f5f5f5] mt-4 mb-8">
          Synt-X
        </button>
        <div className="flex gap-4 flex-wrap lg:flex-nowrap">
          {data.map((item) => (
            <div className="h-60 w-60" key={item.id}>
              <Course item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
