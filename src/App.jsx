import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./page/Home";
import { Menu } from "./components/Menu/Menu";
import { Genres } from "./components/Genres/Genres";
import { GamesDetails } from "./components/Games/GamesDetails";
function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/genres/:name" element={<Genres />}></Route>
        <Route path="/games/:id" element={<GamesDetails/>}></Route>
      </Routes>
    </>
  );
}

export default App;
