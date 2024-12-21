"use client";
import React, { useActionState, useEffect, useState } from "react";
import { addBookaction } from "../data/actions/formBooks";
import ZodErrors from "./ZodErrors";
import SuccessModal from "./SuccessModal";
import ErrorToast from "./ErrorToast";
import { ApiError } from "../types/ApiError";
import ModalLoadingLite from "./Loader/ModalLoading";

interface FormBookProps {
  getIsFormShowingState: (state: boolean) => void;
}

export default function FormBook({ getIsFormShowingState }: FormBookProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [errorData, setErrorData] = useState<ApiError>({
    code: 0,
    message: ''
  })
  const [formAddState, formAddAction] = useActionState(addBookaction, {
    data: null,
  });

  useEffect(() => {
    if (!formAddState.isLoading) {
      setIsLoading(false);
    }

    if (formAddState.isError) {
      setErrorData({
        code: formAddState.apiErrors.code,
        message: formAddState.apiErrors.message
      })
      setIsToastOpen(true)
    }

    if (formAddState.isSuccess) {
      (
        document.getElementById("success_modal") as HTMLDialogElement
      ).showModal();
      setTimeout(() => {
        window.location.reload();
      }, 30000);      
    }
  }, [formAddState]);

  const handleBackButton = (
    event: React.MouseEvent<HTMLButtonElement>,
    isShow: boolean
  ) => {
    event.preventDefault();
    const confirmBack = confirm(
      "Apakah Anda yakin ingin kembali? Perubahan data tidak akan tersimpan."
    );

    if (confirmBack) {
      getIsFormShowingState(isShow);
    }
  };

  const handleCloseToast = () => {
    setIsToastOpen(false);
  };

  return (
    <div className="flex justify-center">
      <SuccessModal message={formAddState?.message}/>
      <ErrorToast error={errorData} isOpen={isToastOpen} onClose={handleCloseToast}/>
      <form
        action={formAddAction}
        onSubmit={() => setIsLoading(true)}
        className="outline-1 outline outline-zinc-400 h-full w-2/3 py-4 px-7 rounded-md"
      >
        <h1 className="text-center font-poppins font-semibold text-xl my-4">
          Form Add Book
        </h1>
        <label className="form-control w-full max-w-full">
          <div className="label">
            <span className="label-text text-zinc-900">
              Title <span className="text-red-700">*</span>
            </span>
          </div>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Type here..."
            className="input bg-white input-bordered w-full max-w-full text-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className="label">
            <ZodErrors error={formAddState?.zodErrors?.title} />
          </div>
        </label>
        <label className="form-control w-full max-w-full">
          <div className="label">
            <span className="label-text text-zinc-900">
              Author <span className="text-red-700">*</span>
            </span>
          </div>
          <input
            type="text"
            id="author"
            name="author"
            placeholder="Type here..."
            className="input bg-white input-bordered w-full max-w-full text-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className="label">
            <ZodErrors error={formAddState?.zodErrors?.author} />
          </div>
        </label>
        <label className="form-control w-full max-w-full">
          <div className="label">
            <span className="label-text text-zinc-900">
              Year <span className="text-red-700">*</span>
            </span>
          </div>
          <input
            min={1}
            id="year"
            name="year"
            type="number"
            placeholder="2024"
            className="input bg-white input-bordered w-full max-w-full text-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className="label">
            <ZodErrors error={formAddState?.zodErrors?.year} />
          </div>
        </label>
        <div className="flex flex-row gap-2 justify-between mt-5">
          <button
            onClick={(event) => handleBackButton(event, false)}
            className="btn btn-outline btn-warning text-white"
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`btn btn-info text-white ${
              isLoading ? "btn-disabled" : ""
            }`}
          >
            {isLoading ? "Loading..." : "Save"}
          </button>
        </div>
      </form>
      <ModalLoadingLite isOpen={isLoading}/>
    </div>
  );
}
