"use client";
import BasePage from "@/app/components/BasePage";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FormBook from "@/app/components/FormBook";
import DeleteModal from "@/app/components/DeleteModal";
import { booksService } from "@/app/data/services";
import { Book } from "@/app/types/Book";
import { ApiError } from "@/app/types/ApiError";
import ErrorToast from "@/app/components/ErrorToast";

export default function DetailsPage() {
  const { id } = useParams();
  const [isFormShow, setIsFormShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [errorData, setErrorData] = useState<ApiError>({
    code: 0,
    message: "",
  });
  const [bookData, setBookData] = useState<Book>({
    id: "",
    title: "",
    author: "",
    year: "",
  });

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadData = async () => {
    setIsLoading(true);
    const response = await booksService.getDetailsBooks(id as string);
    if (response.data) {
      const bookData: Book = response.data;
      setBookData(bookData);
      setIsLoading(false);
    } else {
      setErrorData({
        code: response.code,
        message: response.message,
      });
      setIsToastOpen(true);
    }
  };

  const handleBtnEditState = (state: boolean) => {
    setIsFormShow(state);
  };

  const handleCloseToast = () => {
    setIsToastOpen(false);
  };

  const handleBtnDelete = () => {
    (document.getElementById("delete_modal")! as HTMLDialogElement).showModal();
  };

  return (
    <BasePage>
      <ErrorToast
        isOpen={isToastOpen}
        error={errorData}
        onClose={handleCloseToast}
      />
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
              <button
                onClick={handleBtnDelete}
                className="btn btn-error text-white"
              >
                <DeleteIcon /> Delete
              </button>
            </div>
          </div>
          <div className="p-6 mt-8 w-full flex flex-col gap-3 outline rounded-xl outline-2 outline-gray-300">
            <p className="font-bold text-2xl">Book Data</p>
            <div className="text-xl flex flex-row items-center gap-2">
              <li className="w-1/4">Title</li>
              <p>:</p>
              {isLoading ? (
                <div className="skeleton h-5 w-1/2 bg-zinc-300"></div>
              ) : (
                <span>{bookData.title}</span>
              )}
            </div>
            <div className="text-xl flex flex-row items-center gap-2">
              <li className="w-1/4">Author</li>
              <p>:</p>
              {isLoading ? (
                <div className="skeleton h-5 w-1/2 bg-zinc-300"></div>
              ) : (
                <span>{bookData.author}</span>
              )}
            </div>
            <div className="text-xl flex flex-row items-center gap-2">
              <li className="w-1/4">Year</li>
              <p>:</p>
              {isLoading ? (
                <div className="skeleton h-5 w-1/2 bg-zinc-300"></div>
              ) : (
                <span>{bookData.year}</span>
              )}
            </div>
          </div>
        </div>
      )}
      <DeleteModal />
    </BasePage>
  );
}
