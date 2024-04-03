import React, { useState } from "react";
import { IoMdTime } from "react-icons/io";
import companylogo from "../public/images/companylogo1.png";
import Search from "./InternshipSearch";

const Data = [
  {
    id: 1,
    image: companylogo,
    title: "Software Developer Intern",
    time: "Now",
    location: "Delhi",
    type :"Full-Time",
    level:"Beginner",
    paid: true,
    desc: "This is the description",
    company: "The innovation masters",
  },
  {
    id: 2,
    image: companylogo,
    title: "Web Developer",
    time: "4hrs",
    location: "Bangalore",
    type :"Full-Time",
    level:"Beginner",
    paid: false,
    desc: "This is the description",
    company: "The innovation masters",
  },
  {
    id: 3,
    image: companylogo,
    title: "Data Analyst",
    time: "2d",
    location: "Bangalore",
    type :"Remote",
    level:"Advanced",
    paid: true,
    desc: "This is the description",
    company: "The innovation masters",
  },
  {
    id: 4,
    image: companylogo,
    title: "Machine Learning Engineer",
    time: "Now",
    location: "Bangalore",
    type :"Part-Time",
    level:"Intermediate",
    paid: true,
    desc: "This is the description",
    company: "The innovation masters",
  },
  {
    id: 5,
    image: companylogo,
    title: "Embedded Systems Engineer",
    time: "5hrs",
    location: "Bangalore",
    type :"Remote",
    level:"Beginner",
    paid: false,
    desc: "This is the description",
    company: "The innovation masters",
  },
  {
    id: 6,
    image: companylogo,
    title: "Computer Vision Engineer",
    time: "2hrs",
    location: "Bangalore",
    type :"Part-Time",
    level:"Beginner",
    paid: false,
    desc: "This is the description",
    company: "The innovation masters",
  },
  {
    id: 7,
    image: companylogo,
    title: "Computer Vision Intern",
    time: "Now",
    location: "Bangalore",
    type :"Full-Time",
    level:"Beginner",
    paid: true,
    desc: "This is the description",
    company: "The innovation masters",
  },
  {
    id: 8,
    image: companylogo,
    title: "Data Analyst",
    time: "Now",
    location: "Bangalore",
    type :"Part-Time",
    level:"Beginner",
    paid: false,
    desc: "This is the description",
    company: "The innovation masters",
  },
];

const JobSearch = () => {
  const [searchData, setSearchData] = useState(Data);

  return (
    <div >
      {/* Search component */}
      <Search searchData={Data} setSearchData={setSearchData} />
      
      {/* Job listings */}
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {searchData.map(({ id, image, title, time, location, type, level, paid, desc, company }) => {
          return (
            <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] shadow-lg shadow-greyIsh-400/700 hover:shadow-md transition-all duration-300 transform hover:scale-105">
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold text-textColor">
                  {title}
                </h1>
                <span className="flex items-center text-[#ccc] gap-1">
                  <IoMdTime />
                  {time}
                </span>
              </span>
              <h6 className="text-[#ccc]">{location}</h6>
              <div className="text-sm text-gray-600 pt-[20px] border-t-[2px] mt-[20px]">
                Type: {type}
              </div>
              <div className="text-sm text-gray-600">
                Level: {level}
              </div>
              <div className="text-sm text-gray-600">
                {paid ? "Paid" : "Unpaid"}
              </div>
              <div className="company flex items-center gap-2">
                <img src={companylogo} alt="" className="w-[10%]" />
                <span className="text-[14px] py-[1rem] block">
                  {company}
                </span>
              </div>
              <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-[#00A3D4] group-hover/item:text-textColor">
                Apply
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobSearch;
