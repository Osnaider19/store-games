import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Menu } from "./components/Menu/Menu";
import { Genres } from "./components/Genres/Genres";
import { Details } from "./components/GamesDetails/Details";
import { GamesPage } from "./page/GamesPage";
import { HomePage } from "./page/HomePage";
import { ContextSearchProvider } from "./Context/ContextSearch/ContextSearch";
import { Layout } from "./components/Layout/Layout";
import { Developers } from "./components/Developers/Developers";
import { Page404 } from "./page/Page404";
import { Last30DaysPage } from "./components/Discover/Last30DaysPage";
import { PlatformsPage } from "./components/Platfroms/PlatformsPage";
import { BestYearPage } from "./components/Discover/BestYearPage";
import { TagsPage } from "./components/Tags/TagsPage";

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
          <Route path="/platforms/:id/:name" element={<PlatformsPage />}></Route>
          <Route path="/tags/:name" element={<TagsPage />}></Route>
          <Route path="/developers/:name" element={<Developers />}></Route>
          <Route path="/games/filters/:name" element={<GamesPage />}></Route>
          <Route path="/discover/last-30-days" element={<Last30DaysPage />}></Route>
          <Route path="/discover/best-year" element={<BestYearPage />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
