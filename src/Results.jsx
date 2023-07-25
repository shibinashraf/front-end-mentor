import { BrowserRouter, Routes, Route } from "react-router-dom";
import memory from './assets/icon-memory.svg'
import reaction from './assets/icon-reaction.svg'
import verbal from './assets/icon-verbal.svg'
import visual from './assets/icon-visual.svg'
import Pagenav from "./components/Pagenav"

const Results = () =>{
    return(
        <div className ='md:h-screen bg-cyan-100 flex justify-center items-center'>
            <Pagenav />
        <div className=" bg-white rounded-xl shadow-md h-[60%] w-[60%] flex flex-col md:flex-row">
            <div className="bg-blue-500 h-full md:w-[40%] p-6 rounded-xl flex-row justify-center align-center">
                <p className="text-center text-white text-xl font-bold ">Your Result</p>
                <div className="bg-gradient-to-b from-blue-700 to-transparent h-28 w-28
                 rounded-full justify-center items-center  flex-row m-auto mt-6 text-white">
                    <p className="font-bold text-center pt-4">76</p>
                    <p className="text-center font-thin pt-2">out of 100</p>
                    </div>
                    <p className="text-center text-xl pt-4 text-white ">Great</p>
                    <p className="text-center text-lg font-normal pt-4 text-white ">You scored more than 65% of people</p>
            </div>
            <div className="md:h-full  w-[60%] ">
                <p className="font-semibold p-6 pl-8">Summary</p>
                <div className="h-12 rounded-lg w-[80%]  ml-6 bg-red-100 flex pl-6 items-center">
                    <img src={memory} alt='memory'></img>
                    <p className=" text-red-600 pl-6 ">Memory</p>
                    <p className="pl-[50%]">80 </p>
                    <p className="text-gray-600 font-light">/100</p>
                </div>
                <div className="h-12 rounded-lg w-[80%]  mt-4 ml-6 bg-yellow-100 flex pl-6 items-center ">
                    <img src={visual} alt='visual'></img>
                    <p className=" text-yellow-600 pl-6 ">Visual</p>
                    <p className="pl-[50%]">80 </p>
                    <p className="text-gray-600 font-light">/100</p>
                </div>
                <div className="h-12 rounded-lg w-[80%] mt-4 ml-6 bg-blue-100 flex pl-6 items-center ">
                    <img src={verbal} alt='verbal'></img>
                    <p className=" text-blue-600 pl-6 ">Verbal</p>
                    <p className="pl-[50%]">80 </p>
                    <p className="text-gray-600 font-light">/100</p>
                </div>
                <div className="h-12 rounded-lg w-[80%] mt-4 ml-6 bg-green-100 flex pl-6 items-center ">
                    <img src={reaction} alt='reaction'></img>
                    <p className=" text-green-600 pl-6 ">Reaction</p>
                    <p className="pl-[50%]">80 </p>
                    <p className="text-gray-600 font-light">/100</p>
                </div>
                <button className="h-12 w-[50%] bg-gray-700 ml-[20%] mt-6 rounded-2xl text-white">Submit</button>
            </div>
        </div>
        </div>
    )
}
export default Results;