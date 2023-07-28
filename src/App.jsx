import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./page/Home";
import { Menu } from "./components/Menu/Menu";
import { Search } from "./page/Search";
function App() {
  return (
    <>
      <Menu />
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/search" element={<Search/>}></Route>
      </Routes>
    </>
  );
}

export default App;
