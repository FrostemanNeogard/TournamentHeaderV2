import { Header } from "src/components/PlayerHeaders";
import { HashRouter, Routes, Route } from "react-router-dom";
import Editor from "src/components/Editor";
import { Layout } from "src/components/Layout";

const documentId = "NEW_TEST";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="render" element={<Header documentId={documentId} />} />
        <Route path="" element={<Layout />}>
          <Route path="edit" element={<Editor documentId={documentId} />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
