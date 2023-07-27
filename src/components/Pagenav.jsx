import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {useState} from 'react';
import nav from '../assets/nav.png'
export default function Pagenav(){
  const NavMenu = ()=> {
    return(
            <div className="flex fixed bottom-[15%] right-2 bg-gray-900 p-4 w-auto items-center rounded-l-xl"> 
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
                  <li className="hover:text-blue-300 pt-2">
                    <Link to="/to-do-app">To Do App</Link>
                  </li>
                  </ul>
                </div>
                )
                }
  const [isShown, setIsShown] = useState(false);
  const handleMouseEnter = event => {
      setIsShown(true);
      setTimeout(() => {
        setIsShown(false)
      }, 3000);
    };
    
  
    return(
        <>
      <button onMouseEnter={handleMouseEnter}><div className="w-14 h-14 rounded-full flex fixed bottom-8 right-4 hover:w-16 hover:h-16 " ><img src ={nav} alt='nav'></img></div></button>
      {isShown && <NavMenu />}
        </>

    )
    
}