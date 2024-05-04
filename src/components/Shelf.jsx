import React from "react";

const Shelf = () => {
  return (
    <>
      <div className="grid grid-cols-3 grid-flow-row gap-4 m-3">
        <div className="bg-red-600 border border-white h-64 rounded-md">Book #1</div>
        <div className="bg-red-600 border border-white h-64 rounded-md">Book #1</div>
        <div className="bg-red-600 border border-white h-64 rounded-md">Book #1</div>
      </div>
    </>
  );
};

export default Shelf;
