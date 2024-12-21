import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";

export default function ListCard() {
  return (
    <div>
      <div className="flex justify-end px-4">
        <button className="btn btn-success btn-md text-white">
          <AddIcon style={{ fontSize: 35 }} />
          <p className="font-poppins text-lg">Add</p>
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4 px-4">
        {Array.from({ length: 5 }, (_, index) => (
          <Link key={index} href={`/details/${index}`}>
            <div
              key={index}
              className="
              card lg:card-side bg-gray-200 shadow-xl 
              transnform transition-all duration-300 ease-in-out
              hover:scale-105 hover:shadow-2xl hover:cursor-pointer hover:text-white hover:bg-info
            "
            >
              <div className="card-body">
                <h2 className="card-title">{`New movie ${index} is released!`}</h2>
                <p>Click the button to watch on Jetflix app.</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
