"use client";
import BasePage from "@/app/components/BasePage";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function DetailsPage() {
  const { id } = useParams();

  return (
    <BasePage>
      <div className="w-2/3">
        <div className="flex flex-row justify-between px-4">
          <button>
            <Link href={"/"} className="text-blue-400">
              <HomeIcon style={{ fontSize: 30 }} />
            </Link>
          </button>
          <div className="flex flex-row gap-3">
            <button className="btn btn-warning text-white">
              <EditIcon /> Edit
            </button>
            <button className="btn btn-error text-white">
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
    </BasePage>
  );
}
