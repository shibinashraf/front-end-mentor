import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Pagenav(){
    return(
        <>
        <div className="w-12 flex fixed bottom-4 right-0  bg-gray-900 p-4 hover:w-auto items-center rounded-l-xl"> 
            <ul className="text-white">
            <li className ="hover:text-blue-300 pt-2">
            <Link to="/">Home</Link></li>
            <li className="hover:text-blue-300 pt-2">
            <Link to="/qr-code">QrCode</Link>
          </li>
          <li className="hover:text-blue-300 pt-2">
            <Link to="/results">Results</Link>
          </li>
          <li className="hover:text-blue-300 pt-2">
            <Link to="/age-app">Age App</Link>
          </li>
          </ul>
        </div>
        </>
    )
}