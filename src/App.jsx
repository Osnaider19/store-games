import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Menu } from "./components/Menu/Menu";
import { Genres } from "./components/Genres/Genres";
import { Details } from "./components/GamesDetails/Details";
import { GamesPage } from "./page/GamesPage";
import { HomePage } from "./page/HomePage";
import { ContextSearchProvider } from "./Context/ContextSearch/ContextSearch";
import { Layout } from "./components/Layout/Layout";
import { Platfroms } from "./components/Platfroms/Platfroms";

function App() {
  return (
    <>
      <ContextSearchProvider>
        <Menu />
      </ContextSearchProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/genres/:name" element={<Genres />}></Route>
          <Route path="/games/" element={<GamesPage />}></Route>
          <Route path="/games/:id" element={<Details />}></Route>
          <Route path="/games/platforms/:name" element={<Platfroms />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
