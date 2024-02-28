import { Header } from "src/components/Pages/Render";
import { HashRouter, Routes, Route } from "react-router-dom";
import Editor from "src/components/Pages/Edit";
import { Layout } from "src/components/Layout";

const documentId = "NEW_TEST";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="render" element={<Header documentId={documentId} />} />
        <Route path="" element={<Layout />}>
          <Route index element={<h1>Hellooo</h1>} />
          <Route path="edit" element={<Editor />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
