import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import IssueTickets from "../components/TicketDiv/IssueTickets";
import Test from "./Test";

export default function Main() {
  const [data, setData] = useState([]);

  const [filters, setFilters] = useState({
    id: "",
    sort: "",
    assignee: "",
    status: "",
    priority: "",
    client: "",
    page: 1,
  });

  const [lastpage, setlastpage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const arr = [];
      if (filters.id) {
        arr.push(`id=${filters.id}`);
      }
      if (filters.assignee) {
        arr.push(`assignee=${filters.assignee}`);
      }
      if (filters.client) {
        arr.push(`client=${filters.client}`);
      }
      if (filters.sort) {
        arr.push(`sort=${filters.sort}`);
      }
      if (filters.page) {
        arr.push(`page=${filters.page}`);
      }
      if (filters.status) {
        arr.push(`status=${filters.status}`);
      }
      if (filters.priority) {
        arr.push(`priority=${filters.priority}`);
      }

      const response = await fetch(
        `http://localhost:8000/IssueTickets/TicketsAPI?${arr.join("&")}`
      );
      const tickets = await response.json();
      setData(filters.page === 1 ? tickets.data : data.concat(tickets.data));
      setlastpage(tickets.last_page);
    };

    fetchData();
  }, [filters]);

  return (
    <>
      <IssueTickets
        tickets={data}
        filters={filters}
        setFilters={setFilters}
        lastpage={lastpage}
      />
    </>
  );
}
