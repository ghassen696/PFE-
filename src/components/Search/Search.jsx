import React, { useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineCloseCircle, AiOutlineSearch } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsFillPersonFill } from "react-icons/bs";
import Ticket from "../TicketDiv/Ticket";

export default function Search({ tickets }) {
  const [employee_name, setemployee_name] = useState("");
  const [project, setProject] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [filteredTickets, setFilteredTickets] = useState([]);

  const handleemployee_nameChange = (event) => {
    setemployee_name(event.target.value);
  };

  const handleProjectChange = (event) => {
    setProject(parseInt(event.target.value));
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const filteredTickets = tickets.filter(
      (ticket) =>
        (!employee_name || ticket.employee_name === employee_name) &&
        (!project || ticket.project_id === project) &&
        (!priority || ticket.priority === priority) &&
        (!status || ticket.status === status)
    );
    setFilteredTickets(filteredTickets);
  };

  const handleClearAll = () => {
    setemployee_name("");
    setProject("");
    setPriority("");
    setStatus("");
  };

  const renderEmployeeNameSuggestions = () => {
    return tickets
      .filter((ticket) =>
        ticket.employee_name.toLowerCase().includes(employee_name.toLowerCase())
      )
      .slice(0, 1)
      .map((ticket) => (
        <li
          key={ticket.id}
          onClick={() => setemployee_name(ticket.employee_name)}
        >
          {ticket.employee_name}
        </li>
      ));
  };
  const renderprojectSuggestions = () => {
    return tickets
      .filter((ticket) => ticket.project_id.includes(project))
      .slice(0, 1)
      .map((ticket) => (
        <li key={ticket.id} onClick={() => setProject(ticket.project_id)}>
          {ticket.project_id}
        </li>
      ));
  };
  let button;
  button = (
    <div className="text-center">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Load More
      </button>
    </div>
  );
  return (
    <div>
      <div className="searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]">
        <form onSubmit={handleSearch}>
          <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 ">
            <div className=" overflow-hidden bg-white rounded-md  dark:bg-gray-800">
              <div className="flex gap-2 items-center">
                <BsFillPersonFill className="text-[25px] icon " />
                <input
                  type="text"
                  value={employee_name}
                  onChange={handleemployee_nameChange}
                  className="bg-transparent text-blue-500 focus:outline-none w-full"
                  placeholder="Search by employee_name ....."
                />
                {employee_name && (
                  <AiOutlineCloseCircle
                    className="text-[30px] text-[#a5a6a6] hover:text-textColor icon"
                    onClick={() => setemployee_name("")}
                  />
                )}
              </div>
              <div>
                {employee_name && (
                  <ul className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                    {renderEmployeeNameSuggestions()}
                  </ul>
                )}
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <GrProjects className="text-[25px] icon" />
                <input
                  type="text"
                  value={project}
                  onChange={handleProjectChange}
                  className="bg-transparent text-blue-500 focus:outline-none w-full"
                  placeholder="Search by project ....."
                />
                {project && (
                  <AiOutlineCloseCircle
                    className="text-[30px] text-[#a5a6a6] hover:text-textColor icon"
                    onClick={() => setProject("")}
                  />
                )}
              </div>
              <div>
                {project && (
                  <ul className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                    {renderprojectSuggestions()}
                  </ul>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="bg-bluecolor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      {filteredTickets.length ? (
        <Ticket tickets={filteredTickets} />
      ) : (
        <>
          <p>No tickets found.</p>
        </>
      )}
      {button}
    </div>
  );
}
/*
import React, { useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineCloseCircle, AiOutlineSearch } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsFillPersonFill } from "react-icons/bs";
import Ticket from "../TicketDiv/Ticket";

export default function Search({ tickets }) {
  const [employee_name, setemployee_name] = useState("");
  const [project, setProject] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [filteredTickets, setFilteredTickets] = useState([]);

  const handleemployee_nameChange = (event) => {
    setemployee_name(event.target.value);
  };

  const handleProjectChange = (event) => {
    setProject(parseInt(event.target.value));
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const filteredTickets = tickets.filter(
      (ticket) =>
        (!employee_name || ticket.employee_name === employee_name) &&
        (!project || ticket.project_id === project) &&
        (!priority || ticket.priority === priority) &&
        (!status || ticket.status === status)
    );
    setFilteredTickets(filteredTickets);
  };

  const handleClearAll = () => {
    setemployee_name("");
    setProject("");
    setPriority("");
    setStatus("");
  };

  const renderEmployeeNameSuggestions = () => {
    return tickets
      .filter((ticket) =>
        ticket.employee_name.toLowerCase().includes(employee_name.toLowerCase())
      )
      .slice(0, 1)
      .map((ticket) => (
        <li
          key={ticket.id}
          onClick={() => setemployee_name(ticket.employee_name)}
        >
          {ticket.employee_name}
        </li>
      ));
  };
  const renderprojectSuggestions = () => {
    return tickets
      .filter((ticket) => ticket.project_id.includes(project))
      .slice(0, 1)
      .map((ticket) => (
        <li key={ticket.id} onClick={() => setProject(ticket.project_id)}>
          {ticket.project_id}
        </li>
      ));
  };
  let button;
  button = (
    <div className="text-center">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Load More
      </button>
    </div>
  );
  return (
    <div>
      <div className="searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]">
        <form onSubmit={handleSearch}>
          <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 ">
            <div className=" overflow-hidden bg-white rounded-md  dark:bg-gray-800">
              <div className="flex gap-2 items-center">
                <BsFillPersonFill className="text-[25px] icon " />
                <input
                  type="text"
                  value={employee_name}
                  onChange={handleemployee_nameChange}
                  className="bg-transparent text-blue-500 focus:outline-none w-full"
                  placeholder="Search by employee_name ....."
                />
                {employee_name && (
                  <AiOutlineCloseCircle
                    className="text-[30px] text-[#a5a6a6] hover:text-textColor icon"
                    onClick={() => setemployee_name("")}
                  />
                )}
              </div>
              <div>
                {employee_name && (
                  <ul className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                    {renderEmployeeNameSuggestions()}
                  </ul>
                )}
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <GrProjects className="text-[25px] icon" />
                <input
                  type="text"
                  value={project}
                  onChange={handleProjectChange}
                  className="bg-transparent text-blue-500 focus:outline-none w-full"
                  placeholder="Search by project ....."
                />
                {project && (
                  <AiOutlineCloseCircle
                    className="text-[30px] text-[#a5a6a6] hover:text-textColor icon"
                    onClick={() => setProject("")}
                  />
                )}
              </div>
              <div>
                {project && (
                  <ul className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                    {renderprojectSuggestions()}
                  </ul>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="bg-bluecolor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      {filteredTickets.length ? (
        <Ticket tickets={filteredTickets} />
      ) : (
        <>
          <p>No tickets found.</p>
        </>
      )}
      {button}
    </div>
  );
}
*/
