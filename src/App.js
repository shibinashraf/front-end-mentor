import "./App.css";
import QrCode from "./QrCode";
import Results from "./Results";
import Home from "./Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="qr-code" exact element={<QrCode />} />
        <Route path="results" exact element={<Results />} />
      </Routes>
    </>
  );
};

export default App;
