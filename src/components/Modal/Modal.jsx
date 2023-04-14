import React from "react";
import { AiOutlineClose } from "react-icons/ai";

function Modal(props) {
  return (
    <div className="fixed inset-0 bg-gray-100 bg-opacity-50 flex justify-center items-center backdrop-blur-sm ">
      <div className="w-1000  rounded-lg bg-white shadow-lg p-8">
        <div className="flex justify-end">
          <AiOutlineClose
            className="text-gray-600 text-2xl focus:outline-none "
            onClick={() => {
              props.setModalOpen(false);
            }}
          />
        </div>
        <div className="text-center my-4">
          <h1 className="text-2xl font-bold">
            The suggested Employee for this Ticket is :
          </h1>
        </div>
        <div className="text-center my-4">
          <p>THE ASSIGNEE NAME</p>
          <br />
          <p>
            Current assignee is : <strong>{props.ass}</strong>
          </p>
          <p>Would like to re-assign the ticket ?</p>
        </div>
        <div className="flex justify-center mt-8">
          <button
            className="w-36 h-12 text-white bg-red-500 rounded-md mr-4"
            onClick={() => {
              props.setModalOpen(false);
            }}
          >
            Cancel
          </button>
          <button className="w-36 h-12 text-white bg-blue-500 rounded-md">
            Assign
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
