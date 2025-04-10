import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import Items from "./pages/Items";
import "./App.css";
import userImage from "./assets/userImage.png";
import logo from "./assets/pandaLogo.png";
import AddItem from "./pages/AddItem";

function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <div className="header__logo">
          <div className="header_logo-container">
            <NavLink to="/items">
              <img src={logo} alt="logo" className="logo" />
            </NavLink>
          </div>

          <div className="header__nav-container">
            <nav className="nav">
              <NavLink to="/board">자유게시판</NavLink>
              <NavLink to="items">중고마켓</NavLink>
            </nav>
          </div>
        </div>

        <div className="header__right">
          <img src={userImage} alt="user" className="user_img" />
        </div>
      </header>
      <hr style={{ border: "solid 1px #DFDFDF" }} />
      <Routes>
        <Route path="/" element={<Navigate to="/items" replace />} />
        <Route path="/board" element={<h1>자유게시판</h1>} />
        <Route path="/items" element={<Items />} />
        <Route path="/additem" element={<AddItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
