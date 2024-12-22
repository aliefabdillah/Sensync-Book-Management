"use client";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import FormBook from "./FormBook";
import { booksService } from "../data/services";
import { Book } from "../types/Book";
import { ApiError } from "../types/ApiError";
import Loading from "./Loader/Loading";
import EmptyPage from "./EmptyPage";
import ErrorToast from "./ErrorToast";

export default function ListCard() {
  const [isFormShow, setIsFormShow] = useState(false);
  const [booksData, setBooksData] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [errorData, setErrorData] = useState<ApiError>({
    code: 0,
    message: "",
  });

  const handleBtnAddState = (state: boolean) => {
    setIsFormShow(state);
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    setIsLoading(true);
    const response = await booksService.getListBooks();
    if (response.data) {
      const booksResult: Book[] = response.data;
      setBooksData(booksResult);
    } else {
      setErrorData({
        code: response.code,
        message: response.message,
      });
      setIsToastOpen(true);
    }
    setIsLoading(false);
  };

  const handleCloseToast = () => {
    setIsToastOpen(false);
  };

  return (
    <div className="w-full">
      <ErrorToast
        isOpen={isToastOpen}
        error={errorData}
        onClose={handleCloseToast}
      />
      {isFormShow ? (
        <FormBook getIsFormShowingState={handleBtnAddState} />
      ) : (
        <>
          <div className="flex justify-end px-4">
            <button
              onClick={() => handleBtnAddState(true)}
              className="btn btn-success btn-md text-white"
            >
              <AddIcon style={{ fontSize: 35 }} />
              <p className="font-poppins text-lg">Add</p>
            </button>
          </div>
          {isLoading ? (
            <div className="flex justify-center items-center p-8">
              <Loading />
            </div>
          ) : booksData.length == 0 && !isLoading ? (
            <div className="flex justify-center items-center p-8">
              <EmptyPage item="Book" image="/no-results.png" size={300} />
            </div>
          ) : (
            <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 gap-y-7 mt-10 px-4">
              {booksData.map((item, index) => (
                <Link key={index} href={`/details/${item.id}`}>
                  <div
                    className="
              card bg-gray-100 shadow-xl min-h-full
              transnform transition-all duration-300 ease-in-out
              hover:scale-105 hover:shadow-2xl hover:cursor-pointer hover:text-white hover:bg-info
            "
                  >
                    <div className="card-body">
                      <p className="card-title text-ellipsis overflow-hidden line-clamp-2">
                        {item.title}
                      </p>
                      <p className="line-clamp-2">{item.author}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
