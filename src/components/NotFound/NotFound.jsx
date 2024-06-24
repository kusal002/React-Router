import React from "react";

function NotFound() {
  return (
    <div className=" bg-slate-400 rounded-full">
      <div className="m-20 p-20 flex justify-center text-center">
        <h1 className="p-8 mt-10 text-xl font-bold">
          <span className="text-9xl font-bold p-3 mb-5  text-gray-600">
            404
          </span>{" "}
          <br />
          NOT FOUND
        </h1>
      </div>
    </div>
  );
}

export default NotFound;
