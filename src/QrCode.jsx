import qr  from './assets/qr.png';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pagenav from './components/Pagenav';
const QrCode = () =>{
    return(
    <div className="h-screen bg-teal-100 items-center justify-center flex">
        <Pagenav />
        <div className="w-[50%] md:w-[20%] lg:w-[20%] shadow-lg bg-white  rounded-xl flex-column p-4">
            <img className='w-full h-2/3 rounded-xl' src={ qr } alt="qr"></img>
            <p className="text-center font-bold	">Improve Your Frontend skills by doing projects</p>
            <p className="text-center font-thin">Scan the qr to visit frontend mentor and take your coding skills to the next level.</p>
        </div>
    </div>
    )
}
export default QrCode;