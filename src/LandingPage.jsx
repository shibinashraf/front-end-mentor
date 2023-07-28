import "./index.css";
import  landing  from './assets/landing-img.png'
import Pagenav from "./components/Pagenav";

export default function LandingPage(){
    return(
        <>
       
    <div className="h-screen w-sreen bg-dark flex flex-row place-items-center ">
    <div className=" fixed w-[30rem] h-[30rem] rounded-full blur-[300px] z-[1] green-color animate-pulse ease-in-out"></div>
    <div className="z-20"><Pagenav/></div>
        <div className="flex flex-row items-center w-full h-full">
        <div className=" flex flex-col justify-center mx-auto">
        <div className="text-white hover:animate-pulse	text-6xl  font-zen p-2 flex justify-start z-[10]"> Hi! I am </div>
        <div className="text-yellow-500 text-6xl font-zen flex justify-start ">Shibin</div></div>
        </div>
    </div>
    </>
    )
}