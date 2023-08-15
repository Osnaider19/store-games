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
import { Tags } from "./components/Tags/Tags";
import { Developers } from "./components/Developers/Developers";
import { Page404 } from "./page/Page404";
import { Last30Days } from "./components/Discover/Last30Days";
import { BestYears } from "./components/Discover/BestYears";

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
          <Route path="/platforms/:name" element={<Platfroms />}></Route>
          <Route path="/tags/:name" element={<Tags />}></Route>
          <Route path="/developers/:name" element={<Developers />}></Route>
          <Route path="/games/filters/:name" element={<GamesPage />}></Route>
          <Route path="/discover/last-30-days" element={<Last30Days />}></Route>
          <Route path="/discover/best-year" element={<BestYears />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
