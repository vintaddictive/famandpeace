
import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const SearchComponent = () => {


  return (
    <div className=" bg-gray-100">
      <div className="relative">
        <input
          type="text"
          placeholder=""
          className="px-12 w-full py-1 rounded-full border-2 border-blue-400 border-opacity-40 focus:outline-none focus:ring-1 focus:ring-red pr-10"

        />
        <Link to="/russia"
          type="button"
          className="absolute right-0 top-0 bottom-0 bg-gradient-rainred text-white px-3 py-2 rounded-full"
					
        >
          <FaSearch />
        </Link>
      </div>
    </div>
  );
};

export default SearchComponent;
