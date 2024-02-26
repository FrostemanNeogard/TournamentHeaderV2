import { Header } from "src/components/PlayerHeaders";
import { HashRouter, Routes, Route } from "react-router-dom";
import Editor from "src/components/Editor";

const documentId = "NEW_TEST";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Header documentId={documentId} />} />
        <Route path="/edit" element={<Editor documentId={documentId} />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
