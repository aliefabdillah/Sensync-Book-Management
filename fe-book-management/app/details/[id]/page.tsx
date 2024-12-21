"use client";
import BasePage from "@/app/components/BasePage";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FormBook from "@/app/components/FormBook";
import DeleteModal from "@/app/components/DeleteModal";

export default function DetailsPage() {
  const { id } = useParams();
  const [isFormShow, setIsFormShow] = useState(false);

  const handleBtnEditState = (state: boolean) => {
    setIsFormShow(state);
  };

  const handleBtnDelete = () => {
    (document.getElementById("delete_modal")! as HTMLDialogElement).showModal();
  };

  return (
    <BasePage>
      {isFormShow ? (
        <div className="w-full">
          <FormBook getIsFormShowingState={handleBtnEditState} />
        </div>
      ) : (
        <div className="w-2/3">
          <div className="flex flex-row justify-between px-4">
            <button>
              <Link href={"/"} className="text-blue-400">
                <HomeIcon style={{ fontSize: 30 }} />
              </Link>
            </button>
            <div className="flex flex-row gap-3">
              <button
                onClick={() => handleBtnEditState(true)}
                className="btn btn-warning text-white"
              >
                <EditIcon /> Edit
              </button>
              <button onClick={handleBtnDelete} className="btn btn-error text-white">
                <DeleteIcon /> Delete
              </button>
            </div>
          </div>
          <div className="p-6 mt-8 w-full flex flex-col gap-3 outline rounded-xl outline-2 outline-gray-300">
            <p className="font-bold text-2xl">Book Data</p>
            <li className="text-xl">Title: </li>
            <li className="text-xl">Author: </li>
            <li className="text-xl">Year: </li>
            <li className="text-xl">{id}</li>
          </div>
        </div>
      )}
      <DeleteModal/>
    </BasePage>
  );
}
