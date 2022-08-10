import React from "react";

const TopBar = () => {
  return (
    <div className="p-4 grow ">
      <div className="flex justify-between items-center">
        <h2 className="">Dashboard</h2>
        <div className="hidden sm:block">
          <div className="flex gap-4">
            <input
              className="rounded border px-2 sm:w-30vw"
              placeholder="Search here"
              type="search"
              name=""
              id=""
            />
            <button
              className="bg-lgreen p-2 px-4 text-white rounded"
              type="submit"
            >
              search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
