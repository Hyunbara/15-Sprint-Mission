import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import Items from "./pages/Items";
import "./App.css";
import userImage from "./assets/userImage.png";
import logo from "./assets/pandaLogo.png";
import AddItem from "./pages/AddItem";

/**
 *
 *  router를 통해 페이지 전환을 관리하고 있습니다.
 *  header에는 로고 + 네비게이션 + 사용자 이미지로 구성되어있습니다. (/items: 중고마켓, /board: 자유게시판, /additem: 상품 등록 페이지)
 */
function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <div className="header__logo">
          <div>
            <NavLink to="/items">
              <img src={logo} alt="logo" className="header__logo-img" />
            </NavLink>
          </div>

          <div className="header__nav-container">
            <nav className="header__nav">
              <NavLink to="/board">자유게시판</NavLink>
              <NavLink to="items">중고마켓</NavLink>
            </nav>
          </div>
        </div>

        <div className="header__right">
          <img src={userImage} alt="user" className="header__user-img" />
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
