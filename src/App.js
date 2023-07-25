import QrCode from "./QrCode";
import Results from "./Results";
import Home from "./Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="qr-code" element={<QrCode />} />
        <Route path="results" element={<Results />} />
      </Routes>
    </>
  );
};

export default App;
