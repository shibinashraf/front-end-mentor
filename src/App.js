import "./App.css";
import QrCode from "./QrCode";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="">
        <ul className="flex justify-evenly pt-4 text-red-600 font-bold bg-slate-800 ">
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
        <div className="bg-slate-800  h-screen flex justify-center items-center">
          <h1 className=" m-auto text-slate-100 text-xl">
            View my frontend practice projects by clicking on navbar items
          </h1>
        </div>
        <Routes>
          <Route path="QrCode" element={<QrCode />} exact />
        </Routes>
      </div>
    </>
  );
};

export default App;
