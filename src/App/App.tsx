import { TournamentHeader } from "src/Pages/Render";
import { HashRouter, Routes, Route } from "react-router-dom";
import Editor from "src/Pages/Edit";
import { Layout } from "src/components/Layout";
import { HomePage } from "src/Pages/Home";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="render" element={<TournamentHeader />} />
        <Route path="" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="edit" element={<Editor />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
