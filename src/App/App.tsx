import { Header } from "src/components/PlayerHeaders";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Editor from "src/components/Editor";

const documentId = "NEW_TEST";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header documentId={documentId} />} />
        <Route path="/edit" element={<Editor documentId={documentId} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
