import "./App.css";
import QrCode from "./QrCode";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="Main">
        <ul className="flex justify-evenly mt-4 text-red-600 font-bold">
          <li className="">
            <Link to="QrCode">QrCode</Link>
          </li>
          <li>
            <Link to="QrCode">QrCode</Link>
          </li>
          <li>
            <Link to="QrCode">QrCode</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="QrCode" element={<QrCode />} />
      </Routes>
    </>
  );
};

export default App;
