import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Items from "./components/Items";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header>
        판다마켓
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/board">자유게시판</NavLink>
          <NavLink to="/items">중고마켓</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<h1>home</h1>} />
        <Route path="/board" element={<h1>board</h1>} />
        <Route path="/items" element={<Items />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
