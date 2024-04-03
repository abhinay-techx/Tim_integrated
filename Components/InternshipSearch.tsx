import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";

const Search = ({ searchData, setSearchData }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [levelFilter, setLevelFilter] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredData = searchData.filter((job) => {
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLocation = !locationFilter || job.location.toLowerCase().includes(locationFilter.toLowerCase());
      const matchesType = !typeFilter || job.type.toLowerCase() === typeFilter.toLowerCase();
      const matchesLevel = !levelFilter || job.level.toLowerCase() === levelFilter.toLowerCase();

      return matchesSearch && matchesLocation && matchesType && matchesLevel;
    });
    setSearchData(filteredData);
  };

  return (
    <div className="searchDiv grid gap-10 bg-lightGray rounded-[10px] p-[3rem]">
      <form onSubmit={handleSearch}>
        {/* Search Input */}
        <div className="firstDiv flex justify-between items-center rounded-[8px] gap-5 bg-white p-3 shadow-lg shadow-blueColour-700">
          <div className="flex gap-10 items-center">
            <IoSearchOutline className="text-[2em] icon" />
            <input
              type="text"
              className="bg-transparent text-[#00A3D4] focus:outline-none w-full"
              placeholder="Search Internships here"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <IoIosCloseCircleOutline
              className="text-[2em] text-[#4b4b4e] hover:text-textColor icon"
              onClick={() => setSearchQuery("")}
            />
          </div>
          {/* Location Filter */}
          <div className="flex gap-10 items-center">
            <CiLocationOn className="text-[2em] icon" />
            <input
              type="text"
              className="bg-transparent text-[#00A3D4] focus:outline-none w-full"
              placeholder="Search by location"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
            />
            <IoIosCloseCircleOutline
              className="text-[2em] text-[#4b4b4e] hover:text-textColor icon"
              onClick={() => setLocationFilter("")}
            />
          </div>
          {/* Sort By Filter */}
          <div className="flex gap-10 items-center">
            <select
              className="bg-transparent text-[#00A3D4] focus:outline-none"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="">Sort by</option>
              {/* <option value="relevance">Relevance</option> */}
              <option value="type">Type</option>
              <option value="level">Level</option>
            </select>
            {sortBy === "type" && (
              <select
                className="bg-transparent text-[#00A3D4] focus:outline-none"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
              >
                <option value="">All</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
              </select>
            )}
            {sortBy === "level" && (
              <select
                className="bg-transparent text-[#00A3D4] focus:outline-none"
                value={levelFilter}
                onChange={(e) => setLevelFilter(e.target.value)}
              >
                <option value="">All</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            )}
            <button className="bg-[#00A3D4] h-full p-[1em] rounded-[10px] text-white cursor-pointer hover:bg-[#00A3D4]">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;