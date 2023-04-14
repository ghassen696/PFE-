import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";

import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { BiTimeFive } from "react-icons/bi";
import { styled, alpha } from "@mui/material/styles";
import { AiOutlineCloseCircle, AiOutlineSearch } from "react-icons/ai";
import { FaProjectDiagram } from "react-icons/Fa";
import { BsFillPersonFill } from "react-icons/bs";
import InputBase from "@mui/material/InputBase";

import { Link } from "react-router-dom";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),

    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const TicketContainer = styled("div")({
  position: "relative",
  height: "300px", // set the desired height
  width: "250px", // set the desired width
  borderRadius: "10px", // set the desired border-radius
});

const LearnMoreButton = styled(Button)({
  position: "absolute",
  bottom: "20px", // set the desired bottom margin
  left: "50%", // center the button horizontally
  transform: "translateX(-50%)", // center the button horizontally
});
export default function IssueTickets(props) {
  const { tickets } = props;
  const search_assignee = (assignee) => {
    props.setFilters({
      ...props.filters,

      assignee,
      page: 1,
    });
  };
  const search_id = (id) => {
    props.setFilters({
      ...props.filters,
      id,
      page: 1,
    });
  };
  const search_client = (client) => {
    props.setFilters({
      ...props.filters,
      client,
      page: 1,
    });
  };
  const sort = (sort) => {
    props.setFilters({
      ...props.filters,

      sort,
      page: 1,
    });
  };
  const status = (status) => {
    props.setFilters({
      ...props.filters,

      status,
      page: 1,
    });
  };
  const priority = (priority) => {
    props.setFilters({
      ...props.filters,

      priority,
      page: 1,
    });
  };

  const load = () => {
    props.setFilters({
      ...props.filters,
      page: props.filters.page + 1,
    });
  };
  let button;
  if (props.filters.page !== props.lastpage) {
    button = (
      <div>
        <button
          className="border-[2px] rounded-[10px] block p-[10px] w-1/3 text-[14px] marginTop-[20px]
    font-semibold text-textColor hover:bg-white group-hover/item:text-textColor mx-auto mb-10"
          on
          onClick={load}
        >
          Load More
        </button>
      </div>
    );
  }
  const clearAllFilters = () => {
    props.setFilters({
      assignee: "",
      id: "",
      client: "",
      sort: "",
      status: "",
      priority: "",
      page: 1,
    });
  };

  return (
    <>
      <div className="w-[80%] m-auto bg-white">
        <div className="searchDiv grid gap-7 bg-greyIsh rounded-[10px] p-[3rem]">
          <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-1000 ">
            <div className=" flex gap-2 items-center">
              <BsFillPersonFill className="text-[25px] icon " />
              <input
                type="text"
                value={props.filters.assignee}
                onChange={(e) => search_assignee(e.target.value)}
                className="bg-transparent text-blue-500 focus:outline-none w-full"
                placeholder="Search by assignee ....."
              />
              <AiOutlineCloseCircle
                className="text-[30px] text-[#a5a6a6] hover:text-textColor icon"
                onClick={() => props.setFilters({ assignee: "", page: 1 })}
              />
            </div>
            <div className=" flex gap-2 items-center">
              <FaProjectDiagram className="text-[25px] icon " />
              <input
                type="text"
                value={props.filters.id}
                onChange={(e) => search_id(e.target.value)}
                className="bg-transparent text-blue-500 focus:outline-none w-full"
                placeholder="Search by ticket_id....."
              />
              <AiOutlineCloseCircle
                className="text-[30px] text-[#a5a6a6] hover:text-textColor icon"
                onClick={() => props.setFilters({ id: "", page: 1 })}
              />
            </div>
            <div className=" flex gap-2 items-center">
              <AiOutlineSearch className="text-[25px] icon " />
              <input
                type="text"
                value={props.filters.client}
                onChange={(e) => search_client(e.target.value)}
                className="bg-transparent text-blue-500 focus:outline-none w-full"
                placeholder="Search by client....."
              />
              <AiOutlineCloseCircle
                className="text-[30px] text-[#a5a6a6] hover:text-textColor icon"
                onClick={() => props.setFilters({ client: "", page: 1 })}
              />
            </div>
          </div>

          <div className="secDiv flex items-center  gap-10 justify-center">
            <div className="singleSearch flex items-center gap-2">
              <label htmlFor="due" className="text-[#808080] font-semibold">
                Sort by :
              </label>
              <select
                id="due"
                className="bg-white rounded-[3px] px-4 py-1"
                onChange={(e) => sort(e.target.value)}
              >
                <option value="asc"> creation date Asc</option>
                <option value="desc"> creation date Desc</option>
              </select>
            </div>
            <div className="singleSearch flex items-center gap-2">
              <label htmlFor="stat" className="text-[#808080] font-semibold">
                Status :
              </label>
              <select
                id="stat"
                className="bg-white rounded-[3px] px-4 py-1"
                onChange={(e) => status(e.target.value)}
              >
                <option value="open">open</option>
                <option value="in progress"> in progresse</option>
                <option value="Resolved">Resolved</option>
                <option value="Closed"> Closed</option>
              </select>
            </div>
            <div className="singleSearch flex items-center gap-2">
              <label htmlFor="pri" className="text-[#808080] font-semibold">
                Priority :
              </label>
              <select
                id="pri"
                className="bg-white rounded-[3px] px-4 py-1"
                onChange={(e) => priority(e.target.value)}
              >
                <option value="Major">Major</option>
                <option value="Critical">Critical</option>
                <option value="Blocker">Blocker</option>
                <option value="Closed"> Minor</option>
              </select>
            </div>
            <button
              onClick={clearAllFilters}
              className="text-[#a1a1a1] cursor-pointer  hover:text-bluecolor"
            >
              Clear All
            </button>
          </div>
        </div>

        <Box className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10 overflow-hidden">
          {tickets.map((tik, index) => {
            return (
              /*className="group group/items singleJob h-[250px] w-[250px] p-[20px] bg-white rounded
    [10px] overflow:hidden border-radius-[10px]; hover:bg-bluecolor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
    */
              <div key={tik.index} className="group">
                <TicketContainer className="singleJob p-[20px] bg-white overflow:hidden shadow-lg shadow-greyIsh-400/700 hover:shadow-lg hover:bg-blue-500 shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
                  <React.Fragment>
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        <span className="flex items-center text-[#ccc] gap-1 group-hover:text-white">
                          <BiTimeFive />
                          {tik.duedate ? <>{tik.duedate}</> : <p>null</p>}
                        </span>
                      </Typography>
                      <Typography
                        variant="h6"
                        component="div"
                        className="group-hover:text-white"
                      >
                        {tik.assignee}
                      </Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                        className="group-hover:text-white"
                      >
                        {tik.priority}
                      </Typography>
                      <Divider variant="fullwidth" />

                      <Typography
                        variant="body2"
                        className="group-hover:text-white pt-6 text-base font-semibold leading-7"
                      >
                        {tik.summary.length > 60
                          ? tik.summary.slice(0, 50) + "..."
                          : tik.summary}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Link
                        className="button"
                        to={`/tickets/${tik.id}`} // <== navigate to ticket detail page with ticket ID
                      >
                        Learn More
                      </Link>
                    </CardActions>
                  </React.Fragment>
                </TicketContainer>
              </div>
            );
          })}
        </Box>
        {button}
      </div>
    </>
  );
}
