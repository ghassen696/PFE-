import React, { useEffect, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineCloseCircle, AiOutlineClose } from "react-icons/ai";

function ModalAssigning(props) {
  const [assignees, setAssignees] = useState([]);
  const [employee_name, setemployee_name] = useState("");

  useEffect(() => {
    const fetchAssignees = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/IssueTickets/AssigneesAPI"
        );
        const ass = await response.json();
        setAssignees(ass.assignees);
      } catch (error) {
        console.error("Failed to fetch assignees:", error);
      }
    };

    fetchAssignees();
  }, []);

  const handleemployee_nameChange = (event) => {
    setemployee_name(event.target.value);
  };

  const handleClearAll = () => {
    setemployee_name("");
  };

  const renderEmployeeNameSuggestions = () => {
    return (
      employee_name &&
      assignees &&
      assignees
        .filter(
          (name) =>
            name &&
            name.toLowerCase &&
            name.toLowerCase().includes(employee_name.toLowerCase())
        )
        .slice(0, 1)
        .map((name) => (
          <li key={name} onClick={() => setemployee_name(name)}>
            {name}
          </li>
        ))
    );
  };

  return (
    <div className="fixed inset-0 bg-gray-100 bg-opacity-50 flex justify-center items-center backdrop-blur-sm ">
      <div className="w-1000  rounded-lg bg-white shadow-lg p-7">
        <div className="flex justify-end">
          <AiOutlineClose
            className="text-gray-600 text-2xl focus:outline-none "
            onClick={() => {
              props.setModalOpen(false);
            }}
          />
        </div>
        <div className="mb-1">
          <h1 className="text-xl font-bold mb-7">Search for an assignee :</h1>
          <div className="flex gap-2 items-center border border-gray-300 rounded-md py-2 px-4 focus:outline-none mb-8  ">
            <BsFillPersonFill className="text-25px icon" />
            <input
              type="text"
              value={employee_name}
              onChange={handleemployee_nameChange}
              className="bg-transparent text-blue-500 focus:outline-none w-full placeholder-slate-800"
              placeholder="Search for an assignee ....."
            />
            {employee_name && (
              <AiOutlineClose
                className="text-[30px] text-[#a5a6a6] hover:text-textColor icon"
                onClick={() => setemployee_name("")}
              />
            )}
          </div>
          <div>
            <div className="mt-5 w-300 h-200 bg-white shadow-md overflow-hidden overflow-y-auto">
              {employee_name && (
                <ul className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                  {renderEmployeeNameSuggestions()}
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="text-center my-2 ">
          <p>The current assignee name is : </p>
          <strong>{props.ass}</strong>
          <br />
          <p className="text-center my-3">
            Would like to re-assign this ticket ?
          </p>
        </div>

        <div className="flex justify-center mt-4">
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

export default ModalAssigning;
