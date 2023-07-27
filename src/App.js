import QrCode from "./QrCode";
import Results from "./Results";
import Home from "./Home";
import AgeApp from "./AgeApp";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ToDo from "./ToDo";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qr-code" element={<QrCode />} />
        <Route path="/results" element={<Results />} />
        <Route path="/age-app" element={<AgeApp />} />
        <Route path="/to-do-app" element={<ToDo />} />
      </Routes>
    </>
  );
};

export default App;
