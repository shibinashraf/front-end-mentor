import "./QrCode.css";
import qr  from './assets/qr.png';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const QrCode = () =>{
    return(
    <body className="h-screen bg-slate-400 items-center justify-center flex">
        <div className="h-3/5 w-1/6 bg-white  rounded-xl flex-column p-4">
            <img className='w-full h-2/3 rounded-xl' src={ qr } alt="qr"></img>
            <p className="text-center font-bold	">Improve Your Frontend skills by doing projects</p>
            <p className="text-center font-thin">Scan the qr to visit frontend mentor and take your coding skills to the next level.</p>
        </div>
    </body>
    )
}
export default QrCode;