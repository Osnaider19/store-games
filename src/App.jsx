import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Menu } from "./components/Menu/Menu";
import { Details } from "./components/GamesDetails/Details";
import { GamesPage } from "./page/GamesPage";
import { HomePage } from "./page/HomePage";
import { ContextSearchProvider } from "./Context/ContextSearch/ContextSearch";
import { Layout } from "./components/Layout/Layout";
import { Developers } from "./components/Developers/Developers";
import { Page404 } from "./page/Page404";
import { QueryClientProvider , QueryClient } from "@tanstack/react-query";
import { BestYearsPage } from "./page/BestYearsPage";
import { GenresPage } from "./page/GenresPage";
import { BestLastPage } from "./page/BestLastPage";
import { TagsPage } from "./page/TagsPage";
import { PlatformsPage } from "./page/PlatformsPage";
function App() {

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ContextSearchProvider>
        <Menu />
      </ContextSearchProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/genres/:name" element={<GenresPage />}></Route>
          <Route path="/games/" element={<GamesPage />}></Route>
          <Route path="/games/:id" element={<Details />}></Route>
          <Route
            path="/platforms/:id/:name"
            element={<PlatformsPage />}
          ></Route>
          <Route path="/tags/:name" element={<TagsPage />}></Route>
          <Route path="/developers/:name" element={<Developers />}></Route>
          <Route path="/games/filters/:name" element={<GamesPage />}></Route>
          <Route
            path="/discover/last-30-days"
            element={<BestLastPage />}
          ></Route>
          <Route path="/discover/best-year" element={<BestYearsPage />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
