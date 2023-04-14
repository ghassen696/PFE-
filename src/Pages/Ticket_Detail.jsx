import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Modal from "../components/Modal/Modal";
import ModalAssigning from "../components/Modal/ModalAssigning";
import NavBar from "../components/NavBar/NavBar";
import IssueTickets from "../components/TicketDiv/IssueTickets";
function TicketDetail() {
  const { id } = useParams();
  const [ticket, setTicket] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenassign, setModalOpenassign] = useState(false);

  useEffect(() => {
    const fetchTicket = async () => {
      const response = await fetch(
        `http://localhost:8000/IssueTickets/TicketsdetailAPI/${id}`
      );
      const ticketData = await response.json();

      // Filter out any duplicate tickets based on ID
      //const filteredTickets = ticketData.data.filter(
      //  (ticket, index, self) =>
      //  index === self.findIndex((t) => t.id === ticket.id)
      // );
      const filteredTickets = ticketData.data;
      // set the ticket on the most recent ticket with that id
      setTicket(ticketData);
    };

    fetchTicket();
  }, [id]);

  let button;
  if (ticket.assignee == "expert.garde.etudes" || ticket.assignee === "") {
    button = (
      <div>
        <button
          className="border-[2px] rounded-[10px] block p-[13px] w-1/5 text-[14px] bg-white rounded-md
    font-semibold text-textColor hover:bg-blue-400 group-hover/item:text-textColor absolute top-16 right-20  "
          onClick={() => {
            setModalOpen(true);
          }}
        >
          See suggestion for an assignee
        </button>
        {modalOpen && (
          <Modal setModalOpen={setModalOpen} ass={ticket.assignee} />
        )}
      </div>
    );
  }
  let assign;
  assign = (
    <div>
      <button
        className="border-[2px] rounded-[10px] block p-[8px] w-1/3 
        text-[15px] bg-white font-semibold text-textColor hover:bg-blue-400 group-hover/item:text-textColor md:float-right mb-10 "
        onClick={() => {
          setModalOpenassign(true);
        }}
      >
        Assign ticket
      </button>
      <br />

      {modalOpenassign && (
        <ModalAssigning
          setModalOpen={setModalOpenassign}
          ass={ticket.assignee}
        />
      )}
    </div>
  );

  const [openFaq1, setOpenFaq1] = useState(false);
  const [openFaq2, setOpenFaq2] = useState(false);
  const [openFaq3, setOpenFaq3] = useState(false);
  const [openFaq4, setOpenFaq4] = useState(false);
  const [openFaq5, setOpenFaq5] = useState(false);
  const [openFaq6, setOpenFaq6] = useState(false);
  return (
    <>
      <section
        data={{
          openFaq1,
          openFaq2,
          openFaq3,
          openFaq4,
          openFaq5,
          openFaq6,
        }}
        className="relative z-200 overflow-hidden bg-white pt-20 pb-102 lg:pt-[2px] lg:pb-[50px]"
      >
        <button
          className="fixed top-1 left-0 p-2 m-2 bg-gray-200 rounded-lg hover:bg-red-500"
          onClick={() => window.history.back()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="sr-only">Back</span>
        </button>
        <div className="bg-greyIsh">
          <div className="container mx-auto">
            <div className="-mx-2 flex flex-wrap">
              <div className="w-full mt-7 px-4">
                {/*<div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">*/}
                <div>
                  <span className="mb-2 block text-lg font-semibold text-primary">
                    Project ID:{ticket.project_id}
                  </span>
                  <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                    Ticket ID: {ticket.id}
                  </h2>
                  <p className="text-base text-body-color">{ticket.summary}</p>
                  {button}
                  <br />
                </div>
              </div>
            </div>
            <div className="-mx-4 flex flex-wrap ">
              <div className="w-full px-4 lg:w-1/2">
                <div className="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
                  <button
                    className="faq-btn flex w-full text-left"
                    onClick={() => setOpenFaq1(!openFaq1)}
                  >
                    <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
                      <svg
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        className="icon fill-current"
                      >
                        <path
                          d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                          fill="#3056D3"
                          stroke="#3056D3"
                        />
                      </svg>
                    </div>
                    <div className="w-full ">
                      <h4 className="text-lg font-semibold text-black ">
                        Details
                      </h4>
                    </div>
                  </button>
                  {openFaq1 && (
                    <div className="faq-content pl-[62px]">
                      <p className="py-3 text-base leading-relaxed text-body-color">
                        <p>
                          {" "}
                          Type :<strong>{ticket.issuetype}</strong>{" "}
                        </p>
                        <p>
                          {" "}
                          Priority:
                          {ticket.priority}{" "}
                        </p>
                        <p> Status: :{ticket.status} </p>
                      </p>
                    </div>
                  )}
                </div>
                <div className="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
                  <button
                    className="faq-btn flex w-full text-left"
                    onClick={() => setOpenFaq2(!openFaq2)}
                  >
                    <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
                      <svg
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        className="icon fill-current"
                      >
                        <path
                          d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                          fill="#3056D3"
                          stroke="#3056D3"
                        />
                      </svg>
                    </div>
                    <div className="w-full">
                      <h4 className="text-lg font-semibold text-black">
                        smthing?
                      </h4>
                    </div>
                  </button>
                  {openFaq2 && (
                    <div className="faq-content pl-[62px]">
                      <p className="py-3 text-base leading-relaxed text-body-color">
                        text
                      </p>
                    </div>
                  )}
                </div>
                <div className="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
                  <button
                    className="faq-btn flex w-full text-left"
                    onClick={() => setOpenFaq3(!openFaq3)}
                  >
                    <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
                      <svg
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        className="icon fill-current"
                      >
                        <path
                          d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                          fill="#3056D3"
                          stroke="#3056D3"
                        />
                      </svg>
                    </div>
                    <div className="w-full">
                      <h4 className="text-lg font-semibold text-black">
                        smthing?
                      </h4>
                    </div>
                  </button>
                  {openFaq3 && (
                    <div className="faq-content pl-[62px]">
                      <p className="py-3 text-base leading-relaxed text-body-color">
                        paara .
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <div className="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
                  <button
                    className="faq-btn flex w-full text-left"
                    onClick={() => setOpenFaq4(!openFaq4)}
                  >
                    <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
                      <svg
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        className="icon fill-current"
                      >
                        <path
                          d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                          fill="#3056D3"
                          stroke="#3056D3"
                        />
                      </svg>
                    </div>
                    <div className="w-full">
                      <h4 className="text-lg font-semibold text-black">
                        People
                      </h4>
                    </div>
                  </button>
                  {openFaq4 && (
                    <div className="faq-content pl-[62px]">
                      <div className="faq-item">
                        <div className="faq-label">
                          Assignee: <strong>{ticket.assignee}</strong>
                        </div>
                      </div>
                      <div className="faq-item">
                        <div className="faq-label">
                          Reporter: <strong>{ticket.reporter}</strong>
                        </div>
                      </div>
                      <div className="faq-item">
                        <div className="faq-label">
                          Creator: <strong>{ticket.creator}</strong>
                        </div>
                      </div>
                      <div className="faq-item">
                        <div className="faq-label">
                          Client:<strong>{ticket.client}</strong>
                        </div>
                      </div>
                      <div className="">{assign}</div>
                    </div>
                  )}
                </div>
                <div className="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
                  <button
                    className="faq-btn flex w-full text-left"
                    onClick={() => setOpenFaq5(!openFaq5)}
                  >
                    <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
                      <svg
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        className="icon fill-current"
                      >
                        <path
                          d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                          fill="#3056D3"
                          stroke="#3056D3"
                        />
                      </svg>
                    </div>
                    <div className="w-full">
                      <h4 className="text-lg font-semibold text-black">
                        Dates
                      </h4>
                    </div>
                  </button>
                  {openFaq5 && (
                    <div className="faq-content pl-[62px]">
                      <p className="py-3 text-base leading-relaxed text-body-color">
                        <p>
                          {" "}
                          Due date :<strong />
                          {ticket.due_date}{" "}
                        </p>
                        <p>
                          {" "}
                          Creation date :<strong />
                          {ticket.created}{" "}
                        </p>
                        <p>
                          {" "}
                          Updated dtae :<strong />
                          {ticket.updated}{" "}
                        </p>
                        <p>
                          {" "}
                          resolutiondate:
                          <strong />
                          {ticket.resolutiondate}{" "}
                        </p>
                      </p>
                    </div>
                  )}
                </div>
                <div className="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
                  <button
                    className="faq-btn flex w-full text-left"
                    onClick={() => setOpenFaq6(!openFaq6)}
                  >
                    <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
                      <svg
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        className="icon fill-current"
                      >
                        <path
                          d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                          fill="#3056D3"
                          stroke="#3056D3"
                        />
                      </svg>
                    </div>
                    <div className="w-full">
                      <h4 className="text-lg font-semibold text-black">
                        Description
                      </h4>
                    </div>
                  </button>
                  {openFaq6 && (
                    <div x-show="openFaq6" className="faq-content pl-[62px]">
                      <p className="py-3 text-base leading-relaxed text-body-color">
                        {ticket.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TicketDetail;
