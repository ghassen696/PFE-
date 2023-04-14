import Main from "./Pages/Main";
import { BrowserRouter, Route, NavLink, Routes } from "react-router-dom";
import Ticket_Detail from "./Pages/Ticket_Detail";
import Login_Page from "./Pages/Login_Page";
import Test from "./Pages/Test";
import NavBar from "./components/NavBar/NavBar";
const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/tickets/:id" element={<Ticket_Detail />} />
        <Route path="/login_page" element={<Login_Page />} />
        <Route path="/test/:id" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
