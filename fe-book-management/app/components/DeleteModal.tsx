import { useRouter } from "next/navigation";
import React from "react";

export default function DeleteModal() {
  const router = useRouter();
  const handleDelete = () => {
    router.back();
  };
  
  return (
    <div>
      <dialog id="delete_modal" className="modal">
        <div className="modal-box w-fit p-10 bg-white">
          <h1 className="mb-4 text-center text-3xl font-bold text-black-2">
            Delete Books
          </h1>
          <p className="mb-4 text-center">Are you sure to delete the item?</p>
          <div className="card-actions justify-center">
            <form method="dialog">
              <button className="btn btn-outline btn-warning">Cancel</button>
            </form>
            <button onClick={handleDelete} className="btn btn-error text-white">Delete</button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
