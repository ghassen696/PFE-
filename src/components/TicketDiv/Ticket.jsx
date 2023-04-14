/*import React, { useState, useEffect } from "react";
import { BiTimeFive } from "react-icons/bi";

export default function Ticket(props) {
  const { tickets } = props;
  const [loading, setLoading] = useState(true);

  return (
    <>
      {tickets.length ? (
        <div className="flex justify-center items-center h-screen">
          <BeatLoader
            color="#61A8FF"
            size={23}
            sizeUnit={"px"}
            loading={true}
          />
        </div>
      ) : (
        <div>
          <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10 ">
            {tickets.map(
              ({ id, priority, duedate, summary, projectid, assignee }) => {
                return (
                  <div
                    key={id}
                    className="group group/items singleJob h-[250px] w-[250px] p-[20px] bg-white rounded
      [10px] overflow:hidden border-radius-[10px]; hover:bg-bluecolor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
                  >
                    <span className="flex justify-between items-center gap-4">
                      <h1
                        className="text-[16px] font-semibold text-textColor
              group-hover:text-white"
                      >
                        ticketID:{projectid}
                      </h1>
                      <span className="flex items-center text-[#ccc] gap-1">
                        <BiTimeFive />
                        Priority:{priority}
                      </span>
                    </span>
                    <h6 className="text-[#ccc]">{duedate}</h6>
                    <p
                      className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px]
          group-hove:text-white"
                    >
                      {summary.length > 50
                        ? ticket_summary.slice(0, 50) + "..."
                        : ticket_summary}
                    </p>
                    <div>
                      <span
                        className="text-[14px] py-[1rem] block text-[#959595]
          group-hover:text-white"
                      >
                        Assignee : {assignee}
                      </span>
                    </div>
                    <button
                      className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] marginTop-[20px]
              font-semibold text-textColor hover:bg-white group-hover/item:text-textColor "
                    >
                      check details
                    </button>
                  </div>
                );
              }
            )}
          </div>
        </div>
      )}
    </>
  );
}
/*
import React, { useState, useEffect } from "react";
import { BiTimeFive } from "react-icons/bi";

export default function Ticket() {
  const [tickets, setTickets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    const response = await fetch("http://localhost:8000/IssueTickets/issues/")
      .then((response) => response.json())
      //.then((data) => startTransition(()=>{setTickets(data)}))
      .then((data) => setTickets(data))
      .setLoading(false)
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div>
        <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
          {tickets
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map(
              ({
                ticket_number,
                priority,
                due_date,
                ticket_summary,
                project_id,
                employee_name,
              }) => {
                return (
                  <div
                    key={ticket_number}
                    className="group group/items singleJob h-[250px] w-[250px] p-[20px] bg-white rounded
      [10px] overflow:hidden border-radius-[10px]; hover:bg-bluecolor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
                  >
                    <span className="flex justify-between items-center gap-4">
                      <h1
                        className="text-[16px] font-semibold text-textColor
              group-hover:text-white"
                      >
                        ticketID:{project_id}
                      </h1>
                      <span className="flex items-center text-[#ccc] gap-1">
                        <BiTimeFive />
                        Priority:{priority}
                      </span>
                    </span>
                    <h6 className="text-[#ccc]">{due_date}</h6>
                    <p
                      className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px]
          group-hove:text-white"
                    >
                      {ticket_summary.length > 50
                        ? ticket_summary.slice(0, 50) + "..."
                        : ticket_summary}
                    </p>
                    <div>
                      <span
                        className="text-[14px] py-[1rem] block text-[#959595]
          group-hover:text-white"
                      >
                        Assignee : {employee_name}
                      </span>
                    </div>
                    <button
                      className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] marginTop-[20px]
              font-semibold text-textColor hover:bg-white group-hover/item:text-textColor "
                    >
                      check details
                    </button>
                  </div>
                );
              }
            )}
        </div>
        <page />
      </div>
    </>
  );
}
*/
import React from "react";

export default function Ticket() {
  return <div>Ticket</div>;
}
