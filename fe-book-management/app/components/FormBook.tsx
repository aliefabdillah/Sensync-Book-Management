import React from "react";

interface FormBookProps {
  getIsFormShowingState: (state: boolean) => void;
}

export default function FormBook({ getIsFormShowingState }: FormBookProps) {
  const handleBackButton = (isShow: boolean) => {
    const confirmBack = confirm(
      "Apakah Anda yakin ingin kembali? Perubahan data tidak akan tersimpan."
    );

    if (confirmBack) {
      getIsFormShowingState(isShow);
    }
  };

  return (
    <div className="flex justify-center">
      <form className="outline-1 outline outline-zinc-400 h-full w-2/3 py-4 px-7 rounded-md">
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
            placeholder="Type here..."
            className="input bg-white input-bordered w-full max-w-full text-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className="label">
            <span className="label-text-alt ">Bottom Left label</span>
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
            placeholder="Type here..."
            className="input bg-white input-bordered w-full max-w-full text-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className="label">
            <span className="label-text-alt ">Bottom Left label</span>
          </div>
        </label>
        <label className="form-control w-full max-w-full">
          <div className="label">
            <span className="label-text text-zinc-900">
              Year <span className="text-red-700">*</span>
            </span>
          </div>
          <input
            min={0}
            type="number"
            placeholder="2024"
            className="input bg-white input-bordered w-full max-w-full text-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className="label">
            <span className="label-text-alt ">Bottom Left label</span>
          </div>
        </label>
        <div className="flex flex-row gap-2 justify-between mt-5">
          <button
            onClick={() => handleBackButton(false)}
            className="btn text-white"
          >
            Cancel
          </button>
          <button className="btn btn-info text-white">Save</button>
        </div>
      </form>
    </div>
  );
}
