import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


export default function Nav(){
    return(
        <ul className="flex justify-center gap-6 fixed top-0 w-full p-4 text-red-600 font-bold  bg-slate-800 ">
          <li className="hover:text-yellow-100">
            <Link to="qr-code">QrCode</Link>
          </li>
          <li className="hover:text-yellow-100">
            <Link to="results">Results</Link>
          </li>
          <li>
            <Link to="QrCode">QrCode</Link>
          </li>
        </ul>
    );
}
